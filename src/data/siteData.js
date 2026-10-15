// ============================================================
//  siteData.js — Semua konten statis PT Malik Mahabbah Manunggal
//  String UI ada di src/context/LanguageContext.jsx
//  Ganti placeholder [TANDA KURUNG SIKU] dengan data asli.
// ============================================================

export const company = {
  name: "PT Malik Mahabah Manunggal",
  shortName: "Malik Gas Medis",
  tagline: {
    id: "Instalasi Gas Medis Terpercaya untuk Fasilitas Kesehatan Indonesia",
    en: "Trusted Medical Gas Instalation for Indonesia's Healthcare Facilities",
  },
  subTagline: {
    id: "Kami mengerjakan instalasi sistem gas medis berstandar tinggi, tepat waktu, dengan dukungan teknis penuh sehingga fasilitas kesehatan Anda beroperasi dengan aman.",
    en: "We deliver high-standard medical gas system installations, on schedule, with full technical support so your healthcare facility runs safely.",
  },
  phone: "0812-7371-2104",
  phoneWA: "628127371210",
  email: "malikmahabahmanunggal@gmail.com",
  address: "18 Office Park Building, 21th Floor Unit C",
  city: "Jakarta Selatan, DKI JAKARTA 12520",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6!2d106.8318519!3d-6.2991268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69edf7d12a98d3%3A0xa29985100f9b696e!2s18%20Office%20Park!5e0!3m2!1sid!2sid!4v1",
  established: "2026",
  website: "https://malikgasmedis.com",
  socialMedia: {
    instagram: "https://instagram.com/[HANDLE]",
    linkedin: "https://linkedin.com/company/[HANDLE]",
    facebook: "https://facebook.com/[HANDLE]",
  },
};

export const about = {
  description: {
    id: "PT Malik Mahabah Manunggal merupakan perusahaan yang bergerak di bidang instalasi gas medis, yang berfokus pada penyediaan layanan instalasi dan sistem perpipaan gas medis untuk mendukung kebutuhan fasilitas pelayanan kesehatan. Sistem gas medis memiliki peranan penting dalam menunjang operasional rumah sakit, klinik, dan fasilitas kesehatan lainnya, terutama dalam penyediaan gas medis yang aman, efisien, dan sesuai dengan kebutuhan pelayanan. Dalam menjalankan kegiatannya, PT Malik Mahabah Manunggal berkomitmen untuk memberikan layanan yang mengutamakan kualitas pekerjaan, ketepatan pelaksanaan, serta penerapan standar keselamatan dalam setiap proses instalasi. Perusahaan juga berupaya memberikan solusi yang sesuai dengan kebutuhan pelanggan melalui perencanaan, pemasangan, dan pemeliharaan sistem gas medis. Dengan mengedepankan profesionalisme dan tanggung jawab, PT Malik Mahabah Manunggal terus berupaya menjadi mitra yang dapat diandalkan dalam mendukung pembangunan dan pengembangan infrastruktur fasilitas kesehatan di Indonesia.",
    en: "PT Malik Mahabah Manunggal is a company engaged in the field of medical gas installation, focusing on providing installation services and medical gas piping systems to support the needs of healthcare facilities. Medical gas systems play a crucial role in supporting the operations of hospitals, clinics, and other healthcare facilities, particularly in providing safe, efficient, and appropriate medical gases for healthcare services. In carrying out its activities, PT Malik Mahabah Manunggal is committed to delivering services that prioritize work quality, timely execution, and the application of safety standards in every installation process. The company also strives to provide solutions that meet customer needs through planning, installation, and maintenance of medical gas systems. By emphasizing professionalism and responsibility, PT Malik Mahabah Manunggal continues to strive to be a reliable partner in supporting the development and enhancement of healthcare facility infrastructure in Indonesia.",
  },
  vision: {
    id: "Menjadi perusahaan instalasi gas medis yang profesional, terpercaya, dan berkualitas dalam mendukung kebutuhan infrastruktur fasilitas kesehatan di Indonesia dengan mengutamakan keselamatan, ketepatan, dan kepuasan pelanggan.",
    en: "To become a Professional, Trusted and High Quality medical gas installation company, prioritizing safety and customer satisfaction.",
  },
  missionPoints: {
    id: [
      "Mengutamakan standar teknis, mutu, dan keselamatan instalasi.",
      "Memberikan layanan sesuai kebutuhan fasilitas kesehatan.",
      "Meningkatkan keterampilan dan kemampuan tenaga kerja.",
      "Menjaga komunikasi, tanggung jawab, dan kualitas pekerjaan.",
      "Mendukung sistem gas medis yang aman dan andal.",
    ],
    en: [
      "Prioritize technical standards, quality, and installation safety.",
      "Provide services tailored to healthcare facility needs.",
      "Enhance workforce skills and competencies.",
      "Maintain effective communication, accountability, and work quality.",
      "Support safe and reliable medical gas systems.",
    ],
  },
};

export const products = [
  {
    id: "Medical vacuum",
    name: { id: "Pompa Vakum Medis", en: "Medical Vacuum" },
    formula: "O₂  ",
    color: "#38BDF8",
    icon: "Wind",
    description: {
      id: "Dirancang khusus untuk memenuhi standar ketat fasilitas kesehatan",
      en: "specifically designed to meet the stringent standards of healthcare facilities",
    },
    uses: {
      id: [
        "Pembersihan Saluran Napas",
        "Tindakan Bedah & Operasi",
        "Prosedur Kebidanan & Kandungan",
        "Keadaan Darurat & Ambulans",
        "Terapi Vakum Khusus",
      ],
      en: [
        "Airway Clearance",
        "Surgical & Operative Procedures",
        "Wound Management",
        "Obstetrics and Gynecology",
        "Emergency and Trauma Care",
      ],
    },
  },
  {
    id: "n2o",
    name: { id: "Nitrous Oxide", en: "Nitrous Oxide" },
    formula: "N₂O",
    color: "#818CF8",
    icon: "Zap",
    description: {
      id: "Gas analgesik dan anestesi inhalasi untuk prosedur pembedahan dan obstetri. Dikemas dalam tabung khusus berstandar farmasi.",
      en: "Analgesic and inhalation anesthetic gas for surgical and obstetric procedures. Packaged in special pharmaceutical-grade cylinders.",
    },
    uses: {
      id: [
        "Anestesi Inhalasi",
        "Analgesik Obstetri",
        "Prosedur Gigi",
        "Analgesia Darurat",
      ],
      en: [
        "Inhalation Anesthesia",
        "Obstetric Analgesia",
        "Dental Procedures",
        "Emergency Analgesia",
      ],
    },
    spec: "Kemurnian ≥ 98,0% v/v",
  },
  {
    id: "air",
    name: { id: "Medical Air", en: "Medical Air" },
    formula: "Air Med.",
    color: "#34D399",
    icon: "Airplay",
    description: {
      id: "Udara medis bersih bebas kontaminan untuk ventilator mekanis dan peralatan medis bertekanan udara.",
      en: "Clean, contaminant-free medical air for mechanical ventilators and pneumatic medical equipment.",
    },
    uses: {
      id: [
        "Ventilator",
        "Nebulizer Medis",
        "Inkubator Bayi",
        "Peralatan Pneumatik",
      ],
      en: [
        "Ventilators",
        "Medical Nebulizers",
        "Infant Incubators",
        "Pneumatic Equipment",
      ],
    },
    spec: "Bebas minyak, debu, & air",
  },
  {
    id: "co2",
    name: { id: "Karbon Dioksida", en: "Carbon Dioxide" },
    formula: "CO₂",
    color: "#FB923C",
    icon: "Circle",
    description: {
      id: "Karbon dioksida medis digunakan untuk laparoskopi, krioterapi, dan pemeriksaan endoskopi.",
      en: "Medical carbon dioxide used for laparoscopy, cryotherapy, and endoscopic examinations.",
    },
    uses: {
      id: ["Laparoskopi", "Krioterapi", "Endoskopi", "Insufflasi Rongga Tubuh"],
      en: [
        "Laparoscopy",
        "Cryotherapy",
        "Endoscopy",
        "Body Cavity Insufflation",
      ],
    },
    spec: "Kemurnian ≥ 99,5% v/v",
  },
  {
    id: "n2",
    name: { id: "Nitrogen", en: "Nitrogen" },
    formula: "N₂",
    color: "#A78BFA",
    icon: "Hexagon",
    description: {
      id: "Nitrogen cair dan gas untuk kriopreservasi, dermatologi, serta penggerak peralatan bedah.",
      en: "Liquid and gaseous nitrogen for cryopreservation, dermatology, and surgical equipment.",
    },
    uses: {
      id: [
        "Kriopreservasi Jaringan",
        "Dermatologi",
        "Bedah Ortopedi",
        "Laboratorium",
      ],
      en: [
        "Tissue Cryopreservation",
        "Dermatology",
        "Orthopedic Surgery",
        "Laboratory",
      ],
    },
    spec: "Kemurnian ≥ 99,998% v/v",
  },
  {
    id: "vacuum",
    name: { id: "Vacuum (Suction)", en: "Vacuum (Suction)" },
    formula: "Vac.",
    color: "#F472B6",
    icon: "Minus",
    description: {
      id: "Sistem vakum medis untuk pengisapan cairan dan sekret pasien serta pendukung prosedur bedah.",
      en: "Medical vacuum system for patient fluid and secretion suction and surgical procedure support.",
    },
    uses: {
      id: [
        "Suction Pasien",
        "Prosedur Bedah",
        "Drainase Medis",
        "Lab Analitik",
      ],
      en: [
        "Patient Suction",
        "Surgical Procedures",
        "Medical Drainage",
        "Analytical Lab",
      ],
    },
    spec: "Tekanan vakum ≤ –400 mbar",
  },
];

export const services = [
  {
    id: "s1",
    icon: "Wrench",
    title: {
      id: "Instalasi & Testing",
      en: "Testing & Instalation",
    },
    description: {
      id: "Melakukan pemasangan seluruh komponen sistem gas medis sesuai gambar desain dan memastikan sistem berfungsi dengan aman, andal, serta bebas kebocoran sebelum dioperasikan.",
      en: "Installation of all medical gas system components per design drawings, ensuring the system operates safely, reliably, and leak-free before commissioning.",
    },
  },
  {
    id: "s2",
    icon: "Settings",
    title: {
      id: "Desain Sistem",
      en: "System Design",
    },
    description: {
      id: "Menstransformasikan hasil survey lapangan menjadi dokumen teknis, gambar kerja, dan kalkulasi sistem yang presisi.",
      en: "Transforming field survey results into technical documents, working drawings, and precise system calculations.",
    },
  },
  {
    id: "s3",
    icon: "ClipboardCheck",
    title: {
      id: "Pengadaan Material",
      en: "Maintenance & Periodic Inspection",
    },
    description: {
      id: "Program pemeliharaan preventif, pengujian kebocoran, dan sertifikasi ulang instalasi gas medis sesuai jadwal agar sistem selalu laik operasi.",
      en: "Preventive maintenance, leak testing, and re-certification of medical gas installations to ensure systems remain fully operational.",
    },
  },
  {
    id: "s4",
    icon: "MessageSquare",
    title: { id: "Maintenance & After Sales", en: "Maintanence & After Sales" },
    description: {
      id: "Tim engineer bersertifikat kami siap membantu perencanaan, perhitungan kapasitas, dan desain sistem gas medis yang tepat untuk fasilitas Anda.",
      en: "Our certified engineering team helps with planning, capacity calculations, and medical gas system design tailored to your facility.",
    },
  },
];

export const advantages = [
  {
    icon: "ShieldCheck",
    title: {
      id: "Standar & Keamanan Terjamin",
      en: "Certified Standards & Safety",
    },
    description: {
      id: "Setiap instalasi dikerjakan sesuai standar teknis internasional dan regulasi Kemenkes RI tidak ada kompromi soal keselamatan.",
      en: "Every installation is carried out per international technical standards and Ministry of Health RI regulations no compromise on safety.",
    },
  },
  {
    icon: "Clock",
    title: { id: "Penyelesaian Tepat Waktu", en: "On-Time Completion" },
    description: {
      id: "Kami berkomitmen menyelesaikan setiap proyek instalasi sesuai jadwal yang disepakati tanpa mengorbankan kualitas pekerjaan.",
      en: "We are committed to completing every installation project on the agreed schedule without compromising work quality.",
    },
  },
  {
    icon: "Users",
    title: { id: "Tim Teknis Bersertifikat", en: "Certified Technical Team" },
    description: {
      id: "Tenaga instalasi kami memiliki sertifikasi resmi dan pengalaman nyata di lapangan dalam mengerjakan sistem gas medis.",
      en: "Our installation technicians hold official certifications and have real field experience in medical gas systems.",
    },
  },
  {
    icon: "HeadphonesIcon",
    title: { id: "Dukungan Purna Instalasi", en: "Post-Installation Support" },
    description: {
      id: "Kami tidak selesai saat proyek rampung. Tim kami siap mendampingi pengujian, komisioning, dan pemeliharaan sistem Anda.",
      en: "We do not stop when the project is done. Our team supports testing, commissioning, and system maintenance.",
    },
  },
  {
    icon: "Award",
    title: { id: "Bersertifikat & Legal", en: "Certified & Compliant" },
    description: {
      id: "Beroperasi dengan izin lengkap dari Kemenkes RI dan memenuhi standar teknis instalasi gas medis yang berlaku.",
      en: "Operating with full licenses from the Ministry of Health RI and complying with applicable medical gas installation technical standards.",
    },
  },
  {
    icon: "MapPin",
    title: { id: "Jangkauan Proyek Luas", en: "Wide Project Coverage" },
    description: {
      id: "Telah mengerjakan proyek instalasi gas medis di berbagai fasilitas kesehatan di Seluruh Indonesia.",
      en: "We have completed medical gas installation projects at various healthcare facilities across Indonesia.",
    },
  },
];


export const faqs = [
  {
    q: {
      id: "Apa standar kualitas gas medis yang Anda gunakan?",
      en: "What quality standards do you use for medical gases?",
    },
    a: {
      id: "Semua produk gas medis kami memenuhi Farmakope Indonesia (FI), standar CPOB BPOM, serta Pedoman Teknis Instalasi Gas Medis Kemenkes RI. Setiap batch disertai Certificate of Analysis (CoA).",
      en: "All our medical gas products comply with the Indonesian Pharmacopoeia (FI), BPOM GMP standards, and the Ministry of Health RI Technical Guidelines for Medical Gas Installation. Every batch comes with a Certificate of Analysis (CoA).",
    },
  },
  {
    q: {
      id: "Berapa minimum order untuk pembelian pertama?",
      en: "What is the minimum order for a first purchase?",
    },
    a: {
      id: "Minimum order dapat disesuaikan dengan kebutuhan fasilitas Anda. Hubungi tim penjualan kami untuk mendapatkan penawaran yang tepat.",
      en: "Minimum order can be tailored to your facility's needs. Contact our sales team to get an appropriate quote.",
    },
  },
  {
    q: {
      id: "Apakah Anda melayani pengiriman luar kota atau luar pulau?",
      en: "Do you serve deliveries outside the city or outside the island?",
    },
    a: {
      id: "Ya, kami melayani pengiriman ke [AREA LAYANAN]. Untuk lokasi di luar jangkauan armada langsung, kami bekerja sama dengan mitra logistik terpercaya.",
      en: "Yes, we serve deliveries to [SERVICE AREA]. For locations outside our direct fleet range, we work with trusted logistics partners.",
    },
  },
  {
    q: {
      id: "Bagaimana jika terjadi kedaruratan pasokan gas medis?",
      en: "What if there is a medical gas supply emergency?",
    },
    a: {
      id: "Kami memiliki hotline darurat 24/7. Tim on-call kami siap merespons permintaan mendesak dalam waktu sesingkat mungkin.",
      en: "We have a 24/7 emergency hotline. Our on-call team is ready to respond to urgent requests as quickly as possible.",
    },
  },
  {
    q: {
      id: "Apakah Anda juga menyediakan layanan instalasi pipa gas medis?",
      en: "Do you also provide medical gas pipeline installation services?",
    },
    a: {
      id: "Ya. Tim engineer bersertifikat kami melayani perencanaan, instalasi, pengujian tekanan, dan sertifikasi sistem pipa gas medis sesuai standar internasional.",
      en: "Yes. Our certified engineering team handles planning, installation, pressure testing, and certification of medical gas pipeline systems per international standards.",
    },
  },
  {
    q: {
      id: "Berapa lama garansi tabung atau instalasi?",
      en: "What is the warranty period for cylinders or installation?",
    },
    a: {
      id: "Garansi tabung dan regulasi selama [DURASI], sementara instalasi pipa gas medis diberikan garansi pengerjaan selama [DURASI]. Detailnya tercantum dalam perjanjian kerja sama.",
      en: "Cylinder and regulator warranty is [DURATION], while medical gas pipeline installation has a workmanship warranty of [DURATION]. Details are stated in the cooperation agreement.",
    },
  },
];

export const quickLinks = {
  id: [
    { label: "Beranda", href: "#hero" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Produk", href: "#products" },
    { label: "Layanan", href: "#services" },
    { label: "Galeri", href: "#gallery" },
    { label: "Klien", href: "#clients" },
    { label: "Kontak", href: "#contact" },
  ],
  en: [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
  ],
};

// ── Gallery foto pengerjaan ──────────────────────────────────────
// Ganti caption dengan keterangan foto yang sesuai
import imgD from "../assets/gallery/d.jpeg";
import imgF from "../assets/gallery/f.jpeg";
import imgG from "../assets/gallery/g.jpeg";
import imgH from "../assets/gallery/h.jpeg";
import imgI from "../assets/gallery/i.jpeg";
import imgK from "../assets/gallery/k.jpeg";
import imgL from "../assets/gallery/l.jpeg";
import imgM from "../assets/gallery/m.jpeg";
import imgN from "../assets/gallery/n.jpeg";
import imgO from "../assets/gallery/o.jpeg";
import imgP from "../assets/gallery/p.jpeg";
import imgQ from "../assets/gallery/q.jpeg";
import imgR from "../assets/gallery/r.jpeg";
import imgWA1 from "../assets/gallery/wa1.jpeg";
import imgWA2 from "../assets/gallery/wa2.jpeg";

export const galleryPhotos = [
  {
    id: "g1",
    src: imgD,
    captionId: "Proses instalasi pipa gas medis",
    captionEn: "Medical gas pipeline installation",
  },
  {
    id: "g2",
    src: imgF,
    captionId: "Pemasangan manifold gas di fasilitas",
    captionEn: "Gas manifold installation at facility",
  },
  {
    id: "g3",
    src: imgG,
    captionId: "Pengujian tekanan sistem instalasi",
    captionEn: "Installation system pressure testing",
  },
  {
    id: "g4",
    src: imgH,
    captionId: "Instalasi outlet gas medis di ruangan",
    captionEn: "Medical gas outlet installation",
  },
  {
    id: "g5",
    src: imgI,
    captionId: "Proses pengisian tabung oksigen",
    captionEn: "Oxygen cylinder filling process",
  },
  {
    id: "g6",
    src: imgK,
    captionId: "Pengecekan kualitas tabung gas",
    captionEn: "Gas cylinder quality inspection",
  },
  {
    id: "g7",
    src: imgL,
    captionId: "Instalasi sistem vakum medis",
    captionEn: "Medical vacuum system installation",
  },
  {
    id: "g8",
    src: imgM,
    captionId: "Tim teknis di lapangan",
    captionEn: "Technical team on site",
  },
  {
    id: "g9",
    src: imgN,
    captionId: "Pemasangan regulator & flowmeter",
    captionEn: "Regulator & flowmeter installation",
  },
  {
    id: "g10",
    src: imgO,
    captionId: "Pengiriman tabung gas medis",
    captionEn: "Medical gas cylinder delivery",
  },
  {
    id: "g11",
    src: imgP,
    captionId: "Inspeksi berkala fasilitas kesehatan",
    captionEn: "Periodic healthcare facility inspection",
  },
  {
    id: "g12",
    src: imgQ,
    captionId: "Dokumentasi proyek instalasi",
    captionEn: "Installation project documentation",
  },
  {
    id: "g13",
    src: imgR,
    captionId: "Sistem pipa gas selesai terpasang",
    captionEn: "Completed gas pipeline system",
  },
  {
    id: "g14",
    src: imgWA1,
    captionId: "Hasil pengerjaan di lapangan",
    captionEn: "Field work results",
  },
  {
    id: "g15",
    src: imgWA2,
    captionId: "Dokumentasi proyek terbaru",
    captionEn: "Latest project documentation",
  },
];
