const mongoose = require('mongoose')
const client_routes = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    lastname:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    contact:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('client_document', client_routes)