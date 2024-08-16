const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const DataModel = require('./models/data.js')
const MsgModel = require('./models/userMsg.js');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://raghults:raghul21483@matchme.opjr60u.mongodb.net/?retryWrites=true&w=majority&appName=matchMe')

app.post('/contact', (req, res) => {
    MsgModel.create(req.body)
})

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    DataModel.findOne({email: email})
    .then(user => {
        if (user) {
            if (user.password === password) {
                res.json("yes");
            } else {
                res.json("wrong");
            }
        } else {
            res.json("no user");
        }
    })
})

app.post('/signup', (req, res) => {
    DataModel.create(req.body)
    .then(data => res.json(data))
    .catch(error => res.json(error));
})


app.listen(3001, () => {
    console.log('server is running');
})