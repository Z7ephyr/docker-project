const express= require("express");
const db = require("./db")
const PORT=3000;
const HOST="0.0.0.0"

const app=express()

app.use(express.json());
app.get("/", (req,res) => {
    res.send("Bonjour");
});


app.get("/create", async(req,res)=>  {
    try{
         const clients = await db.query("CREATE TABLE clients(id SERIAL PRIMARY KEY,name VARCHAR(100),firstname VARCHAR(100))");
         res.status(200).send({message :"table crée"});
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
});
app.listen(PORT,HOST, () =>  {
    console.log("Exécution sur le port"+PORT)
});

app.get("/add", async(req,res)=>  {
    try{
        const numero= Math.floor(Math.random() * 100-1);
         const clients = await db.query("INSERT INTO clients(name,firstname) VALUES ('nom'"+numero+"', 'prenom"+numero +"')");
         res.status(200).send({message :"client crée"});
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}); 