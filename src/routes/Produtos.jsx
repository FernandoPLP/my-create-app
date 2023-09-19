import { useEffect, useState } from "react";
import { ListaProdutosExterna } from "../components/ListaProdutosExterna";

export default function Produtos() {

    document.title = "Lista de Produtos";

    const [listaProdutosLocal, setListaProdutosLocal] = useState([{}]);
    
    //Estrutura que recebe a lista de produtos externa e repassa para uma lista local.
    useEffect(()=>{
      setListaProdutosLocal(ListaProdutosExterna);
    },[]);

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
                    </tr>
                </thead>
                <tbody>
                    <th></th>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>PRODUTOS INFORMATICOS - QTD = </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
  )
}