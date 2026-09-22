import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { format } from 'date-fns';

interface MapDataPoint {
  id: string;
  shopName: string;
  latitude: number;
  longitude: number;
  status: 'PASS' | 'REVIEW' | 'FAIL';
  date: string;
}

import { demoInspections } from '../../data/demoInspections';

export const Map = () => {
  const [data, setData] = useState<MapDataPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/analytics/map')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.warn('Failed to load map data, falling back to demo data', err);
        const demoData: MapDataPoint[] = demoInspections.map(i => ({
          id: i.id,
          shopName: i.shopName,
          latitude: i.location.latitude,
          longitude: i.location.longitude,
          status: i.overallResult,
          date: i.startedAt
        }));
        setData(demoData);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="h-[400px] w-full flex items-center justify-center bg-slate-900 rounded-xl border border-slate-800">Loading Map...</div>;
  }

  // Center on Kolkata as fallback
  const center: [number, number] = data.length > 0 
    ? [data[0].latitude, data[0].longitude] 
    : [22.5726, 88.3639];

  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden border border-slate-800 relative z-0">
      <MapContainer center={center} zoom={11} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map(point => (
          <CircleMarker
            key={point.id}
            center={[point.latitude, point.longitude]}
            radius={point.status === 'FAIL' ? 8 : 5}
            pathOptions={{
              fillColor: point.status === 'FAIL' ? '#ef4444' : point.status === 'REVIEW' ? '#eab308' : '#22c55e',
              color: point.status === 'FAIL' ? '#ef4444' : point.status === 'REVIEW' ? '#eab308' : '#22c55e',
              fillOpacity: 0.7,
              weight: 1
            }}
          >
            <Popup className="bg-slate-900 border-slate-800 text-white">
              <div className="font-semibold text-slate-900">{point.shopName}</div>
              <div className="text-sm text-slate-600">Status: {point.status}</div>
              <div className="text-xs text-slate-500">{format(new Date(point.date), 'MMM d, yyyy')}</div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};
