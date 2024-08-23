import styles from '../styles/ThemeToggle.module.css';

export const ToggleSwitchRound = ({ isChecked, onToggle }: {isChecked: boolean, onToggle: () => void}) => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={isChecked} onChange={onToggle} />
      <span className={styles.slider}></span>
    </label>
  );
};