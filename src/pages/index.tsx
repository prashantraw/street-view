import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import StreetViewMap from '../components/StreetViewMap';
import axios from 'axios';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const [location, setLocation] = useState({ lat: 37.869260, lng: -122.254811 });
  const [placeName, setPlaceName] = useState('');

  // Fetch coordinates for a place name using Google Places API
  const fetchCoordinates = async (place: string) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          place
        )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
      );
      if (response.status === 429) {
        console.error('Too many requests. Please try again later.');
        alert('Too many requests. Please try again later.');
        return;
      }
      if (response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry.location;
        setLocation({ lat, lng });
      } else {
        console.error('No results found for the place');
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

  const handlePlaceSubmit = () => {
    fetchCoordinates(placeName);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Street View</title>
        <meta name="description" content="Integrate Google Street View in a Next.js project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
        <main className={styles.main}>
          <p className={styles.description}>
            Experience the streets from the comfort of your home.
          </p>
          <div className={styles.form}>
            <input
              type="text"
              name="placeName"
              placeholder="Enter a place name"
              value={placeName}
              onChange={(e) => setPlaceName(e.target.value)}
              className={styles.input}
            />
            <button onClick={handlePlaceSubmit} className={styles.button}>
              Show Street View
            </button>
          </div>
          <div className={styles.mapContainer}>
            <StreetViewMap location={location} />
          </div>
        </main>
    </div>
  );
};

export default Home;
 