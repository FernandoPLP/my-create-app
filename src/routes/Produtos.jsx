import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Produtos.module.css";
import {AiFillEdit as Editar} from "react-icons/ai"
import {MdDeleteForever as Del} from "react-icons/md"
import ModalAction from "../components/modalAction/modalAction";

export default function Produtos() {

    document.title = "Lista de Produtos";

    const [listaProdutosLocal, setListaProdutosLocal] = useState([{}]);

    //Estrutura que recebe a lista de produtos externa e repassa para uma lista local.
    useEffect(()=>{
      fetch("http://localhost:5000/produtos")
      .then((response)=> response.json())
      .then((response)=> setListaProdutosLocal(response))
      .catch(error=> console.log(error));
      
    },[]);

    const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ModalAction open={open} setClose={setOpen}/>

      <button onClick={()=> setOpen(true)}>OPEN-MODAL</button>

          <div>
            <table className={styles.tblEstilo}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NOME</th>
                  <th>DESCRIÇÃO</th>
                  <th>PREÇO</th>
                  <th>EDITAR / EXCLUIR</th>
                </tr>
              </thead>
              <tbody>
                {
                  listaProdutosLocal.map((item,indice)=>(
                    <tr key={indice}>
                      <td>{item.id}</td>
                      <td>{item.nome}</td>
                      <td>{item.desc}</td>
                      <td>{item.preco}</td>
                      <td> <Link to={`/editar/produtos/${item.id}`}><Editar/></Link>  |  <Link to={`/excluir/produtos/${item.id}`}><Del/></Link> </td>
                    </tr>
                  ))
                }
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={5}>PRODUTOS INFORMÁTICOS - QTD = {listaProdutosLocal.length}</td>
                </tr>
              </tfoot>
            </table>
          </div>

    </div>
  )
}