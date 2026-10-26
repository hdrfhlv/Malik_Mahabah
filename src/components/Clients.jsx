import { useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { clients } from '../data/clients';
import { useLang } from '../context/LanguageContext';
import indonesiaMap from '../assets/MapChart_Map.png';

const MAP_WIDTH = 2000;
const MAP_HEIGHT = 1000;

const locations = [
  { match: /teluk wondama/i, city: 'Teluk Wondama', point: [1640, 420] },
  { match: /pontianak|kalimantan barat/i, city: 'Pontianak', point: [700, 330], approximate: true },
  { match: /bekasi/i, city: 'Bekasi', point: [520, 625] },
  { match: /cikarang/i, city: 'Cikarang', point: [540, 630] },
  { match: /depok/i, city: 'Depok', point: [515, 642] },
  { match: /ciputat/i, city: 'Ciputat', point: [505, 630] },
  { match: /tangerang|bsd/i, city: 'Tangerang', point: [490, 625] },
  { match: /cakung/i, city: 'Cakung', point: [525, 620] },
  { match: /semanggi|kebon jeruk|pluit|jakarta/i, city: 'Jakarta', point: [510, 620] },
  { match: /bandung/i, city: 'Bandung', point: [560, 655] },
  { match: /ciawi/i, city: 'Ciawi', point: [530, 660] },
  { match: /bogor/i, city: 'Bogor', point: [520, 650] },
  { match: /samarinda|kalimantan timur/i, city: 'Samarinda', point: [1000, 350], approximate: true },
  { match: /denpasar|nusa dua/i, city: 'Denpasar', point: [920, 700] },
  { match: /jember/i, city: 'Jember', point: [840, 690] },
  { match: /mojokerto/i, city: 'Mojokerto', point: [735, 665] },
  { match: /jawa timur/i, city: 'Surabaya', point: [760, 660], approximate: true },
  { match: /porsea|toba/i, city: 'Porsea', point: [225, 295] },
  { match: /paniai|papua tengah/i, city: 'Paniai', point: [1780, 545] },
  { match: /padang|sumatra barat/i, city: 'Padang', point: [245, 390], approximate: true },
  { match: /purwakarta/i, city: 'Purwakarta', point: [535, 640] },
  { match: /bangka|belitung/i, city: 'Pangkalpinang', point: [595, 445], approximate: true },
  { match: /lubuklinggau/i, city: 'Lubuklinggau', point: [375, 480] },
  { match: /papua barat/i, city: 'Manokwari', point: [1680, 425], approximate: true },
  { match: /banten/i, city: 'Serang', point: [480, 620], approximate: true },
  { match: /sumatra utara/i, city: 'Medan', point: [180, 235], approximate: true },
  { match: /sumatra selatan/i, city: 'Palembang', point: [430, 520], approximate: true },
  { match: /jawa barat/i, city: 'Bandung', point: [560, 655], approximate: true },
];

function getLocation(client) {
  const source = `${client.name} ${client.location}`;
  return locations.find(({ match }) => match.test(source)) ?? {
    city: client.location,
    point: [510, 620],
    approximate: true,
  };
}

function toMapPoint([x, y]) {
  return { x, y };
}

function buildCityMarkers() {
  const groups = new Map();

  clients.forEach((client) => {
    const location = getLocation(client);
    const group = groups.get(location.city) ?? {
      city: location.city,
      point: toMapPoint(location.point),
      clients: [],
      approximate: Boolean(location.approximate),
    };

    group.clients.push(client);
    groups.set(location.city, group);
  });

  return [...groups.values()];
}

function IndonesiaMap({ markers, selectedCity, onSelect, lang }) {
  return (
    <div className="relative aspect-[20/9] w-full overflow-hidden rounded-2xl bg-[#f5f8f8]">
      <img
        src={indonesiaMap}
        alt={lang === 'id' ? 'Peta Indonesia dengan kabupaten dan kota' : 'Map of Indonesia with regencies and cities'}
        className="absolute inset-0 h-full w-full object-contain"
        draggable="false"
      />
      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        className="absolute inset-0 h-full w-full"
        role="group"
        aria-label={lang === 'id' ? 'Lokasi klien pada peta' : 'Client locations on the map'}
      >
        <defs>
          <filter id="client-marker-shadow" x="-100%" y="-100%" width="300%" height="300%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#7f1d1d" floodOpacity="0.3" />
          </filter>
        </defs>
        {markers.map((marker) => {
          const selected = marker.city === selectedCity;
          const radius = marker.clients.length > 1 ? 11 : 8;
          return (
            <g
              key={marker.city}
              role="button"
              tabIndex={0}
              aria-label={`${marker.city}, ${marker.clients.length} ${lang === 'id' ? 'klien' : 'clients'}`}
              aria-pressed={selected}
              onClick={() => onSelect(marker.city)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  onSelect(marker.city);
                }
              }}
              className="cursor-pointer outline-none"
              filter="url(#client-marker-shadow)"
            >
              {selected && (
                <circle
                  cx={marker.point.x}
                  cy={marker.point.y}
                  r="23"
                  fill="#dc2626"
                  fillOpacity="0.14"
                  stroke="#dc2626"
                  strokeOpacity="0.28"
                  strokeWidth="2"
                />
              )}
              <circle
                cx={marker.point.x}
                cy={marker.point.y}
                r={radius}
                fill="#c62828"
                stroke="#ffffff"
                strokeWidth="3"
              />
              {marker.clients.length > 1 && (
                <text
                  x={marker.point.x}
                  y={marker.point.y + 4}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="#ffffff"
                  pointerEvents="none"
                >
                  {marker.clients.length}
                </text>
              )}
              <title>
                {`${marker.city}${marker.approximate ? ` (${lang === 'id' ? 'perkiraan' : 'approximate'})` : ''}: ${marker.clients.map((client) => client.name).join(', ')}`}
              </title>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function Clients() {
  const { lang, t } = useLang();
  const ct = t.clients;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const markers = useMemo(buildCityMarkers, []);
  const [selectedCity, setSelectedCity] = useState('Jakarta');
  const selectedMarker = markers.find((marker) => marker.city === selectedCity) ?? markers[0];

  return (
    <section id="clients" ref={ref} className="bg-surface-soft bg-dot-grid py-24" aria-labelledby="clients-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-heading text-sm font-semibold text-primary">
            {ct.badge}
          </span>
          <h2 id="clients-heading" className="mb-4 font-heading text-3xl font-extrabold text-primary-dark md:text-4xl">
            {ct.heading1} <span className="text-gradient">{ct.headingAccent}</span>
          </h2>
          <p className="mx-auto max-w-2xl font-body text-base text-gray-500">{ct.sub}</p>
          <p className="mt-5 font-heading text-sm font-bold text-primary">
            {clients.length} {ct.total} <span className="mx-1 text-gray-300">·</span> {markers.length} {lang === 'id' ? 'kota' : 'cities'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-4 shadow-xl shadow-slate-900/5 sm:p-6 lg:p-8"
        >
          <div className="grid items-center gap-7 lg:grid-cols-[1.6fr_0.8fr]">
            <div>
              <IndonesiaMap
                markers={markers}
                selectedCity={selectedCity}
                onSelect={setSelectedCity}
                lang={lang}
              />
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1 text-xs text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full border-2 border-white bg-[#c62828] shadow-sm" aria-hidden="true" />
                  {lang === 'id' ? 'Kota klien' : 'Client cities'}
                  <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c62828] px-1.5 text-[10px] font-bold text-white">
                    2+
                  </span>
                  {lang === 'id' ? 'lebih dari satu klien' : 'multiple clients'}
                </span>
                <span>{lang === 'id' ? 'Titik bertumpuk dikelompokkan per kota' : 'Overlapping locations grouped by city'}</span>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-50 p-6 sm:p-7">
              <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                <MapPin size={17} className="text-[#c62828]" aria-hidden="true" />
                {selectedMarker.city}
                {selectedMarker.approximate && (
                  <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-semibold normal-case tracking-normal text-amber-800">
                    {lang === 'id' ? 'Perkiraan' : 'Approx.'}
                  </span>
                )}
              </div>
              <motion.div
                key={selectedMarker.city}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                aria-live="polite"
              >
                <p className="mb-4 font-heading text-2xl font-bold text-primary-dark">
                  {selectedMarker.clients.length} {lang === 'id' ? 'klien' : 'clients'}
                </p>
                <ul className="max-h-56 space-y-3 overflow-y-auto pr-2">
                  {selectedMarker.clients.map((client) => (
                    <li key={client.name} className="border-l-2 border-red-200 pl-3">
                      <p className="text-sm font-semibold leading-snug text-slate-800">{client.name}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        {client.location} <span className="mx-1 text-slate-300">·</span> {client.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <p className="mt-6 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500">
                {lang === 'id'
                  ? 'Pilih titik merah di peta untuk melihat klien di kota tersebut. Kota ditentukan dari data proyek yang tersedia.'
                  : 'Select a red dot on the map to see clients in that city. Locations are based on available project data.'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
