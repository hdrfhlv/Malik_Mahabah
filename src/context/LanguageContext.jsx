import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

// ── All translatable strings ─────────────────────────────────────
export const translations = {
  id: {
    // Navbar
    nav: {
      home: 'Beranda',
      about: 'Tentang Kami',
      products: 'Produk',
      services: 'Layanan',
      advantages: 'Keunggulan',
      contact: 'Kontak',
      cta: 'Hubungi Kami',
    },
    // Hero
    hero: {
      cta1: 'Jadwalkan Konsultasi',
      cta2: 'Jelajahi Produk',
      scrollHint: 'Gulir untuk menjelajahi',
    },
    // About
    about: {
      badge: 'Tentang Kami',
      heading1: 'Latar Belakang',
      headingAccent: 'Malik Mahabah Manunggal',
      tab1: 'Visi',
      tab2: 'Misi',
      visionLabel: 'Visi Kami',
      missionLabel: 'Misi Kami',

    },
    // Products
    products: {
      badge: 'Perangkat Gas Medis',
      heading1: 'Produk Sistem Gas Medis',
      headingAccent: 'untuk Fasilitas Kesehatan',
      sub: 'Lihat berbagai perangkat untuk sistem gas medis dan fasilitas kesehatan. Klik kartu untuk melihat fungsi dan penggunaannya.',
      hint: '✦ Klik kartu untuk melihat detail',
      usesLabel: 'Penggunaan:',
      backHint: 'Klik untuk kembali',
    },
    // Services
    services: {
      badge: 'Layanan Kami',
      heading1: 'Layanan Instalasi',
      headingAccent: 'Gas Medis',
      sub: 'Dari perencanaan, pemasangan pipa, hingga inspeksi dan konsultasi teknis  kami hadir di setiap tahap proyek instalasi gas medis Anda.',
    },
    // Advantages
    advantages: {
      badge: 'Mengapa Memilih Kami',
      heading1: 'Yang Membedakan',
      headingAccent: 'Instalasi Kami',
      sub: 'Dipercaya oleh puluhan fasilitas kesehatan, kami mengerjakan setiap proyek instalasi dengan presisi, standar tinggi, dan tanggung jawab penuh.',
    },
    // FAQ
    faq: {
      badge: 'Pusat Informasi',
      heading1: 'Pertanyaan yang Sering',
      headingAccent: 'Diajukan',
      sub: 'Belum menemukan informasi yang Anda cari? Silakan hubungi tim kami.',
    },
    // Gallery
    gallery: {
      badge: 'Dokumentasi Proyek',
      heading1: 'Kualitas Pekerjaan',
      headingAccent: 'Dalam Dokumentasi',
      sub: 'Lihat dokumentasi proyek instalasi sistem gas medis yang telah kami selesaikan.',
      prev: 'Dokumentasi sebelumnya',
      next: 'Dokumentasi berikutnya',
      of: 'dari',
      close: 'Tutup',
      openFull: 'Lihat gambar ukuran penuh',
    },
    clients: {
      badge: 'Klien Kami',
      heading1: 'Dipercaya Fasilitas Kesehatan',
      headingAccent: 'di Berbagai Daerah',
      sub: 'Daftar rumah sakit, klinik, laboratorium, dan farmasi yang tercatat dalam proyek instalasi gas dan vakum medik kami.',
      total: 'fasilitas tercantum',
      groups: {
        hospital: 'Rumah Sakit & Klinik',
        laboratory: 'Laboratorium & Farmasi',
      },
    },
    // Contact
    contact: {
      badge: 'Hubungi Kami',
      heading1: 'Diskusikan Kebutuhan',
      headingAccent: 'Fasilitas Anda',
      sub: 'Sampaikan kebutuhan sistem gas medis fasilitas Anda. Tim kami siap membantu merancang solusi yang sesuai.',
      labelName: 'Nama Lengkap',
      labelInstitution: 'Nama Instansi',
      labelEmail: 'Alamat Email',
      labelPhone: 'Nomor Telepon',
      labelMessage: 'Pesan atau Kebutuhan',
      phName: 'Masukkan nama lengkap',
      phInstitution: 'Rumah sakit / klinik / puskesmas',
      phEmail: 'nama@instansi.com',
      phPhone: '+62 8xx xxxx xxxx',
      phMessage: 'Jelaskan kebutuhan sistem gas medis atau layanan yang Anda perlukan...',
      btnSend: 'Kirim Permintaan',
      btnSending: 'Mengirim permintaan...',
      btnAgain: 'Kirim Permintaan Lain',
      successTitle: 'Permintaan Berhasil Dikirim',
      successMsg: 'Terima kasih telah menghubungi kami. Tim kami akan menindaklanjuti dalam satu hari kerja.',
      errName: 'Nama harus terdiri dari minimal 3 karakter.',
      errInstitution: 'Silakan isi nama instansi.',
      errEmail: 'Masukkan alamat email dengan format yang valid.',
      errPhone: 'Nomor telepon harus terdiri dari minimal 8 digit.',
      errMessage: 'Pesan harus terdiri dari minimal 10 karakter.',
      phone: 'Telepon',
      email: 'Email',
      address: 'Alamat',
      mapPlaceholder: 'Informasi lokasi akan ditampilkan di sini',
    },
    // Footer
    footer: {
      description: 'Penyedia solusi instalasi sistem gas medis bagi fasilitas kesehatan di seluruh Indonesia, dengan keselamatan pasien sebagai prioritas utama.',
      quickLinks: 'Navigasi',
      contactTitle: 'Informasi Kontak',
      copyright: 'Seluruh hak cipta dilindungi.',
      certified: 'Kontraktor Instalasi Gas Medis — Terdaftar di Kementerian Kesehatan Republik Indonesia',
    },
    // Floating
    floating: {
      wa: 'Hubungi melalui WhatsApp',
      waMsg: 'Halo, saya ingin berkonsultasi mengenai kebutuhan sistem gas medis di fasilitas kami.',
    },
  },

  //_________________________________________________________________//
  // ── ENGLISH ────────────────────────────────────────────────────//
  //________________________________________________________________//
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Products',
      services: 'Services',
      advantages: 'Why Us',
      contact: 'Contact',
      cta: 'Contact Us',
    },
    hero: {
      headline1: 'Precision in Every Connection',
      headline2: 'Safety in Every Breath.',
      cta1: 'Schedule a Consultation',
      cta2: 'Explore Products',
      stat1: 'Active Clients',
      stat2: 'Years of Experience',
      stat3: 'Technical Support',
      scrollHint: 'Scroll to explore',
    },
    about: {
      badge: 'About Us',
      heading1: 'About',
      headingAccent: 'Malik Mahabah Manunggal',
      tab1: 'Vision',
      tab2: 'Mission',
      visionLabel: 'Our Vision',
      missionLabel: 'Our Mission',

    },
    products: {
      badge: 'Medical Gas Equipment',
      heading1: 'Medical Gas System Products',
      headingAccent: 'for Healthcare Facilities',
      sub: 'Explore equipment for medical gas systems and healthcare facilities. Click a card to view its function and applications.',
      hint: '✦ Click a card for details',
      usesLabel: 'Applications:',
      backHint: 'Click to go back',
    },
    services: {
      badge: 'Our Services',
      heading1: 'Medical Gas',
      headingAccent: 'Installation Services',
      sub: 'From planning, pipeline installation, to inspection and technical consulting — we are with you at every stage of your medical gas installation project.',
    },
    advantages: {
      badge: 'Why Choose Us',
      heading1: 'What Sets Our',
      headingAccent: 'Installations Apart',
      sub: 'Trusted by dozens of healthcare facilities, we carry out every installation project with precision, high standards, and full accountability.',
    },
    faq: {
      badge: 'Information Center',
      heading1: 'Frequently Asked',
      headingAccent: 'Questions',
      sub: 'Can’t find the information you need? Please contact our team.',
    },
    gallery: {
      badge: 'Project Portfolio',
      heading1: 'Our Work,',
      headingAccent: 'Documented',
      sub: 'Explore documentation of medical gas system installation projects we have completed.',
      prev: 'Previous project image',
      next: 'Next project image',
      of: 'of',
      close: 'Close',
      openFull: 'View full-size image',
    },
    clients: {
      badge: 'Our Clients',
      heading1: 'Trusted by Healthcare Facilities',
      headingAccent: 'Across Indonesia',
      sub: 'Hospitals, clinics, laboratories, and pharmaceutical facilities listed in our medical gas and vacuum installation projects.',
      total: 'facilities listed',
      groups: {
        hospital: 'Hospitals & Clinics',
        laboratory: 'Laboratories & Pharmaceuticals',
      },
    },
    contact: {
      badge: 'Contact Us',
      heading1: 'Discuss Your Facility’s',
      headingAccent: 'Requirements',
      sub: 'Tell us about your facility’s medical gas system requirements. Our team is ready to help develop a suitable solution.',
      labelName: 'Full Name',
      labelInstitution: 'Organization Name',
      labelEmail: 'Email Address',
      labelPhone: 'Phone Number',
      labelMessage: 'Message or Requirements',
      phName: 'Enter your full name',
      phInstitution: 'Hospital / clinic / community health center',
      phEmail: 'name@organization.com',
      phPhone: '+62 8xx xxxx xxxx',
      phMessage: 'Describe your medical gas system or service requirements...',
      btnSend: 'Submit Inquiry',
      btnSending: 'Submitting inquiry...',
      btnAgain: 'Submit Another Inquiry',
      successTitle: 'Inquiry Submitted Successfully',
      successMsg: 'Thank you for contacting us. Our team will follow up within one business day.',
      errName: 'Please enter a name of at least 3 characters.',
      errInstitution: 'Please enter your organization name.',
      errEmail: 'Please enter a valid email address.',
      errPhone: 'Please enter a phone number with at least 8 digits.',
      errMessage: 'Please enter a message of at least 10 characters.',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      mapPlaceholder: 'Location information will appear here',
    },
    footer: {
      description: 'A medical gas system installation provider serving healthcare facilities across Indonesia, with patient safety as our highest priority.',
      quickLinks: 'Navigation',
      contactTitle: 'Contact Information',
      copyright: 'All rights reserved.',
      certified: 'Medical Gas Installation Contractor — Registered with the Indonesian Ministry of Health',
    },
    floating: {
      wa: 'Contact us on WhatsApp',
      waMsg: 'Hello, I would like to discuss our facility’s medical gas system requirements.',
    },
  },
};

// ── Provider ─────────────────────────────────────────────────────
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('id');
  const t = translations[lang];
  const toggle = () => setLang((l) => (l === 'id' ? 'en' : 'id'));

  return (
    <LanguageContext.Provider value={{ lang, t, toggle, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ── Hook ─────────────────────────────────────────────────────────
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}
