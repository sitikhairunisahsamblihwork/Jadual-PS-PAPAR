// Cloud Function: hantar ALARM TUKAR TANGKI ke semua fon berdaftar.
// Dicetuskan setiap kali rekod baru ditulis ke tangki/log (dari Staff/Boss Portal).
const { onValueCreated } = require('firebase-functions/v2/database');
const admin = require('firebase-admin');
admin.initializeApp();

const fmt = n => Math.round(+n || 0).toLocaleString('en-MY');

exports.alarmTangki = onValueCreated(
  { ref: '/tangki/log/{logId}', region: 'asia-southeast1', instance: 'ps-papar-default-rtdb' },
  async event => {
    const db = admin.database();
    const x = event.data.val() || {};
    const [setSnap, tanksSnap, tokSnap] = await Promise.all([
      db.ref('tangki/settings').get(), db.ref('tangki/tanks').get(), db.ref('tangki/tokens').get()
    ]);
    const S = { cap: 27000, swLvl: 3000, crit: 2700, ...(setSnap.val() || {}) };
    const T = tanksSnap.val() || {};
    const name = id => (T[id] && T[id].name) || 'Tangki';

    let msg = null;
    if (x.type === 'bacaan') {
      const t = T[x.tank];
      if (!t || !t.active || +x.level > S.swLvl) return;           // hanya tangki SEDANG GUNA yang capai had
      const crit = +x.level <= S.crit;
      const nxt = Object.entries(T).filter(([id, o]) => id !== x.tank && o.fuel === t.fuel && +o.level > S.swLvl)
        .sort((a, b) => b[1].level - a[1].level)[0];
      msg = {
        kind: 'alarm', tag: 'tangki-' + x.tank,
        title: `${crit ? '🛑 KRITIKAL' : '🚨 TUKAR TANGKI'} – ${t.name} (${t.fuel})`,
        body: `Baki ${fmt(x.level)} L (had ${fmt(S.swLvl)} L). ` +
          (nxt ? `Tukar ke ${nxt[1].name} (${fmt(nxt[1].level)} L).` : `Tiada tangki ${t.fuel} lain – hubungi pembekal!`) +
          (crit ? ' HENTIKAN PAM SEGERA.' : '') + ` Direkod oleh ${x.by || '-'}.`
      };
    } else if (x.type === 'tukar') {
      const t = T[x.to] || {};
      msg = {
        kind: 'info', tag: 'tangki-' + (x.from || x.to),
        title: `✅ Tangki ditukar – ${t.fuel || ''}`,
        body: `${x.from ? name(x.from) + ' → ' : 'Kini guna '}${name(x.to)} oleh ${x.by || '-'}.`
      };
    }
    if (!msg) return;

    const toks = Object.entries(tokSnap.val() || {}).filter(([, v]) => v && v.token);
    if (!toks.length) return;
    const messages = toks.map(([, v]) => ({
      token: v.token,
      data: { ...msg, page: v.mode === 'boss' ? 'boss-portal.html' : 'staff-portal.html' },
      webpush: { headers: { Urgency: 'high', TTL: '3600' } }
    }));
    const dead = {};
    for (let i = 0; i < messages.length; i += 500) {
      const res = await admin.messaging().sendEach(messages.slice(i, i + 500));
      res.responses.forEach((r, j) => {
        const code = r.error && r.error.code;
        if (code === 'messaging/registration-token-not-registered' || code === 'messaging/invalid-registration-token' || code === 'messaging/invalid-argument')
          dead['tangki/tokens/' + toks[i + j][0]] = null;
      });
    }
    if (Object.keys(dead).length) await db.ref().update(dead);   // buang fon yang sudah tidak aktif
  }
);
