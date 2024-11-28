import React from 'react';
import Navbar from "./Navbar.jsx";
import {Outlet} from "react-router";
import Home from "./Home.jsx";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;