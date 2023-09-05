//import React from 'react'
import Cabecalho from "./components/cabecalho";
import Footer from "./components/footer";
import Section from "./components/section";
import reactLogo from "./assets/react.svg"
import { Outlet } from "react-router-dom";



export default function App() {

  let reactLogoAlt = "React Logo"

  //link de redes sociais
  let listaLinks = [<li>Github</li>, <li>X</li>, <li>Reddit</li>]

  return (
    <>
      <div className="Container">
        <Cabecalho/>
        {/* <img src={reactLogo} alt={reactLogoAlt} /> */}

        {/* <Section reactLogoProps = {reactLogo} reactLogoAltProps = {reactLogoAlt}/> */}
        <Outlet/>
        <Footer listaProps = {listaLinks}/>

        
        
      </div>
    </>
  )
}
