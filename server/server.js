const mongoose = require('mongoose')
const express = require('express')
const app = express();
require("dotenv").config()

// connection  DB
mongoose.connect(process.env.URL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err)=>{
    err? console.log(err.toString()) : console.log("DB conected")
})

// routes


// running server
const port = process.env.PORT
app.listen(port, ()=>{
console.log(`server is active on ${port}`)
})