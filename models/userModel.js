import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true
    },
    email: {
        type: String,
        requried: true,
        unique: true
    },
    password: {
        type: String,
        requried: true
    },
    creditBalance:{
        type: Number,
        default: 5
    }
})

const userModel = mongoose.models.user || mongoose.model("user", userSchema)

export default userModel
