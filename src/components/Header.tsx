import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';
import sun from '../images/sun.svg';
import moon from '../images/dark-theme.svg';
import Image from 'next/image';

export const Header: React.FC = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <div>
        <p className={styles.title}>Street View</p>
      </div>
      <div className={styles.themeToggle} onClick={toggleTheme}>
        {/* <span className={styles.label}>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span> */}
        <Image className={styles.themeIcon} src={theme === 'dark' ? sun : moon} alt="dark" />
      </div>
      {/* <ToggleSwitchRound
        isChecked={theme === 'dark'}
        onToggle={toggleTheme}
      /> */}
    </header>
  )
};