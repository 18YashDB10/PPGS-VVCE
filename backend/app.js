const express = require('express');
const app = express();

const port = 8080;

app.get("/",(req,res)=>{
    res.send("Root working fine");
})

app.listen(port,(req,res)=>{
    console.log("Listening to port "+port);
})