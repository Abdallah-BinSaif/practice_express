import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import {Outlet} from "react-router";

function App() {

  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default App
