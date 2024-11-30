const express = require("express")
const cors = require("cors")
require('dotenv').config()
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

console.log(process.env.DB_USER)
console.log(process.env.DB_PASS)


const { MongoClient, ServerApiVersion, ObjectId} = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.orio6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const userCollection = client.db("UsersData").collection("users")

        app.get("/users", async (req,res)=>{
            const cursor = userCollection.find()
            const result = await cursor.toArray();
            res.send(result)
        })
        app.get("/users/:id",async (req,res)=>{
            const id = req.params.id;
            console.log(id);
            const query = {_id: new ObjectId(id)}
            const result = await userCollection.findOne(query)
            res.send(result)

        })

        app.post("/users",async (req, res)=>{
            const user = req.body;
            console.log(user)
            const result = await userCollection.insertOne(user);
            res.send(result);
        })

        app.put("/users/:id", async (req, res)=>{
            const id = req.params.id;
            const user= req.body;
            console.log(user)
            const filter = {_id: new ObjectId(id)}
            console.log(filter)
            const options = {upsert: true}
            console.log(options)
            const updateUser = {
                $set: {
                    name: user.name,
                    email: user.email,
                }
            }
            console.log(updateUser)

            const result = await userCollection.updateOne(filter,updateUser, options)
            res.send(result)
        })

        app.delete("/users/:id",async (req, res)=>{
            const id = req.params.id;
            console.log(`going to delete: ${id}`)
            const query = {_id: new ObjectId(id)};
            console.log("query:",query)
            const result = await userCollection.deleteOne(query);
            console.log("result:",result)
            res.send(result);
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get("/", (req, res)=>{
    res.send("Simple crud is running")
})

app.listen(port, ()=>{
    console.log(`simple crud is running on port: ${port}`)
})