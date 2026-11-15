// Service worker untuk push notification ALARM TUKAR TANGKI.
// Didaftarkan oleh tangki.js dengan scope './tangki-push/' supaya tidak ganggu sw.js (Jadual).
importScripts('https://www.gstatic.com/firebasejs/11.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCu7bM27mdlpt6Wptec3SHNImK5EiJxlow",
  authDomain: "ps-papar.firebaseapp.com",
  databaseURL: "https://ps-papar-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ps-papar", storageBucket: "ps-papar.firebasestorage.app",
  messagingSenderId: "899715424164", appId: "1:899715424164:web:91584f2d3db796095beb31"
});
const messaging = firebase.messaging();

// Mesej dihantar sebagai "data sahaja" oleh Cloud Function, jadi kita papar sendiri.
messaging.onBackgroundMessage(payload => {
  const d = payload.data || {};
  return self.registration.showNotification(d.title || 'Alarm Tangki', {
    body: d.body || '',
    tag: d.tag || 'tangki',
    renotify: true,
    requireInteraction: d.kind === 'alarm',
    vibrate: d.kind === 'alarm' ? [500, 200, 500, 200, 500, 200, 800] : [200],
    data: { page: d.page || 'staff-portal.html' }
  });
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const page = (e.notification.data && e.notification.data.page) || 'staff-portal.html';
  const url = new URL('../' + page + '#tangki', self.registration.scope).href;
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) { if (c.url.split('#')[0] === url.split('#')[0] && 'focus' in c) { c.navigate(url).catch(() => {}); return c.focus(); } }
    return clients.openWindow(url);
  }));
});
