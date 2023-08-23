const express = require('express');
const app = express();
const port = 8080;

// USE EXPRESS ROUTES
app.use('/', require('./routes/index'));


app.listen(port, function(err){
    if(err){
        console.log(`Error in server: ${err}`)
    };
    
    console.log(`running in server: ${port}`)
});