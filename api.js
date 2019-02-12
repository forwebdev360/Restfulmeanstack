//Import express, express router, our customers schema
const express = require('express');
const router = express.Router();
const Customers = require('../appmodels/customers');

//Shows a list of apps data in json format
router.get('/customers', function(req, res, showerror){
    Customers.find({}).then(function(customers){
        res.send(customers).catch(showerror);
    });
});

//Create a customer in the database
router.post('/customers', function(req, res, showerror){
  /*  var customers = new Customers(req.body);
    customers.save();
    */
   Customers.create(req.body).then(function(customers){
    res.send(customers).catch(showerror);
   });
});

//Update a customer in our db using the id
router.put('/customers/:id', function(req, res, showerror){
    Customers.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Customers.findOne({_id: req.params.id}).then(function(customers){
            res.send(customers);
        });
    });
});

//Delete a customer from our database 
router.delete('/customers/:id', function(req, res, showerror){
    Customers.findByIdAndRemove({_id: req.params.id}).then(function(customers){
        res.send(customers);
    });
});

//Exporting our router module 
module.exports = router;