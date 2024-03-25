import styles from './styles/login.module.css'

export default function LoginCJSX(){
    return(
        <main className={styles.containerLogin}>
            <div className={styles.div1Login}>
            <h1>Login</h1>
                <form action="GET">
                    <input placeholder='Nome: ' type="text" name="nome" />
                    <input placeholder='Senha: ' type="password" name="senha" />           
                    <button type="submit" >Fazer login</button>
                </form>
            </div>
            <div>
                <h1>Não possui conta?</h1>
                <a href="register">Registre-se</a>
            </div>
        </main>
    )
}