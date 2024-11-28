import React from 'react';
import {Link} from "react-router";

const Navbar = () => {
    return (
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/phones"}>Phones</Link>
            </li>
        </ul>
    );
};

export default Navbar;