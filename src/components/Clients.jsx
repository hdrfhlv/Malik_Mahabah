import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { clients } from '../data/clients';
import { useLang } from '../context/LanguageContext';

const locations = [
  { match: /teluk wondama/i, city: 'Teluk Wondama', coordinates: [-2.81, 134.51] },
  { match: /pontianak|kalimantan barat/i, city: 'Pontianak', coordinates: [-0.03, 109.34], approximate: true },
  { match: /bekasi/i, city: 'Bekasi', coordinates: [-6.24, 106.98] },
  { match: /cikarang/i, city: 'Cikarang', coordinates: [-6.31, 107.17] },
  { match: /depok/i, city: 'Depok', coordinates: [-6.40, 106.79] },
  { match: /ciputat/i, city: 'Ciputat', coordinates: [-6.29, 106.72] },
  { match: /tangerang|bsd/i, city: 'Tangerang', coordinates: [-6.18, 106.63] },
  { match: /cakung/i, city: 'Cakung', coordinates: [-6.18, 106.94] },
  { match: /semanggi|kebon jeruk|pluit|jakarta/i, city: 'Jakarta', coordinates: [-6.21, 106.85] },
  { match: /bandung/i, city: 'Bandung', coordinates: [-6.92, 107.62] },
  { match: /ciawi/i, city: 'Ciawi', coordinates: [-6.66, 106.86] },
  { match: /bogor/i, city: 'Bogor', coordinates: [-6.60, 106.81] },
  { match: /samarinda|kalimantan timur/i, city: 'Samarinda', coordinates: [-0.50, 117.15], approximate: true },
  { match: /denpasar|nusa dua/i, city: 'Denpasar', coordinates: [-8.65, 115.22] },
  { match: /jember/i, city: 'Jember', coordinates: [-8.17, 113.70] },
  { match: /mojokerto/i, city: 'Mojokerto', coordinates: [-7.47, 112.43] },
  { match: /jawa timur/i, city: 'Surabaya', coordinates: [-7.26, 112.75], approximate: true },
  { match: /porsea|toba/i, city: 'Porsea', coordinates: [2.42, 99.12] },
  { match: /paniai|papua tengah/i, city: 'Paniai', coordinates: [-3.92, 136.37] },
  { match: /padang|sumatra barat/i, city: 'Padang', coordinates: [-0.95, 100.42], approximate: true },
  { match: /purwakarta/i, city: 'Purwakarta', coordinates: [-6.56, 107.44] },
  { match: /bangka|belitung/i, city: 'Pangkalpinang', coordinates: [-2.13, 106.11], approximate: true },
  { match: /lubuklinggau/i, city: 'Lubuklinggau', coordinates: [-3.30, 102.86] },
  { match: /papua barat/i, city: 'Manokwari', coordinates: [-0.86, 134.06], approximate: true },
  { match: /banten/i, city: 'Serang', coordinates: [-6.12, 106.15], approximate: true },
  { match: /sumatra utara/i, city: 'Medan', coordinates: [3.60, 98.67], approximate: true },
  { match: /sumatra selatan/i, city: 'Palembang', coordinates: [-2.98, 104.78], approximate: true },
  { match: /jawa barat/i, city: 'Bandung', coordinates: [-6.92, 107.62], approximate: true },
];

function getLocation(client) {
  const source = `${client.name} ${client.location}`;
  return locations.find(({ match }) => match.test(source)) ?? {
    city: client.location,
    coordinates: [-6.21, 106.85],
    approximate: true,
  };
}

function createMarkerTooltip(marker, lang) {
  const container = document.createElement('div');
  const heading = document.createElement('strong');
  heading.textContent = marker.city;
  container.appendChild(heading);

  const list = document.createElement('ul');
  marker.clients.forEach((client) => {
    const item = document.createElement('li');
    item.textContent = client.name;
    list.appendChild(item);
  });
  container.appendChild(list);

  if (marker.approximate) {
    const note = document.createElement('small');
    note.textContent = lang === 'id' ? 'Lokasi perkiraan' : 'Approximate location';
    container.appendChild(note);
  }

  return container;
}

function buildCityMarkers() {
  const groups = new Map();

  clients.forEach((client) => {
    const location = getLocation(client);
    const group = groups.get(location.city) ?? {
      city: location.city,
      coordinates: location.coordinates,
      clients: [],
      approximate: Boolean(location.approximate),
    };

    group.clients.push(client);
    groups.set(location.city, group);
  });

  return [...groups.values()];
}

function IndonesiaMap({ markers, selectedCity, onSelect, lang }) {
  const mapElementRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapElementRef.current) return undefined;

    const map = L.map(mapElementRef.current, {
      scrollWheelZoom: false,
      minZoom: 3,
      maxZoom: 18,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    map.fitBounds([[-11, 94], [6, 142]], { padding: [12, 12] });
    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return undefined;

    const clusterLayer = L.markerClusterGroup({
      showCoverageOnHover: false,
      maxClusterRadius: 42,
      iconCreateFunction: (cluster) => L.divIcon({
          className: 'client-map-cluster-icon',
          html: `<span>${cluster.getChildCount()}</span>`,
          iconSize: L.point(42, 42),
      }),
    });

    markers.forEach((marker) => {
      const selected = marker.city === selectedCity;
      const count = marker.clients.length;
      const mapMarker = L.marker(marker.coordinates, {
          title: `${marker.city}, ${count} ${lang === 'id' ? 'klien' : 'clients'}`,
          icon: L.divIcon({
            className: 'client-map-pin-icon',
            html: `<span class="client-map-pin${selected ? ' client-map-pin-selected' : ''}">${count > 1 ? count : ''}</span>`,
            iconSize: L.point(34, 34),
            iconAnchor: L.point(17, 17),
          }),
      });

      mapMarker.bindTooltip(createMarkerTooltip(marker, lang), {
          className: 'client-map-tooltip',
          direction: 'top',
          offset: L.point(0, -14),
          opacity: 1,
      });
      mapMarker.on('click', () => onSelect(marker.city));
      clusterLayer.addLayer(mapMarker);
    });

    map.addLayer(clusterLayer);
    return () => {
      map.removeLayer(clusterLayer);
    };
  }, [lang, markers, onSelect, selectedCity]);

  return (
    <div
      ref={mapElementRef}
      role="application"
      aria-label={lang === 'id' ? 'Peta OpenStreetMap lokasi klien' : 'OpenStreetMap of client locations'}
      className="relative z-0 isolate h-[360px] w-full overflow-hidden rounded-2xl border border-sky-100 shadow-inner sm:h-[420px]"
    />
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
          className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-4 shadow-2xl shadow-slate-900/10 sm:p-6 lg:p-8"
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
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-primary ring-2 ring-primary/20" aria-hidden="true" />
                  {lang === 'id' ? 'Klik kelompok titik untuk memperbesar peta' : 'Click marker clusters to zoom in'}
                </span>
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
                  ? 'Pilih titik untuk melihat klien di kota tersebut. Lokasi peta merupakan perkiraan tingkat kota, bukan alamat persis rumah sakit.'
                  : 'Select a marker to see clients in that city. Map positions are approximate city locations, not exact hospital addresses.'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
