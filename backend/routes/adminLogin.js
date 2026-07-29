const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router();

router.post("/", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(404).json({
                message: "Admin not found"
            });

        }

        if (user.role !== "admin") {

            return res.status(403).json({
                message: "Access Denied"
            });

        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {

            return res.status(401).json({
                message: "Invalid Password"
            });

        }

        const token = jwt.sign(

            {

                id: user._id,
                email: user.email,
                role: user.role

            },

            process.env.JWT_SECRET,

            {

                expiresIn: "1h"

            }

        );

        res.json({

            message: "Admin Login Successful",
            token

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