import React from 'react';
import {useLoaderData} from "react-router";

const SinglePhone = () => {
    const phone = useLoaderData();
    console.log(phone)
    return (
        <div>
            <h1>Phone: ({phone.id})</h1>
            <p>Name: {phone.name}</p>
            <img src={phone.image}/>
        </div>
    );
};

export default SinglePhone;