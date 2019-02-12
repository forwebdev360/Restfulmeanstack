//Import Mongoose, mongoose.schema and create new variable CustomersSchema
//So, we could add and tell our db what type of the data to be entered inside 
//the db > collections > columns and rows.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating a new schema
const CustomersSchema = new Schema({
    name:{
        type: String
    }
});

//Assigning the schema and data to customers variable or const.
const Customers = mongoose.model('customers', CustomersSchema);

//Exporting our db schema or data to be used in the entire servers of our app
module.exports = Customers;