const express = require('express');
const port = 8000;

const app = express();

app.get('/home', function(req, res) {
    res.send('<h1>YO supp!!</h1>');
    // console.log(req);
    //cheking the push 
    //checking push 2 
});

app.listen(port, function(err) {
    if (err) {
        console.log('Error in running the server', err);
    }
    console.log("Yay! its Alive!!", port);
});