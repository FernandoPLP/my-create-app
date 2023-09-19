import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


//BLOCO DE ROTAS
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import EditarProdutos from './routes/editarProdutos.jsx';
import Home from './routes/home.jsx';
import Error404 from './routes/error404.jsx';
import Produtos from './routes/produtos.jsx';

const router = createBrowserRouter([
  {path: "/", element: <App/> , errorElement: <Error404/>,
    children:[
      {path: "/", element:<Home/>},
      {path: "/produtos", element:<Produtos/>},
      {path: "/editar/produtos/:id", element:<EditarProdutos/>},
      
    ]
  }
 ]);

 ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)