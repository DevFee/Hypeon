import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeJSX from "./pages/home"
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage.jsx';
import MainJSX from './components/main';

const router = createBrowserRouter([
  {
    path: "/",
    element : <HomeJSX/>
  },
  {
    path : "login",
    element : <LoginPage/>
  },
  {
    path : "register",
    element :  <RegisterPage/>
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
