const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const port = 3000;

const app = express();

app.use(express.static(__dirname))

app.use(express.urlencoded({extended: true}))

mongoose.connect('mongodb://127.0.0.1:27017/mobiles')   // 27017 Change your Unique MongoDB Database, basit is a database

const db = mongoose.connection;

db.once('open',()=>{

    console.log("MongoDB Connected....")
})




app.listen(port,()=>{

    console.log("Server Started.....")
})
