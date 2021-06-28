const express = require('express');
const app = express();
const port = 8000;

const path = require('path');

//setup ejs views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//setup layouts
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
//setup assets
app.use(express.static('./assets'));
//route
app.use('/', require('./routes/index'));
//db
const db = require('./config/mongoose');
app.listen(port, function(err) {
    if (err) {
        console.log('Error in running the server', err);
    }
    console.log("Yay! its Alive!!", port);
});