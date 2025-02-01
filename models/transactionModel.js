import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    userId: {
        type: String,
        requried: true
    },
    plan: {
        type: String,
        requried: true
    },
    amount: {
        type: Number,
        requried: true
    },
    credits:{
        type: Number,
        requried: true
    },
    payment:{
        type: Boolean,
        default: false
    },
    date:{
        type: Number
    }
    
})

const transactionModel = mongoose.models.transaction || mongoose.model("transaction", transactionSchema)

export default transactionModel
