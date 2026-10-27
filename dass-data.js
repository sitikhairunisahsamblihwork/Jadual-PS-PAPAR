// ═══════════════════════════════════════════════════════════════
// DASS-21 (Depression Anxiety Stress Scales) — versi Bahasa Melayu
// Item BM: versi DASS-21 BM dalam talian (Malay DASS-21)
// Pembahagian item & skor: Lovibond & Lovibond (1995); Musa et al.
// Skor DASS-21 = jumlah item × 2
// ═══════════════════════════════════════════════════════════════

// Senarai saringan DASS = senarai PRisMA + tambahan di bawah
export const DASS_TAMBAHAN = ['ANDIEKA'];
export const DASS_JABATAN = ['Krew PETRONAS','Pengurusan Parmanis Sutera'];

export const DASS_SKALA = [
  {v:0, bm:'Tidak Pernah', en:'Never'},
  {v:1, bm:'Jarang',       en:'Sometimes'},
  {v:2, bm:'Kerap',        en:'Often'},
  {v:3, bm:'Sangat Kerap', en:'Almost always'},
];

export const DASS21 = [
  {n:1,  k:'S', bm:'Saya dapati diri saya sukar ditenteramkan.', en:'I found it hard to wind down.'},
  {n:2,  k:'A', bm:'Saya sedar mulut saya terasa kering.', en:'I was aware of dryness of my mouth.'},
  {n:3,  k:'D', bm:'Saya tidak dapat mengalami perasaan positif sama sekali.', en:'I couldn’t seem to experience any positive feeling at all.'},
  {n:4,  k:'A', bm:'Saya mengalami kesukaran bernafas (contohnya pernafasan yang laju, tercungap-cungap walaupun tidak melakukan senaman fizikal).', en:'I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion).'},
  {n:5,  k:'D', bm:'Saya sukar untuk mendapatkan semangat bagi melakukan sesuatu perkara.', en:'I found it difficult to work up the initiative to do things.'},
  {n:6,  k:'S', bm:'Saya cenderung untuk bertindak keterlaluan dalam sesuatu keadaan.', en:'I tended to over-react to situations.'},
  {n:7,  k:'A', bm:'Saya rasa menggeletar (contohnya pada tangan).', en:'I experienced trembling (e.g. in the hands).'},
  {n:8,  k:'S', bm:'Saya rasa saya menggunakan banyak tenaga dalam keadaan cemas.', en:'I felt that I was using a lot of nervous energy.'},
  {n:9,  k:'A', bm:'Saya bimbang keadaan di mana saya mungkin menjadi panik dan melakukan perkara yang membodohkan diri sendiri.', en:'I was worried about situations in which I might panic and make a fool of myself.'},
  {n:10, k:'D', bm:'Saya rasa saya tidak mempunyai apa-apa untuk diharapkan.', en:'I felt that I had nothing to look forward to.'},
  {n:11, k:'S', bm:'Saya dapati diri saya semakin gelisah.', en:'I found myself getting agitated.'},
  {n:12, k:'S', bm:'Saya rasa sukar untuk relaks.', en:'I found it difficult to relax.'},
  {n:13, k:'D', bm:'Saya rasa sedih dan murung.', en:'I felt down-hearted and blue.'},
  {n:14, k:'S', bm:'Saya tidak dapat menahan sabar dengan perkara yang menghalang saya meneruskan apa yang saya lakukan.', en:'I was intolerant of anything that kept me from getting on with what I was doing.'},
  {n:15, k:'A', bm:'Saya rasa hampir-hampir menjadi panik.', en:'I felt I was close to panic.'},
  {n:16, k:'D', bm:'Saya tidak bersemangat dengan apa jua yang saya lakukan.', en:'I was unable to become enthusiastic about anything.'},
  {n:17, k:'D', bm:'Saya tidak begitu berharga sebagai seorang individu.', en:'I felt I wasn’t worth much as a person.'},
  {n:18, k:'S', bm:'Saya rasa yang saya mudah tersentuh.', en:'I felt that I was rather touchy.'},
  {n:19, k:'A', bm:'Saya sedar tindak balas jantung saya walaupun tidak melakukan aktiviti fizikal (contohnya kadar denyutan jantung bertambah, atau denyutan jantung berkurangan).', en:'I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat).'},
  {n:20, k:'A', bm:'Saya berasa takut tanpa sebab yang munasabah.', en:'I felt scared without any good reason.'},
  {n:21, k:'D', bm:'Saya rasa hidup ini tidak bermakna.', en:'I felt that life was meaningless.'},
];

export const TAHAP = ['Normal','Ringan','Sederhana','Teruk','Sangat Teruk'];
export const TAHAP_WARNA = ['#16a34a','#65a30d','#f59e0b','#ea580c','#b91c1c'];

// Had atas bagi Normal, Ringan, Sederhana, Teruk (skor ×2); melebihi = Sangat Teruk
export const SUBSKALA = {
  D:{bm:'Kemurungan', en:'Depression', had:[9,13,20,27]},
  A:{bm:'Kebimbangan', en:'Anxiety',   had:[7,9,14,19]},
  S:{bm:'Stres',       en:'Stress',    had:[14,18,25,33]},
};
export const SUB_KOD = ['D','A','S'];

export function dassSah(a){return Array.isArray(a)&&a.length===21&&a.every(v=>Number.isInteger(v)&&v>=0&&v<=3);}

export function dassSkor(a){
  const out={};
  for(const k of SUB_KOD){
    const skor=DASS21.filter(q=>q.k===k).reduce((s,q)=>s+Number(a[q.n-1]||0),0)*2;
    const h=SUBSKALA[k].had; let t=h.findIndex(x=>skor<=x); if(t<0)t=4;
    out[k]={skor,tahap:t,label:TAHAP[t]};
  }
  out.maks=Math.max(out.D.tahap,out.A.tahap,out.S.tahap);
  out.item21=Number(a[20]||0);   // "hidup ini tidak bermakna"
  return out;
}

// Panduan untuk staf (keputusan sendiri)
export const NASIHAT_STAF = [
  'Tahap anda normal. Teruskan amalan sihat: tidur cukup, bersenam, makan seimbang dan luangkan masa bersama keluarga/rakan.',
  'Ada tanda tekanan ringan. Cuba teknik relaksasi (pernafasan perlahan, rehat sebentar), kongsi perasaan dengan orang yang dipercayai, dan jaga tidur serta senaman.',
  'Tahap sederhana. Anda digalakkan berbincang dengan PTP dan mendapatkan nasihat di Klinik Kesihatan atau kaunselor. Bantuan awal sangat membantu.',
  'Tahap teruk. Sila dapatkan pemeriksaan di Klinik Kesihatan / doktor secepat mungkin. Anda tidak perlu menghadapinya seorang diri — PTP sedia membantu.',
  'Tahap sangat teruk. Sila dapatkan bantuan profesional segera di Klinik Kesihatan / hospital. Hubungi Talian HEAL 15555 untuk sokongan, atau 999 jika kecemasan.',
];

// Panduan tindakan untuk PTP
export const TINDAKAN_PTP = [
  'Tiada tindakan khusus. Teruskan program kesejahteraan & saringan berkala.',
  'Pantau. Beri maklumat pengurusan stres; galakkan sokongan rakan sekerja. Saringan semula dalam 1–3 bulan.',
  'Perbincangan peribadi secara sulit. Galakkan rujukan ke Klinik Kesihatan / kaunselor. Semak beban kerja & syif jika berkaitan.',
  'Perbincangan peribadi SEGERA. Rujuk ke Klinik Kesihatan / Pegawai Perubatan. Pertimbang penyesuaian tugas sementara. Susulan berkala.',
  'Tindakan SEGERA hari yang sama. Rujuk ke Klinik Kesihatan / hospital. Pastikan staf tidak bersendirian jika ada risiko. HEAL 15555 · 999 jika kecemasan. Dokumentasi susulan.',
];
