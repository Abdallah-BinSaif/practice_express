import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";
import Users from "./components/Users.jsx";


const router = new createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/users",
                element: <Users></Users>,
                loader: ()=> fetch("http://localhost:3544/user")
            }
        ]
    },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
