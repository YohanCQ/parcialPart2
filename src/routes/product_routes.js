const express = require('express');
const product_Routes = require('../models/product')
const route = express.Router();


route.post('/product',(req, res)=>{
    const product = product_Routes(req.body)
    product
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

route.get('/products', (req,res)=>{
    product_Routes
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

route.get('/products/:id', (req,res)=>{
    const {id} = req.params
    product_Routes
        .findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

route.delete('/products/:id', (req,res)=>{
    const {id} = req.params
    product_Routes
        .remove({_id: id})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

route.put('/products/:id', (req,res)=>{
    const {id} = req.params
    const {name, price, image} = req.body
    product_Routes
        .updateOne({_id: id},{$set:{name, price, image}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

module.exports = route