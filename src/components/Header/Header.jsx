import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>User Management</h1>
      <div className={styles.avatar}>
        <span>D</span>
      </div>
    </header>
  );
}

export default Header;