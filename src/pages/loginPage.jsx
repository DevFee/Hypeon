import HeaderJSX from "../components/header";
import LoginCJSX from "../components/login";

export default function LoginPage(){
    return(
        <div>
            <HeaderJSX text1={"Home"} link1={'/'} text2={"Registro"} link2={"register"} text3={"Suporte"} link3={"https://telegram.org"}/>
            <LoginCJSX/>
        </div>
    )
}