const express = require('express');
const app = express();
const port = 8080;
const expresslayouts = require('express-ejs-layouts');


app.use(express.static('assets'));
app.use(expresslayouts);

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


// USE EXPRESS ROUTES
app.use('/', require('./routes/index'));

// set up view engine
app.set('view engine', 'ejs');
app.set('views', './views')

app.listen(port, function(err){
    if(err){
        console.log(`Error in server: ${err}`)
    };
    
    console.log(`running in server: ${port}`)
});