import styles from '../styles/Home.module.css';
import Header from '../components/Header';

export default function Home (){
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <div className={styles.leftColumns}>
                    <div className={styles.column}>
                        <h1>Personalidade</h1>
                        <p>Uma ursa muito feliz e animada que faz jus ao seu nome, a Ursinha Cheer tem como objetivo ajudar todos a serem alegres como ela (às vezes, gostem ou não). Conhecida por gritar e gritar a qualquer momento, essa bola de pelos rosa exuberante, saltitante e simplesmente feliz só fica triste quando não consegue levantar o ânimo de alguém, mas isso significa que ela tem que se esforçar ainda mais. Sua personalidade é adequada ao seu horóscopo, que é Leão.</p>
                    </div>   
                    <div className={styles.column}>
                        <h1>Habilidades</h1>
                        <p>Seu distintivo na barriga lhe dá o poder de criar arco-íris tangíveis, que podem ser usados ​​para ajudá-la a resolver quaisquer problemas que ela possa estar enfrentando, embora esse método geralmente seja usado apenas como último recurso.</p>
                    </div>
                    <div className={styles.column}>
                        <h1>Curiosidades</h1>
                        <p>Seu nome em inglês, Cheer Bear, significa literalmente "Ursa Alegre".</p>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.innerColumn}>
                        <h1>Biografia</h1>
                        <p> Cheer Bear é uma Ursinha Carinhosa muito feliz que ajuda os outros a ver o lado bom da vida. Às vezes, ela até faz uma cheer para ajudar a deixar alguém mais feliz! Onde quer que ela vá, Cheer Bear usa um distintivo de esperança e felicidade na barriga — um arco-íris colorido. ” ―Biografia de Cheer Bear
                        Cheer Bear é uma das dez Ursinhas Carinhosas originais que estreou como personagem nos cartões American Greetings em 1982. Desde então, ela tem sido personagem principal em quase todas as encarnações da franquia. </p>

                        <h1>Conheça minha turma!</h1>
                        <img src="/imagemdaturma.png" alt="img" className={styles.turma} />

                    </div>
                </div>
            </main>
        </div>
    );
}