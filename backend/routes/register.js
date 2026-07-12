const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt=require("bcrypt");
router.post("/", async (req, res) => {
    try {
        const existinguser=await User.findOne({
            email: req.body.email
        })
        if(existinguser){
            return res.status(400).json({
                message: "User already registered! Try using a different email."
            })
        }
        const hashedpswd=await bcrypt.hash(req.body.password, 10);
        const user = new User({
            ...req.body,
            password: hashedpswd
        });
        await user.save();
        res.json({
            message: "Registration Successful!"
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
});
module.exports=router;