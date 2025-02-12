import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

function MapUpdater({ center }) {
    const map = useMap();
    useEffect(() => {
        if (center[0] && center[1]) {
            map.setView(center, map.getZoom());
        }
    }, [center, map]);
    return null;
}


export default function CityMap({ lat, lon, city }) {
    if (!lat || !lon) return <p>Carregando mapa...</p>;

    return (
        <MapContainer center={[lat, lon]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lon]}>
                <Popup>{city || 'Você está aqui!'}</Popup>
            </Marker>
            <MapUpdater center={[lat, lon]} />
        </MapContainer>
    );
}
