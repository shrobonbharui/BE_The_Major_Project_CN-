const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sb4300:427292sb@cluster0.keplad3.mongodb.net/codeial_developmen');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;