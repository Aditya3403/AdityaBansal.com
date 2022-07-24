const express = require("express");
const app = express();
const User = require("./Models/users.js");
require("./db/connection");

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to home page!!")
})
app.post("/signup",async(req,res)=>{
    try {
        
        const userData = new User(req.body);
        await userData.save();
        res.redirect("/");
    
    } catch (error) {
        console.log(error);
    }
   
})

app.post("/login",async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const userCred = await User.findOne({email:email});

    if (userCred.password==password) {
        res.redirect("/");
        
    }else{
        res.redirect("/contact");
    }
})


app.listen(4000,()=>{
    console.log("listening....");
})