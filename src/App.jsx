//import React from 'react'
import Cabecalho from "./components/cabecalho";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import styles from "./App.module.css"

export default function App() {
  //link de redes sociais
  let listaLinks = [<li>Github</li>, <li>X</li>, <li>Reddit</li>];

  return (
    <>
      <div className="Container">
        <Cabecalho />
        <Outlet />
        <Footer listaProps={listaLinks} />
      </div>
    </>
  );
}
