require("dotenv").config()
const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/seclogin");
const dashboardRoute=require("./routes/dashboard")
const profileRoute = require("./routes/profile");
const adminLogin = require("./routes/adminLogin");
const getUsers=require("./routes/getUsers");
const deleteUser=require("./routes/deleteUser");

app.use(cors())
app.use(express.json())
app.use("/register",registerRoute)
app.use("/login", loginRoute);
app.use("/dashboard", dashboardRoute);
app.use("/profile", profileRoute);
app.use("/admin/login", adminLogin);
app.use("/admin/users",getUsers);
app.use("/admin/delete",deleteUser);

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
