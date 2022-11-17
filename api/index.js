import mongo from './mongo';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = { path: '/api', handler:app}

app.post('/about', async (req, res) =>{
    try {
    const query = await mongo.db('TwProjectDb').collection('Users')
    .find({
        email: req.body.email,
        password: req.body.pw
    }).toArray();
    res.json({data :JSON.parse(JSON.stringify(query))});
    } catch  { }
})

app.post('/score', async (req, res) =>{
    try {
    const today = new Date();

    const query = await mongo.db('TwProjectDb').collection('Punteggi')
    .insertOne({
        email: req.body.email,
        name: req.body.user,
        location: req.body.state,
        score: req.body.score,
        dt: `${today.getMonth()}/${today.getDate()}/${today.getFullYear()}` ,
    }).toArray();
    res.json({data :JSON.parse(JSON.stringify(query))});
    } catch  { }
})