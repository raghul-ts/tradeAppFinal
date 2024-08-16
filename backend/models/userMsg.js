const mongoose = require('mongoose');

const msgSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    num: Number,
    message: String
})


const messageModel = mongoose.model("message", msgSchema);
module.exports = messageModel

