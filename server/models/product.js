const mongoose = require('mongoose')
const Schema =  mongoose.Schema
const productSchema = new Schema({
    title: {type: String},
    price: {type: Number},
    description: {type: String}
})

mongoose.model('product', productSchema);
