// Models connect to DB
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({ 
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

 });

 module.exports = mongoose.model("user", UserSchema);