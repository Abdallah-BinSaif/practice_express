const express = require("express")
const phones = require("./phones.json")
const cors = require("cors")
const app = express()
const port = 3344

app.use(cors())

app.get("/", (req,res)=>{
    res.send("Hello World,the new world")
})

app.get("/phones", (req, res)=>{
    res.send(phones)
})

app.get("/phones/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    console.log("i need data for :", id)
    const phone = phones.find(phone=>phone.id === id) || {};
    res.send(phone);
})

app.listen(port,()=>{
    console.log(`Example project is running on port: ${port}`)
})
