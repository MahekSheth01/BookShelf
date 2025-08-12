const express= require("express");
const databaseConnection=require("./database");

//Database Connection
databaseConnection();

const app=express();

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.listen(8000,()=>{
    console.log("Port 8000 is listening");
})