import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import MainLayout from "./components/MainLayout.jsx";
import Phones from "./components/Phones.jsx";
import SinglePhone from "./components/SinglePhone.jsx";

const router = new createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        children:[
            {
                path:"/phones",
                element:<Phones/>,
                loader: ()=>fetch("http://localhost:3344/phones/")

            },
            {
              path: "/phone/:id",
              element:<SinglePhone/>,
                loader: ({params})=>fetch(`http://localhost:3344/phones/${params.id}`)
            }
        ]
    }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
