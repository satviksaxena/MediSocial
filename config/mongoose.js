const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/admin1');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error in mongodb'));
db.once('open', function() {
    console.log('successfully connected to db');
})