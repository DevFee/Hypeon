import styles from './styles/main.module.css'
import ScrollReveal from 'scrollreveal'
export default function MainJSX(){
    ScrollReveal().reveal("#main", {distance : "100px", duration : 2300})
    return(
        <main id='main'>
            <h1> <span className={styles.Highlight}>[</span> Explore, Transacione, Divirta-se! <span className={styles.Highlight}>]</span> </h1>
            <h3> Contas, Jogos, Gift Cards e Mais em um só lugar</h3>
            <a href="register">Começar no hypeon!</a>
        </main>
    )
}