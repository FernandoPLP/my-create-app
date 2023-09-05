//import React from 'react'
import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
      <>
        <header>
          <h1>Git + React</h1>
          <nav>
            <ul>
              <li><Link to="/">HOME</Link> </li>
              <li><Link to="/produtos">PRODUTOS</Link> </li>
              <li><Link to="/editar/produtos/:id">EDITAR PRODUTOS</Link> </li>
            </ul>
          </nav>
        </header>
      </>
  )
}
