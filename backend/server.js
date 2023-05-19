const express=require("express");
const notes = require("./data/notes");
const { json } = require("express/lib/response");


const app=express();
app.get('/',(req,res)=>{
    res.send("api is running");
})

app.get('/api/notes',(req,res)=>{
    res.send(notes);
});

app.get('/api/notes/:id',(req,res)=>{
    const note=notes.find((n)=>n._id===req.params.id);
    res.send(note);
})
app.listen(5000,console.log("server started"));