import styles from './styles/header.module.css'
import { useState } from 'react'

export default function HeaderJSX({text1, text2, text3, link1, link2, link3}){

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
                    <li><a href={link1}>{text1}</a></li>
                    <li><a href={link2}>{text2}</a></li>
                    <li className={styles.register}><a href={link3}>{text3}</a></li>
                </ul>
            </nav>
        </header>
    )
}