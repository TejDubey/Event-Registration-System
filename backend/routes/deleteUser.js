const express=require("express");
const router=express.Router();

const User=require("../models/User");
const adminAuth=require("../middleware/adminAuth");

router.delete("/:id",adminAuth,async(req,res)=>{

    try{

        const user=await User.findById(req.params.id);

        if(!user){

            return res.status(404).json({
                message:"User not found"
            });

        }

        await User.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message:"User deleted successfully"
        });

    }
    catch(err){

        console.log(err);

        res.status(500).json({
            message:"Server Error"
        });

    }

});

module.exports=router;