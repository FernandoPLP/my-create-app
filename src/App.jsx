//import React from 'react'
import Cabecalho from "./components/cabecalho";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import styles from "./App.module.css"

export default function App() {
  //link de redes sociais
 

  return (
    <>
      <div className={styles.container}>
        <Cabecalho />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
