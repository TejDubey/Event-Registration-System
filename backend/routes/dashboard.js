const express=require("express");
const auth=require("../middleware/auth")
const user=require("../models/user")
const router=express.Router();

router.get("/",auth,async(req,res)=>{
    try{
        const user = await user.findById(req.user.id).select("-password");
        res.json(user);
    }
    catch(err){
        res.status(500).json({
            message:"Server Error"
        });
    }
});

module.exports = router;