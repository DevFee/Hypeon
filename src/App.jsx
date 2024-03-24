import HomeJSX from './pages/home'
import { useState } from 'react'

function App() {

  const [accountName, setAccountName ] = useState()
  const [accountPassWord, setAccountPassWord ] = useState()

  let user = {
    name : accountName,
    password : accountPassWord
  }

  localStorage.setItem("login", user)

  if (user.name == null || user.password == null)
  { 
    console.log("Convidado") 
  } 
  else 
  {
    console.log("usuario", user.name)
  }

  return(
    <HomeJSX/>
  )

}

export default App
