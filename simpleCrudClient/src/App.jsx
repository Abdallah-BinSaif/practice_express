
import './App.css'

function App() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name)
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify({name,email})

        })
            .then(res=> res.json())
            .then(data=> {
                console.log(data)
                if(data.insertedId){
                    alert("added successfully")
                    form.reset()
                }
            })
    }

  return (
    <>
      <h1>Simple Crud</h1>
        <form onSubmit={handleSubmit}>
            <input className={"input input-accent m-2"} placeholder={"Name"} type={"text"} name={"name"}/>
            <br/>
            <input className={"input input-accent m-2"} placeholder={"Email"} type={"email"} name={"email"}/>
            <br/>
            <input className={"input input-accent m-2"} type={"submit"} value={"Add User"}/>
        </form>
    </>
  )
}

export default App
