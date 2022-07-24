const mongoose = require("mongoose");
const url = "mongodb+srv://user:usersfortheapp@mern-backend.muw5h.mongodb.net/mern-backend?retryWrites=true&w=majority";

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection is successful..");
}).catch((error)=>{
    console.log(error);
})