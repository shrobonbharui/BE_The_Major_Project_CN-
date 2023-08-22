const express = require('express');
const app = express();
const port = 8080;

app.listen(port, function(err){
    if(err){
        console.log(`Error in server: ${err}`)
    };
    
    console.log(`running in server: ${port}`)
});