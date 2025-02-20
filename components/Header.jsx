import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
        <img src="/ursinhoRosa.jpg" alt="Logo" className={styles.logo} />
        <h1 className={styles.title}> Cheer Bear</h1>
</header>
    );
}
