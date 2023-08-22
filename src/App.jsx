//import React from 'react'
import Cabecalho from "./components/cabecalho"

export default function App() {
  return (
    <>
      <div className="Container">
        <Cabecalho/>

        <section>
          <p><a href='/'>Home Page</a></p>
          <button onClick={()=> alert('Hello World')}>Click me</button>
        </section>
        <footer>
          <p> &copy; 2021 </p>
        </footer>
      </div>
    </>
  )
}
