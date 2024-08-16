const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})


const dataModel = mongoose.model("registerData", registerSchema);
module.exports = dataModel
