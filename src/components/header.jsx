import styles from './styles/header.module.css'
import { useState } from 'react'

export default function HeaderJSX(){

    const [navState, setnavState] = useState(false)
    function handleClass(){
        setnavState(prevNavState => !prevNavState);
    }

    let toggleClassCheck = navState ? styles.navactive : '';

    return(
        <header>
            <div className={styles.titlebox}>
                <h1><a href="/">Hypeon</a></h1>
            </div>
            <nav className={`${styles.nav} ${toggleClassCheck}`}>
                <button onClick={handleClass} className={styles.hamburguer}></button>
                <ul>
                    <li><a href="#">Contas</a></li>
                    <li><a href="#">Itens</a></li>
                    <li><a href="#">Suporte</a></li>
                </ul>
            </nav>
        </header>
    )
}