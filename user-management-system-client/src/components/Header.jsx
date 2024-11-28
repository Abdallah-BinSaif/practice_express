import React from 'react';
import {Link} from "react-router";

const Header = () => {
    return (
        <div>
            <ul className={"flex justify-center items-center gap-5 *:underline"}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/users"}>Users</Link></li>
            </ul>
        </div>
    );
};

export default Header;