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
                <h1><a href="/">Hypecoin</a></h1>
            </div>
            <nav className={`${styles.nav} ${toggleClassCheck}`}>
                <button onClick={handleClass} className={styles.hamburguer}></button>
                <ul>
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">Login</a></li>
                    <li className={styles.register}><a href="#">Registre-se</a></li>
                </ul>
            </nav>
        </header>
    )
}