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
    name: { id: 'Sentral Gas Medis Otomatis', en: 'Automatic Manifold' },
    category: { id: 'Sistem Manifold', en: 'Manifold System' },
    image: automaticManifold,
    description: {
      id: 'Unit kontrol otomatis untuk sistem manifold oksigen medis.',
      en: 'An automatic control unit for medical oxygen manifold systems.',
    },
    uses: {
      id: ['Sistem suplai oksigen medis', 'Instalasi manifold oksigen'],
      en: ['Medical oxygen supply systems', 'Oxygen manifold installations'],
    },
  },
  {
    id: 'dual-headwall',
    name: { id: 'BedHead Alumunium', en: 'BedHead Alumunium' },
    category: { id: 'Wallduct', en: 'Wallduct' },
    image: dualHeadwall,
    description: {
      id: 'Panel headwall untuk penempatan outlet gas medis di area perawatan.',
      en: 'Headwall panels for medical gas outlets in patient-care areas.',
    },
    uses: {
      id: ['Area perawatan pasien', 'Instalasi outlet gas medis'],
      en: ['Patient-care areas', 'Medical gas outlet installations'],
    },
  },
  {
    id: 'industrial-chiller',
    name: { id: 'Kompressor Bebas Oli', en: 'Oil Free Compressor' },
    category: { id: 'Kompressor', en: 'Compressor' },
    image: industrialChiller,
    description: {
      id: 'Unit chiller industri yang dilengkapi panel kontrol.',
      en: 'An industrial chiller assembly equipped with a control panel.',
    },
    uses: {
      id: ['Kebutuhan pendinginan fasilitas', 'Sistem chiller industri'],
      en: ['Facility cooling requirements', 'Industrial chiller systems'],
    },
  },
  {
    id: 'air-compressor',
    name: { id: 'Pompa Vakum Medis', en: 'Medical Vacuum' },
    category: { id: 'Medical Vacuum', en: 'Medical Vacuum' },
    image: airCompressor,
    description: {
      id: 'Unit kompresor udara industri dalam konfigurasi skid.',
      en: 'An industrial air compressor assembly in a skid configuration.',
    },
    uses: {
      id: ['Sistem suplai udara', 'Instalasi kompresor industri'],
      en: ['Air supply systems', 'Industrial compressor installations'],
    },
  },
  {
    id: 'manifold-panel',
    name: { id: 'Alarm Gas Medis', en: 'Gas Medic Alarm' },
    category: { id: 'Copper Tube', en: 'Copper Tube' },
    image: manifoldPanel,
    description: {
      id: 'Panel kontrol untuk sistem manifold gas medis.',
      en: 'A control panel for medical gas manifold systems.',
    },
    uses: {
      id: ['Sistem manifold gas medis', 'Instalasi suplai gas medis'],
      en: ['Medical gas manifold systems', 'Medical gas supply installations'],
    },
  },
  {
    id: 'medical-gas-control-panels',
    name: { id: 'Panel Kontrol Gas Medis', en: 'Medical Gas Control Panels' },
    category: { id: 'Panel Kontrol', en: 'Control Panel' },
    image: controlPanels,
    description: {
      id: 'Panel kontrol dengan katup dan pengukur tekanan untuk memantau jalur gas medis.',
      en: 'Control panels with valves and pressure gauges for monitoring medical gas lines.',
    },
    uses: {
      id: ['Pemantauan tekanan jalur gas medis', 'Pengaturan dan isolasi suplai gas'],
      en: ['Medical gas line pressure monitoring', 'Gas supply regulation and isolation'],
    },
  },
  {
    id: 'outlet-panel',
    name: { id: 'Outlet Gas Medis', en: 'Medical Gas Outlet' },
    category: { id: 'Panel Outlet', en: 'Outlet Panel' },
    image: outletPanel,
    description: {
      id: 'Rangkaian panel outlet untuk titik penggunaan gas medis.',
      en: 'A lineup of outlet panels for medical gas points of use.',
    },
    uses: {
      id: ['Titik penggunaan gas medis', 'Fasilitas pelayanan kesehatan'],
      en: ['Medical gas points of use', 'Healthcare facilities'],
    },
  },
  {
    id: 'flowmeters',
    name: { id: 'Pengukur Aliran Oksigen', en: 'Oxygen Flowmeter Assemblies' },
    category: { id: 'Flowmeter Oksigen', en: 'Oxygen Flowmeter' },
    image: flowmeters,
    description: {
      id: 'Rangkaian flowmeter oksigen dengan humidifier.',
      en: 'Oxygen flowmeter assemblies with humidifiers.',
    },
    uses: {
      id: ['Pengaturan aliran oksigen', 'Pemberian oksigen dengan humidifier'],
      en: ['Oxygen flow adjustment', 'Oxygen delivery with humidification'],
    },
  },
  {
    id: 'regulators',
    name: { id: 'Regulator Vakum', en: 'Suction Regulator' },
    category: { id: 'Suction Regulator', en: 'Suction Regulator' },
    image: regulators,
    description: {
      id: 'Rangkaian regulator oksigen yang dilengkapi botol humidifier.',
      en: 'Oxygen regulator assemblies equipped with humidifier bottles.',
    },
    uses: {
      id: ['Pengaturan tekanan oksigen', 'Pemberian oksigen dengan humidifier'],
      en: ['Oxygen pressure regulation', 'Oxygen delivery with humidification'],
    },
  },
];
