const express = require("express")
const cors = require("cors")
const app = express()
const port = 3544

app.use(cors())
app.use(express.json())

const user = [
    {id:1, name:"abdallah", age:24, email:"abdallah@gmail.com"},
    {id:2, name:"abdur rahman", age:21, email: "abdurRahman@gmail.com"},
    {id:3, name:"anabia", age:0.4, email: "anabia@gmail.com"}
]

app.get("/", (req,res)=>{
    res.send("User management system is building")
})

app.get("/user", (req, res)=>{
    res.send(user)
})

app.post("/user", (req, res)=>{
    console.log("api hitting")
    console.log(req.body)
    const newUser = req.body
    newUser.id = user.length + 1
    user.push(newUser)
    res.send(newUser)
})

app.listen(port, ()=>{
    console.log(`current project is running port:${port}`)
})