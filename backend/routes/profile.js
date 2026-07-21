const express = require("express");
const auth = require("../middleware/auth");
const User = require("../models/user");

const router = express.Router();

router.put("/", auth, async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        ).select("-password");
        res.json({
            message: "Profile Updated Successfully",
            user: updatedUser
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: "Server Error"
        });
    }
});
router.delete("/", auth, async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.user.id);
        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.json({
            message: "Account Deleted Successfully"
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Server Error"
        });
    }
});

module.exports = router;