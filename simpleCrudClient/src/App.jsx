
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
                }
            })
    }

  return (
    <>
      <h1>Simple Crud</h1>
        <form onSubmit={handleSubmit}>
            <input className={"input input-accent m-2"} placeholder={"Name"} type={"text"} name={"name"}/>
            <input className={"input input-accent m-2"} placeholder={"Email"} type={"email"} name={"email"}/>
            <input className={"input input-accent m-2"} type={"submit"}/>
        </form>
    </>
  )
}

export default App
