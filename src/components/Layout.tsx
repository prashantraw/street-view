// src/components/Layout.tsx

import Sidebar from './Sidebar';
import styles from '../styles/Layout.module.css';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
