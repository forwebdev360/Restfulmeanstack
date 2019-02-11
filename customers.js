const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating a new schema
const CustomersSchema = new Schema({
    name:{
        type: String
    }
});

const Customers = mongoose.model('customers', CustomersSchema);

module.exports = Customers;