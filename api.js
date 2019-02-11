const express = require('express');
const router = express.Router();
const Customers = require('../appmodels/customers');

router.get('/customers', function(req, res, showerror){
    Customers.find({}).then(function(customers){
        res.send(customers).catch(showerror);
    });
});
router.post('/customers', function(req, res, showerror){
  /*  var customers = new Customers(req.body);
    customers.save();
    */
   Customers.create(req.body).then(function(customers){
    res.send(customers).catch(showerror);
   });
});

router.put('/customers/:id', function(req, res, showerror){
    Customers.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Customers.findOne({_id: req.params.id}).then(function(customers){
            res.send(customers);
        });
    });
});
router.delete('/customers/:id', function(req, res, showerror){
    Customers.findByIdAndRemove({_id: req.params.id}).then(function(customers){
        res.send(customers);
    });
});

module.exports = router;