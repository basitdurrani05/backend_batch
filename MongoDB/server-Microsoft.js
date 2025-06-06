const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const port = 3000;

const app = express();


app.use(express.static(__dirname));
app.use(express.urlencoded({extended:true}))


// Connect Database

mongoose.connect('mongodb://127.0.0.1:27017/himanshu')   // basit replace your_database_name


const db = mongoose.connection;


db.once('open',()=>{

    console.log("MongoDB Connected...")
})


const userSchema = new mongoose.Schema({

    name:String,
    password:String

})



const Users  = mongoose.model("data",userSchema)





// node / express

app.get('/', (req,res)=>{

    res.sendFile(path.join(__dirname,'form.html'))


})


app.post('/post', async (req,res)=>{

    const {name} = req.body;
    const {password} = req.body;

    const user = new Users({name});
    const user2 = new Users({password})

    await user.save();
    console.log(user);
    console.log(user2)
    res.send("From Submitted....")
})









app.listen(port,()=>{

    console.log("Server Has Benn Started")
});

