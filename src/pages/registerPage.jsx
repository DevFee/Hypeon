import HeaderJSX from "../components/header";
import RegisterCJSX from "../components/register";

export default function RegisterPage(){
    return(
        <div>
            <HeaderJSX text1={"Home"} link1={'/'} text2={"Login"} link2={"login"} text3={"Suporte"} link3={"https://telegram.org"}/>
            <RegisterCJSX/>
        </div>
    )
}