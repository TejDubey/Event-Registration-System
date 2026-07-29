const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name: String,
    email:{
        type: String,
        unique: true
    },
    password: String,
    gender: String,
    event: String,
    interests: [String],
    excitement: Number,
    reason: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
})
module.exports = mongoose.models.User || mongoose.model("User", userSchema);