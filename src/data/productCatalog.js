import automaticManifold from '../assets/products/Automatic Manifold Oxygen Control Unit.png';
import dualHeadwall from '../assets/products/Dual Medical Gas Headwall Panels.png';
import industrialChiller from '../assets/products/Industrial Chiller Assembly with Control Panel.png';
import airCompressor from '../assets/products/Industrial Yellow Air Compressor Skid.png';
import manifoldPanel from '../assets/products/Medical Gas Manifold Control Panel.png';
import controlPanels from '../assets/products/Medical Gas Control Panels_ Closed and Open Views.png';
import outletPanel from '../assets/products/Medical Gas Outlet Panel Lineup.png';
import flowmeters from '../assets/products/Twin Chrome Oxygen Flowmeter Assemblies.png';
import regulators from '../assets/products/Twin Oxygen Regulators with Humidifiers.png';

export const products = [
  {
    id: 'automatic-manifold',
    name: { id: 'Manifold Oksigen Otomatis', en: 'Automatic Oxygen Manifold' },
    category: { id: 'Sistem Manifold Oksigen', en: 'Oxygen Manifold System' },
    image: automaticManifold,
    description: {
      id: 'Manifold ini mengelola suplai oksigen dari beberapa tabung dan menyalurkannya ke jaringan pipa gas medis.',
      en: 'This manifold manages the oxygen supply from multiple cylinders and feeds it into a medical gas pipeline.',
    },
    uses: {
      id: ['Mengatur suplai oksigen dari kelompok tabung ke jaringan pipa.', 'Memantau status suplai melalui unit kontrol.'],
      en: ['Manages oxygen supply from cylinder banks to the pipeline.', 'Monitors supply status through the control unit.'],
    },
  },
  {
    id: 'dual-headwall',
    name: { id: 'Panel Bedhead Gas Medis dan Listrik', en: 'Medical Gas and Electrical Bed Head Unit' },
    category: { id: 'Panel Bedhead', en: 'Bed Head Unit' },
    image: dualHeadwall,
    description: {
      id: 'Panel bedhead ini menggabungkan outlet gas medis dengan stopkontak dan sakelar listrik pada area tempat tidur pasien.',
      en: 'This bed head unit combines medical gas outlets with electrical sockets and switches at the patient bedside.',
    },
    uses: {
      id: ['Menyediakan titik sambungan gas medis di sisi tempat tidur.', 'Menyediakan stopkontak listrik untuk peralatan di area perawatan.'],
      en: ['Provides medical gas connection points at the bedside.', 'Provides electrical outlets for equipment in the care area.'],
    },
  },
  {
    id: 'industrial-chiller',
    name: { id: 'Unit Chiller Industri dengan Panel Kontrol', en: 'Industrial Chiller with Control Panel' },
    category: { id: 'Chiller Industri', en: 'Industrial Chiller' },
    image: industrialChiller,
    description: {
      id: 'Unit chiller industri dengan komponen pendingin dan panel kontrol untuk mengatur operasi unit.',
      en: 'An industrial chiller assembly with cooling components and a control panel for operating the unit.',
    },
    uses: {
      id: ['Mendinginkan fluida dalam sistem yang sesuai dengan spesifikasi unit.', 'Mengoperasikan dan memantau unit melalui panel kontrol.'],
      en: ['Cools fluid in systems compatible with the unit specifications.', 'Operates and monitors the unit through the control panel.'],
    },
  },
  {
    id: 'air-compressor',
    name: { id: 'Unit Kompresor Udara Industri', en: 'Industrial Air Compressor Skid' },
    category: { id: 'Kompresor Udara', en: 'Air Compressor' },
    image: airCompressor,
    description: {
      id: 'Unit kompresor udara dalam konfigurasi skid yang dilengkapi tangki penerima dan panel kontrol.',
      en: 'An air compressor assembly in a skid configuration with a receiver tank and control panel.',
    },
    uses: {
      id: ['Menghasilkan udara bertekanan untuk sistem yang sesuai dengan spesifikasi kompresor.', 'Menyimpan udara bertekanan pada tangki penerima.'],
      en: ['Supplies compressed air to systems compatible with the compressor specifications.', 'Stores compressed air in the receiver tank.'],
    },
  },
  {
    id: 'manifold-panel',
    name: { id: 'Panel Pemantau Tekanan Gas Medis', en: 'Medical Gas Pressure Monitoring Panel' },
    category: { id: 'Panel Pemantau Gas Medis', en: 'Medical Gas Monitoring Panel' },
    image: manifoldPanel,
    description: {
      id: 'Panel ini menampilkan tekanan pada jalur oksigen, vakum, dan udara medis yang terhubung.',
      en: 'This panel displays pressure readings for connected oxygen, vacuum, and medical air lines.',
    },
    uses: {
      id: ['Memantau tekanan jalur gas medis melalui tampilan panel.', 'Membantu petugas melihat kondisi jalur yang terhubung.'],
      en: ['Monitors medical gas line pressures on the panel display.', 'Helps staff view the condition of connected lines.'],
    },
  },
  {
    id: 'medical-gas-control-panels',
    name: { id: 'Box Katup Area Gas Medis', en: 'Medical Gas Zone Valve Box' },
    category: { id: 'Box Katup Area', en: 'Zone Valve Box' },
    image: controlPanels,
    description: {
      id: 'Box katup area ini menampung katup isolasi dan pengukur tekanan untuk jalur gas medis.',
      en: 'This zone valve box houses isolation valves and pressure gauges for medical gas lines.',
    },
    uses: {
      id: ['Memantau tekanan jalur gas medis.', 'Mengisolasi suplai pada jalur yang terhubung saat diperlukan oleh petugas berwenang.'],
      en: ['Monitors medical gas line pressures.', 'Isolates supply to connected lines when required by authorized personnel.'],
    },
  },
  {
    id: 'outlet-panel',
    name: { id: 'Outlet Gas Medis', en: 'Medical Gas Outlet' },
    category: { id: 'Outlet Gas Medis', en: 'Medical Gas Outlet' },
    image: outletPanel,
    description: {
      id: 'Rangkaian outlet untuk gas medis seperti oksigen, vakum, udara medis, dan nitrogen.',
      en: 'A lineup of outlets for medical gases such as oxygen, vacuum, medical air, and nitrogen.',
    },
    uses: {
      id: ['Menghubungkan peralatan ke jalur gas medis di titik penggunaan.', 'Menyediakan outlet gas medis di fasilitas pelayanan kesehatan.'],
      en: ['Connects equipment to medical gas lines at the point of use.', 'Provides medical gas outlets in healthcare facilities.'],
    },
  },
  {
    id: 'flowmeters',
    name: { id: 'Flowmeter Oksigen dengan Humidifier', en: 'Oxygen Flowmeter with Humidifier' },
    category: { id: 'Flowmeter Oksigen', en: 'Oxygen Flowmeter' },
    image: flowmeters,
    description: {
      id: 'Flowmeter oksigen dengan skala aliran dalam liter per menit dan botol humidifier.',
      en: 'An oxygen flowmeter with a flow scale in liters per minute and a humidifier bottle.',
    },
    uses: {
      id: ['Mengatur dan menunjukkan aliran oksigen pada skala flowmeter.', 'Melembapkan aliran oksigen melalui botol humidifier sesuai petunjuk penggunaan.'],
      en: ['Adjusts and indicates oxygen flow on the flowmeter scale.', 'Humidifies the oxygen flow through the humidifier bottle, following its instructions for use.'],
    },
  },
  {
    id: 'regulators',
    name: { id: 'Regulator Oksigen dengan Humidifier', en: 'Oxygen Regulator with Humidifier' },
    category: { id: 'Regulator Oksigen', en: 'Oxygen Regulator' },
    image: regulators,
    description: {
      id: 'Regulator oksigen dengan manometer tekanan dan botol humidifier.',
      en: 'An oxygen regulator with a pressure gauge and humidifier bottle.',
    },
    uses: {
      id: ['Mengatur tekanan keluaran oksigen dari sumber yang terhubung.', 'Melembapkan aliran oksigen melalui botol humidifier sesuai petunjuk penggunaan.'],
      en: ['Regulates oxygen outlet pressure from the connected source.', 'Humidifies the oxygen flow through the humidifier bottle, following its instructions for use.'],
    },
  },
];
