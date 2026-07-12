require("dotenv").config()
const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/seclogin");

app.use(cors())
app.use(express.json())
app.use("/register",registerRoute)
app.use("/login", loginRoute);
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected");
    app.listen(5000,()=>{
        console.log("Server Started")
    });
})
.catch(err=>{
    console.log(err);
});
app.get("/",(req,res)=>{
    res.send("Server is running!")
})
