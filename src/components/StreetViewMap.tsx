// components/StreetViewMap.tsx
import React, { useEffect, useState } from 'react';
import { LoadScript, GoogleMap } from '@react-google-maps/api';
import styles from '../styles/StreetViewMap.module.css';

interface Location {
  lat: number;
  lng: number;
}

interface StreetViewMapProps {
  location: Location;
}

const StreetViewMap: React.FC<StreetViewMapProps> = ({ location }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (map) {
      const panorama = new window.google.maps.StreetViewPanorama(
        document.getElementById('street-view') as HTMLElement,
        {
          position: location,
          pov: { heading: 165, pitch: 0 },
          zoom: 1
        }
      );
      map.setStreetView(panorama);
    }
  }, [map, location]);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <GoogleMap
        mapContainerClassName={styles.mapContainer}
        center={location}
        zoom={14}
        onLoad={map => setMap(map)}
      >
        <div id="street-view" className={styles.mapContainer} />
      </GoogleMap>
    </LoadScript>
  );
};

export default StreetViewMap;
