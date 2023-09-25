import { useEffect, useState } from "react";
import { ListaProdutosExterna } from "../components/ListaProdutosExterna";
import { Link } from "react-router-dom";


export default function Produtos() {

    document.title = "Lista de Produtos";

    const [listaProdutosLocal, setListaProdutosLocal] = useState([{}]);
    
    //Estrutura que recebe a lista de produtos externa e repassa para uma lista local.
    useEffect(()=>{
      setListaProdutosLocal(ListaProdutosExterna);
    },[]);


    const removerItem = (id) => {
        const novaLista = listaProdutosLocal.filter((item) => item.id !== id);
        setListaProdutosLocal(novaLista);
      };


      
  return (
    <div>
      <h1>Lista de Produtos</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        
                        <th>ID</th>
                        <th>NOME</th>
                        <th>DESCRIÇÃO</th>
                        <th>PREÇO</th>
                        <th>EDITAR</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    listaProdutosLocal.map((item, indice)=>(
                        <tr key={indice}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.desc}</td>
                            <td>{item.preco}</td>
                            <td><Link to={`/editar/produtos/${item.id}`}>Editar</Link></td>
                            <td><button onClick={() => removerItem(item.id)}>Remover</button></td>
                        </tr>
                    ))
                   }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5}>PRODUTOS INFORMATICOS - QTD = </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
  )
}