const express = require('express');
const client_Routes = require('../models/client')
const route = express.Router();


route.post('/client',(req, res)=>{
    const client = client_Routes(req.body)
    client
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

route.get('/clients', (req,res)=>{
    client_Routes
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

route.get('/clients/:id', (req,res)=>{
    const {id} = req.params
    client_Routes
        .findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

route.delete('/clients/:id', (req,res)=>{
    const {id} = req.params
    client_Routes
        .remove({_id: id})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

route.put('/clients/:id', (req,res)=>{
    const {id} = req.params
    const {name, lastname, address, contact} = req.body
    client_Routes
        .updateOne({_id: id},{$set:{name, lastname, address, contact}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

module.exports = route