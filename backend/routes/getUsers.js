const express=require("express");
const router=express.Router();

const User=require("../models/User");
const adminAuth=require("../middleware/adminAuth");

router.get("/",adminAuth,async(req,res)=>{

    try{

        const users=await User.find().select("-password");

        res.status(200).json(users);

    }
    catch(err){

        res.status(500).json({
            message:"Server Error"
        });

    }

});

module.exports=router;