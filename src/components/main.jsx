import styles from './styles/main.module.css'

export default function MainJSX(){
    return(
        <main className={styles.MainHomePage}>
            <h1> <span className={styles.Highlight}>[</span> Explore, Transacione, Divirta-se! <span className={styles.Highlight}>]</span> </h1>
            <h3> Contas, Jogos, Gift Cards e Mais em um só lugar</h3>
            <a href="login">Começar no hypeon!</a>
        </main>
    )
}