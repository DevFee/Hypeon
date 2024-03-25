import HeaderJSX from "../components/header"
import MainJSX from "../components/main"

export default function HomeJSX(){
    return(
        <div>
          <HeaderJSX text1={"Explore"} link1={"#"} text2={"Login"} link2={"login"} text3={"Registre-se"} link3={"login"}/>
          <MainJSX/>
        </div>
      )
}