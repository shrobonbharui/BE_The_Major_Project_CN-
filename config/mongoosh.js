const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://userp:427292sb@cluster1.lqkqhwy.mongodb.net/codeial_developmen');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;