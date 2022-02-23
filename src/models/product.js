const mongoose = require('mongoose')
const product_routes = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    image:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('product_document', product_routes)