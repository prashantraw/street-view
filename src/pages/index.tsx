// pages/index.tsx
import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import StreetViewMap from '../components/StreetViewMap';

const Home: React.FC = () => {
  const [location, setLocation] = useState({ lat: 37.869260, lng: -122.254811 });
  const [theme, setTheme] = useState('light');

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLocation(prevState => ({
      ...prevState,
      [name]: parseFloat(value)
    }));
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Street View</title>
        <meta name="description" content="Integrate Google Street View in a Next.js project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Street View</h1>
          <p className={styles.description}>
            Experience the streets from the comfort of your home.
          </p>
        </div>
        <button className={styles.button} onClick={toggleTheme}>
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </header>

      <main className={styles.main}>
        <div className={styles.form}>
          <input
            type="number"
            name="lat"
            placeholder="Latitude"
            value={location.lat}
            onChange={handleLocationChange}
            className={styles.input}
          />
          <input
            type="number"
            name="lng"
            placeholder="Longitude"
            value={location.lng}
            onChange={handleLocationChange}
            className={styles.input}
          />
        </div>
        <div className={styles.mapContainer}>
          <StreetViewMap location={location} />
        </div>
      </main>
    </div>
  );
};

export default Home;
