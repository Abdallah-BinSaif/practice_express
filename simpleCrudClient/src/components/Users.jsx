import React, {useState} from 'react';
import {Link, useLoaderData} from "react-router";

const Users = () => {
    const [users, setUsers]=useState(useLoaderData())

    console.log(users)
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`,{
            method:"DELETE"
        })
            .then(res=> res.json())
            .then(data=>console.log(data))
    }

    return (
        <div>
            <p>Users: {users?.length}</p>
            {
                users?.map(user => <div key={user._id}>
                    <p className={"text-3xl m-3"}>Name: {user.name}
                        <Link to={`/update/${user._id}`}>
                            <button className={"btn mx-3"}>Update</button>
                        </Link>
                        <button
                            onClick={()=>handleDelete(user._id)}
                            className={"btn"}>X</button></p>
                </div>)
            }
        </div>
    );
};

export default Users;