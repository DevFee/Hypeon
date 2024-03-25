import styles from './styles/register.module.css'

export default function RegisterCJSX(){
    return(
        <main className={styles.containerRegister}>
            <div className={styles.div1Register}>
            <h1>Registro</h1>
                <form action="POST">
                    <input placeholder='Nome: ' type="text" name="nome" />
                    <input placeholder='Senha: ' type="password" name="senha" />           
                    <button type="submit" >Criar conta</button>
                </form>
            </div>
            <div>
                <h1>Já possui conta?</h1>
                <a href="login">Faça Login</a>
            </div>
        </main>
    )
}