// src/components/Layout.tsx

import Sidebar from './Sidebar';
import styles from '../styles/Layout.module.css';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
