import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src="/ursinhoRosa.jpg" alt="Logo" className={styles.logo} />
                <p className={styles.description}></p>
            </div>
            <h1 className={styles.title}>Cheer Bear</h1>
        </header>
    );
}

git config --global user.name "Julianeves01"
git config --global user.email "Julia.s.neves6@aluno.senai.br"