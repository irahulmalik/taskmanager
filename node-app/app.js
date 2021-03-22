const express = require('express')
const app = express()
// routes handler



//list routes
app.get('/lists',(req,res) =>{
    // res.send("hello world")
    // return array of all lists in db
})
app.listen(3000,()=>{
    console.log("server is running")
})  