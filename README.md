# PT Malik Mahabbah Manunggal — Website

Website company profile PT Malik Mahabbah Manunggal, penyedia solusi instalasi sistem gas medis untuk fasilitas kesehatan.

## Teknologi

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion
- Lucide React

## Persyaratan

- Node.js versi 18 atau lebih baru
- npm

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka URL lokal yang ditampilkan Vite di terminal.

## Perintah

```bash
npm run dev      # Jalankan server pengembangan
npm run build    # Buat build produksi ke dist/
npm run preview  # Pratinjau build produksi
npm run lint     # Jalankan ESLint
```

Catatan: script `lint` saat ini memerlukan berkas konfigurasi ESLint. Tambahkan konfigurasi ESLint sebelum menjalankannya jika belum tersedia di proyek.

## Struktur proyek

```text
src/
├── assets/
│   ├── gallery/       # Foto dokumentasi proyek
│   ├── products/      # Foto perangkat produk
│   └── ...            # Logo dan Daftar Populasi.xlsx
├── components/        # Komponen halaman, termasuk Clients dan Products
├── context/           # Konteks bahasa Indonesia dan Inggris
├── data/
│   ├── clients.js     # Daftar fasilitas klien
│   ├── productCatalog.js
│   └── siteData.js
├── hooks/
├── App.jsx            # Susunan section website
├── index.css
└── main.jsx
```

## Konten utama

Halaman mencakup Hero, Tentang Kami, Produk, Layanan, Keunggulan, Proses, Galeri, Klien, FAQ, dan Kontak. Bahasa tampilan dapat diganti antara Indonesia dan Inggris.

- Edit daftar klien di `src/data/clients.js`.
- Edit daftar produk dan gambar di `src/data/productCatalog.js`.
- Edit konten umum situs di `src/data/siteData.js`.
- Edit label dan teks terjemahan di `src/context/LanguageContext.jsx`.
- Letakkan foto produk di `src/assets/products/` dan foto dokumentasi di `src/assets/gallery/`, lalu impor foto yang akan digunakan pada data terkait.
