import React, {useState} from 'react';
import {useLoaderData} from "react-router";

const Update = () => {
    const [user, setUser] = useState(useLoaderData())

    const handleUpdateSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const updateUser = {name, email}
        console.log(updateUser)

        fetch(`http://localhost:5000/users/${user._id}`,{
            method: "PUT",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(updateUser)
        })
            .then(res=>res.json())
            .then(data=> {
                console.log(data)
                // setUser()
            })
    }

    return (
        <div>
            <h5 className={"text-5xl mb-12"}>Update User Data</h5>
            <form onSubmit={handleUpdateSubmit}>
                <input type={"text"} name={"name"} defaultValue={user.name} className={"input input-accent"}/>
                <br/>
                <br/>
                <input type={"email"} name={"email"} defaultValue={user.email} className={"input input-accent"}/>
                <br/>
                <br/>
                <input type={"submit"} value={"Update"} className={"input input-accent"}/>
            </form>
        </div>
    );
};

export default Update;