import ScrollReveal from 'scrollreveal'
import styles from './styles/main.module.css'

export default function MainJSX(){
    ScrollReveal({ reset: true });
    ScrollReveal().reveal("#main", {duration: 2000, scale: 2})

    return(
        <main id='main'>
            <h1> <span className={styles.Highlight}>[</span> Explore, Transacione, Divirta-se! <span className={styles.Highlight}>]</span> </h1>
            <h3> Contas, Jogos, Gift Cards e Mais em um só lugar</h3>
        </main>
    )
}