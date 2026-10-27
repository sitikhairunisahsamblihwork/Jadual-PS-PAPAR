// ═══════════════════════════════════════════════════════════════
// PRisMA 2024 (JKKP/DOSH) — data & pengiraan bersama
// Digunakan oleh staff-portal.html dan boss-portal.html
// Sumber: Guidelines on Psychosocial Risk Assessment and Management
// at the Workplace 2024 (LEO26, EPC23, PRiMA, Appendix 2–4)
// ═══════════════════════════════════════════════════════════════

export const STAFF_LIST = [
  'NURUL IZYANA','MOHD NAZRI BIN JASNI','HASNAL','BELLA','LISA','SUHFEE','ATI',
  'INSYIRAH','JOHNY','SHAFIKAH','ANDIEKA','FERENICA','SURIATI','ELFI'
];

// Skala LEO26
export const SKALA = [
  {v:1, bm:'Tidak Pernah', en:'Never'},
  {v:2, bm:'Jarang',       en:'Seldom'},
  {v:3, bm:'Kadang-kadang',en:'Sometimes'},
  {v:4, bm:'Kerap',        en:'Often'},
  {v:5, bm:'Sentiasa',     en:'Always'},
];

export const TAHUN_PENGALAMAN = ['1 – 5 tahun','6 – 10 tahun','11 – 15 tahun','16 – 20 tahun','Lebih 20 tahun'];
export const KATEGORI_PEKERJA = ['Operasi','Eksekutif / Penyelia','Pengurusan'];

// 26 item LEO26 — BM + teks asal (EN)
export const LEO26 = [
  {n:1,  bm:'Kerja saya membosankan.', en:'My work is boring.'},
  {n:2,  bm:'Kerja saya kurang kepelbagaian (sama sahaja setiap hari).', en:'My work lacks variety.'},
  {n:3,  bm:'Kerja saya tidak bermakna.', en:'My work is meaningless.'},
  {n:4,  bm:'Saya dikehendaki bekerja berjam-jam lamanya.', en:'I am required to work long hours.'},
  {n:5,  bm:'Waktu kerja saya tidak fleksibel.', en:'My working hours are not flexible.'},
  {n:6,  bm:'Waktu kerja saya tidak menentu.', en:'My working hours are unpredictable.'},
  {n:7,  bm:'Kawasan kerja saya tidak diselenggara dengan baik.', en:'My work area is poorly maintained.'},
  {n:8,  bm:'Peralatan kerja saya tidak diselenggara dengan baik.', en:'My work equipment is poorly maintained.'},
  {n:9,  bm:'Peralatan kerja saya tidak mencukupi.', en:'My work equipment is inadequate.'},
  {n:10, bm:'Kawasan kerja saya tidak selamat.', en:'My work area is not safe.'},
  {n:11, bm:'Saya tidak selesa bekerja di kawasan kerja saya.', en:'I am not comfortable working in my work area.'},
  {n:12, bm:'Peluang kemajuan kerjaya saya tidak adil.', en:'My career development opportunity is unfair.'},
  {n:13, bm:'Saya diberi peluang untuk mencapai potensi penuh saya.', en:'I am given the opportunity to achieve my full potential.'},
  {n:14, bm:'Saya tidak berpeluang untuk meningkatkan kemahiran saya.', en:'I do not have the chance to develop my skills.'},
  {n:15, bm:'Peranan saya di tempat kerja adalah jelas.', en:'My role in the organisation is clear.'},
  {n:16, bm:'Saya menerima arahan yang bercanggah untuk melakukan kerja saya.', en:'I receive conflicting instructions to perform my work.'},
  {n:17, bm:'Saya mempunyai hubungan yang baik dengan rakan sekerja.', en:'I have a good relationship with my co-workers.'},
  {n:18, bm:'Saya mempunyai hubungan yang baik dengan ketua/penyelia saya.', en:'I have a good relationship with my superior.'},
  {n:19, bm:'Saya menerima sokongan yang baik daripada rakan sekerja.', en:'I receive good support from my co-workers.'},
  {n:20, bm:'Saya menerima sokongan yang baik daripada ketua/penyelia saya.', en:'I receive good support from my superior.'},
  {n:21, bm:'Saya berpeluang menerima maklum balas daripada ketua/penyelia saya.', en:'I have the opportunity to receive feedback from my superior.'},
  {n:22, bm:'Saya boleh menyuarakan kebimbangan saya kepada ketua/penyelia.', en:'I am able to voice out concerns to my superior.'},
  {n:23, bm:'Ketua/penyelia saya terbuka menerima cadangan daripada pekerja.', en:'My superior is open to suggestions from employees.'},
  {n:24, bm:'Pihak pengurusan atasan mengambil berat tentang kesejahteraan pekerja.', en:'My top management cares about employees’ well-being.'},
  {n:25, bm:'Saya terpaksa mengorbankan masa peribadi kerana komitmen kerja.', en:'I have to sacrifice my personal time due to my work commitments.'},
  {n:26, bm:'Saya terlepas aktiviti sosial kerana komitmen kerja.', en:'I miss social activities due to my work commitments.'},
];

// Pemetaan komponen & nilai potong (RICoV) — Garis Panduan PRisMA 2024
// Individu: JC ≥ 15.5 tinggi, WD ≥ 7.5 tinggi, JS ≤ 38.5 tinggi
// Organisasi: JC ≥ 50%, WD ≥ 25%, JS ≥ 25% = TINGGI
export const KOMPONEN = {
  JC:{nama:'Kawalan Kerja', en:'Job Control',  items:[1,2,3,7,8,9,10,11,12,14,16],
      tinggi:s=>s>15.5, potongTxt:'> 15.5', orgCut:50,
      leoItems:['Work environment','Tools and workspaces','Career progress'], epc:[1,5,9,12,14,17,20]},
  WD:{nama:'Tuntutan Kerja', en:'Work Demand', items:[4,5,6,25,26],
      tinggi:s=>s>7.5, potongTxt:'> 7.5', orgCut:25,
      leoItems:['Balance work and daily life','Working hours'], epc:[3,15,4,11,18]},
  JS:{nama:'Sokongan Kerja', en:'Job Support', items:[13,15,17,18,19,20,21,22,23,24],
      tinggi:s=>s<38.5, potongTxt:'< 38.5', orgCut:25,
      leoItems:['Role in the organisation','Relationship between colleagues','Organisational culture'], epc:[6,8,19,7,13,21,2,10,16,22,23]},
};
export const KOD = ['JC','WD','JS'];

// EPC23 — Senarai Semak Amalan Majikan (Appendix 2)
export const EPC23 = [
  {n:1,  tema:'SS', en:'Ensure the psychosocial risk of my employees is managed accordingly.', bm:'Memastikan risiko psikososial pekerja diuruskan sewajarnya.'},
  {n:2,  tema:'TF', en:'Ensure transparency and fairness in complaints handling procedures.', bm:'Memastikan ketelusan dan keadilan dalam prosedur pengendalian aduan.'},
  {n:3,  tema:'JM', en:'Ensure tasks are clearly defined.', bm:'Memastikan tugasan ditakrifkan dengan jelas.'},
  {n:4,  tema:'WL', en:'Ensure work hours are predictable and reasonable.', bm:'Memastikan waktu kerja boleh dijangka dan munasabah.'},
  {n:5,  tema:'WE', en:'Provide appropriate lighting, equipment, air quality, and noise levels in the workplace.', bm:'Menyediakan pencahayaan, peralatan, kualiti udara dan tahap bunyi yang sesuai.'},
  {n:6,  tema:'JM', en:'Assign tasks according to experience and competence.', bm:'Memberi tugasan mengikut pengalaman dan kecekapan.'},
  {n:7,  tema:'SS', en:'Strengthen motivation by emphasizing the positive and useful aspects of work.', bm:'Meningkatkan motivasi dengan menekankan aspek positif dan berguna kerja.'},
  {n:8,  tema:'JM', en:'Establish clear roles, and avoid role conflicts and ambiguity.', bm:'Menetapkan peranan yang jelas, elak konflik dan kekeliruan peranan.'},
  {n:9,  tema:'WE', en:'Provide job security as far as possible.', bm:'Memberi jaminan pekerjaan setakat yang mungkin.'},
  {n:10, tema:'CT', en:'Create an infrastructure where supervisors are responsible for employees and have an appropriate level of communication.', bm:'Mewujudkan struktur di mana penyelia bertanggungjawab ke atas pekerja dengan komunikasi yang sesuai.'},
  {n:11, tema:'CT', en:'Ensure human resources and staffing levels are sufficient.', bm:'Memastikan sumber manusia dan bilangan staf mencukupi.'},
  {n:12, tema:'WE', en:'Take ergonomic factors into account to limit stress on employees.', bm:'Mengambil kira faktor ergonomik untuk mengurangkan tekanan pekerja.'},
  {n:13, tema:'SS', en:'Ensure there is a good relationship between supervisors and employees.', bm:'Memastikan hubungan baik antara penyelia dan pekerja.'},
  {n:14, tema:'JM', en:'Ensure proper use of skills.', bm:'Memastikan kemahiran pekerja digunakan dengan betul.'},
  {n:15, tema:'TF', en:'Encourage employees to discuss any conflicting demands between work and home.', bm:'Menggalakkan pekerja berbincang tentang konflik tuntutan kerja dan rumah.'},
  {n:16, tema:'TE', en:'Provide information on psychosocial risk and work-related stress and how to prevent them.', bm:'Memberi maklumat tentang risiko psikososial, tekanan kerja dan cara mencegahnya.'},
  {n:17, tema:'JM', en:'Match the job with the employee’s physical and psychological skills and abilities.', bm:'Memadankan kerja dengan keupayaan fizikal dan psikologi pekerja.'},
  {n:18, tema:'WL', en:'Periodically assess the time requirements of a job and set a reasonable deadline/pace.', bm:'Menilai keperluan masa kerja secara berkala dan menetapkan tempoh/kadar yang munasabah.'},
  {n:19, tema:'TF', en:'Allow employees to express input on how their work is carried out.', bm:'Membenarkan pekerja memberi pandangan tentang cara kerja dilaksanakan.'},
  {n:20, tema:'TE', en:'Provide adequate training to ensure skills and jobs are appropriate for employees.', bm:'Menyediakan latihan mencukupi supaya kemahiran sepadan dengan kerja.'},
  {n:21, tema:'SS', en:'Foster positive relationships between employees.', bm:'Memupuk hubungan positif antara pekerja.'},
  {n:22, tema:'WE', en:'Keep the workplace free from physical and psychological violence.', bm:'Memastikan tempat kerja bebas daripada keganasan fizikal dan psikologi.'},
  {n:23, tema:'SS', en:'Provide psychosocial support for employees with mental health conditions.', bm:'Menyediakan sokongan psikososial kepada pekerja yang mempunyai masalah kesihatan mental.'},
];

// PRiMA — Pelan Tindakan Pengurusan Risiko Psikososial (Appendix 4)
export const PRIMA = [
  {kod:'SS', en:'Social Support', bm:'Sokongan Sosial', warna:'#a6d8e3', jc:[1], wd:[], js:[7,13,21,23], tindakan:[
    ['To foster positive relationships between employees.','Memupuk hubungan positif antara pekerja.'],
    ['To maintain a workplace free from physical and psychological violence.','Mengekalkan tempat kerja bebas keganasan fizikal dan psikologi.'],
    ['To ensure there is a good relationship between supervisors and employees.','Memastikan hubungan baik antara penyelia dan pekerja.'],
    ['To create an infrastructure where supervisors are responsible for employees and have an appropriate level of communication.','Mewujudkan struktur di mana penyelia bertanggungjawab dan berkomunikasi dengan baik.'],
    ['To encourage employees to discuss any conflicting demands between work and home. To strengthen motivation by emphasizing positive and useful aspects of career.','Menggalakkan perbincangan konflik kerja–rumah; tingkatkan motivasi dengan menekankan aspek positif kerjaya.'],
    ['To provide support on employees’ welfare to ease daily work components such as flexible working hours, child care centres, marriage and family counselling, money management, and others.','Menyediakan sokongan kebajikan seperti waktu fleksibel, kaunseling keluarga, pengurusan kewangan dan lain-lain.'],
    ['To encourage participation in social activities such as family day, sports day, festive season celebration, etc.','Menggalakkan penyertaan aktiviti sosial seperti hari keluarga, hari sukan, sambutan perayaan.'],
  ]},
  {kod:'WE', en:'Working Environment', bm:'Persekitaran Kerja', warna:'#bfdcc5', jc:[5,9,12], wd:[], js:[22], tindakan:[
    ['To provide appropriate lighting, equipment, air quality, and noise levels.','Menyediakan pencahayaan, peralatan, kualiti udara dan tahap bunyi yang sesuai.'],
    ['To avoid exposure to harmful agents.','Mengelakkan pendedahan kepada bahan berbahaya.'],
    ['Take ergonomic factors into account to limit stress on employees.','Mengambil kira faktor ergonomik untuk mengurangkan tekanan.'],
    ['To address incivility in the workplace – internal and external.','Menangani sikap tidak sopan di tempat kerja (dalaman & luaran/pelanggan).'],
    ['To train employees to adapt to multiple working environments: physical, psychological, emotional, and social.','Melatih pekerja menyesuaikan diri dengan pelbagai persekitaran kerja.'],
  ]},
  {kod:'JM', en:'Job Matching', bm:'Padanan Kerja', warna:'#e2ecc9', jc:[14,17], wd:[3], js:[6,8], tindakan:[
    ['To ensure jobs match the employee’s physical and psychological skills and abilities.','Memastikan kerja sepadan dengan keupayaan fizikal dan psikologi pekerja.'],
    ['To assign tasks according to experience and competence.','Memberi tugasan mengikut pengalaman dan kecekapan.'],
    ['To ensure proper use of skills.','Memastikan kemahiran digunakan dengan betul.'],
    ['To ensure employees’ roles and responsibilities are clearly defined.','Memastikan peranan dan tanggungjawab pekerja jelas.'],
  ]},
  {kod:'TE', en:'Training and Education', bm:'Latihan dan Pendidikan', warna:'#f5d5b8', jc:[20], wd:[], js:[16], tindakan:[
    ['To provide adequate training to ensure that skills and jobs are suitable for employees.','Menyediakan latihan mencukupi supaya kemahiran sesuai dengan kerja.'],
    ['To provide information on psychosocial risks and work-related stress and how to prevent them.','Memberi maklumat tentang risiko psikososial dan tekanan kerja serta pencegahannya.'],
    ['To conduct mental health awareness programmes such as emotional support, stress and anger management, and overcoming burnout at the workplace.','Mengadakan program kesedaran kesihatan mental (sokongan emosi, pengurusan stres & marah, burnout).'],
    ['To introduce and provide proper job management in the workplace.','Memperkenalkan pengurusan kerja yang betul.'],
    ['To provide specific training such as psychosocial programmes, work-life balance workshops, resilience-building training and others.','Latihan khusus: program psikososial, bengkel keseimbangan kerja-hidup, daya tahan.'],
    ['To provide training relevant to employees’ actual duty.','Latihan yang berkaitan dengan tugas sebenar pekerja.'],
  ]},
  {kod:'TF', en:'Transparency and Fairness', bm:'Ketelusan dan Keadilan', warna:'#ebb5cf', jc:[], wd:[15], js:[2,19], tindakan:[
    ['To ensure tasks are clearly defined.','Memastikan tugasan ditakrifkan dengan jelas.'],
    ['To provide clear roles, avoid role conflicts and ambiguity.','Peranan jelas, elak konflik dan kekeliruan peranan.'],
    ['To provide job security as far as possible.','Memberi jaminan pekerjaan setakat yang mungkin.'],
    ['To provide adequate wages for the work performed.','Memberi upah yang setimpal dengan kerja.'],
    ['To ensure transparency and fairness in complaint-handling procedures.','Ketelusan dan keadilan dalam prosedur aduan.'],
  ]},
  {kod:'CT', en:'Control', bm:'Kawalan', warna:'#c4a6cd', jc:[], wd:[11], js:[10], tindakan:[
    ['To ensure adequate resource levels.','Memastikan sumber mencukupi.'],
    ['To review current job processes - rotate and rearrange if possible to improve productivity.','Menyemak proses kerja — giliran/susun semula untuk produktiviti.'],
    ['To discuss with employees the opportunity to control their occupational activities and sub-activities based on employees’ performance.','Berbincang dengan pekerja tentang peluang mengawal aktiviti kerja mereka.'],
    ['To provide opportunities for employees to manage their work, such as selection of location (home or office) and work pace.','Memberi peluang pekerja mengurus kerja sendiri (lokasi, kadar kerja).'],
    ['Allow employees to express input on how their work is carried out.','Membenarkan pekerja memberi pandangan tentang cara kerja.'],
    ['To discuss with employees how they can be involved in decision-making (where applicable).','Berbincang cara pekerja boleh terlibat dalam membuat keputusan.'],
  ]},
  {kod:'WL', en:'Workload', bm:'Beban Kerja', warna:'#a9a6d3', jc:[], wd:[4,18], js:[], tindakan:[
    ['To continually assess time requirements and set reasonable deadlines.','Menilai keperluan masa secara berterusan dan tetapkan tempoh munasabah.'],
    ['To ensure that working hours are predictable and reasonable.','Memastikan waktu kerja boleh dijangka dan munasabah.'],
  ]},
];

// ── PENGIRAAN ────────────────────────────────────────────────
// jawapan: array 26 nombor (1–5), index 0 = item 1
export function skorIndividu(jawapan){
  const out = {};
  for (const k of KOD){
    const s = KOMPONEN[k].items.reduce((a,n)=>a+Number(jawapan[n-1]||0),0);
    out[k] = {skor:s, tinggi:KOMPONEN[k].tinggi(s)};
  }
  return out;
}

export function sah(jawapan){
  return Array.isArray(jawapan) && jawapan.length===26 && jawapan.every(v=>Number.isInteger(v)&&v>=1&&v<=5);
}

// senarai: array jawapan (setiap satu array 26)
export function skorOrganisasi(senarai){
  const N = senarai.length;
  const ind = senarai.map(skorIndividu);
  const out = {N, individu:ind};
  for (const k of KOD){
    const n = ind.filter(r=>r[k].tinggi).length;
    const pct = N ? Math.round((n/N)*1000)/10 : 0;
    out[k] = {n, pct, status: N ? (pct >= KOMPONEN[k].orgCut ? 'HIGH' : 'LOW') : '—'};
  }
  out.puratItem = LEO26.map((q,i)=> N ? Math.round(senarai.reduce((a,j)=>a+j[i],0)/N*100)/100 : 0);
  return out;
}

export function namaKey(nama){ return String(nama).toUpperCase().replace(/[.#$\[\]\/]/g,'_').replace(/\s+/g,'_'); }
