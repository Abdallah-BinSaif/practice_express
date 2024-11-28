import React, {useEffect, useState} from 'react';
import {useLoaderData} from "react-router";

const Users = () => {
    const [users, setUsers] = useState([]);
    const fetchData = useLoaderData();
    useEffect(() => {

        setUsers(fetchData)

    }, [fetchData]);

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("name")
        const email = form.get("email")
        console.log({name, email})

        fetch("http://localhost:3544/user",{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({name, email})
        }).then(res=> res.json()).then(data => {
            console.log(data)
            setUsers([...users, data])
            // e.target.reset()
        })
    }

    return (
        <div>
            Users: ({users.length})
            {
                users.map(user => <li key={user.id}>{user.name} Email: {user.email}</li>)
            }

            <br/>
            <br/>
            <br/>
            <form onSubmit={handleSubmit}>
                <input type={"text"} name={"name"} className={"border-4"}/>
                <br/>
                <br/>
                <input type={"email"} name={"email"} className={"border-4"}/>
                <br/>
                <br/>
                <input type={"submit"} value={"add to server"} className={"border-4"}/>
            </form>
        </div>
    );
};

export default Users;