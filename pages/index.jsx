import styles from '../styles/Home.module.css';
import Header from '../components/Header';

export default function Home (){
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <div className={styles.leftColumns}>
                    <div className={styles.column}>
                        <p>Conteúdo da coluna 1</p>
                    </div>   
                    <div className={styles.column}>
                        <p>Conteúdo da coluna 2</p>
                    </div>
                    <div className={styles.column}>
                        <p>Conteúdo da coluna 3</p>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.innerColumn}>
                        <p>Conteúdo da coluna maior</p>
                    </div>
                </div>
            </main>
        </div>
    );
}