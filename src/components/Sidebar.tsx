import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li><Link href="/" className={styles.link}>Home</Link></li>
        <li><Link href="/popular-views">Popular-Views</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;