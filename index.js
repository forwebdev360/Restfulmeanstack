// Import express in our app
const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

// setting up the express app
const app = express();

// connect to mongodb mongoose
mongoose.connect('mongodb://localhost/customers');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//Starting our routes for our app
app.use('/api',require('./routes/api'));

app.use(function(err, req, res, showerror){
 res.status(420).send({error: err.message});
});

 // Now we should listen for requests
app.listen(process.env.port || 2000, function(){
  console.log('now listening for requests');
});
