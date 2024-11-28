import React from 'react';
import {Link, useLoaderData} from "react-router";
import SinglePhone from "./SinglePhone.jsx";

const Phones = () => {
    const fetchData = useLoaderData();
    console.log(fetchData)
    return (
        <div>
            Phones: ({fetchData.length})
            {
                fetchData.map(data => <li key={data.id}><Link to={`/phone/${data.id}`}>{data.name}</Link></li>)
            }
        </div>
    );
};

export default Phones;