const express = require('express')
const mongoose = require('mongoose');
require("dotenv").config();
const clientRoute = require("./routes/client_routes");
const productRoute = require("./routes/product_routes");

const app = express()
const port = process.env.PORT || 3000

app.listen(port, ()=>console.log('server listening on port', port))

app.use(express.json());
app.use("/api", clientRoute);
app.use("/api", productRoute);

//routes
app.get('/',(req,res)=>{
    res.send('Bienvenido a la API');
});

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(()=>console.log("We are you connected to MongoDB"))
    .catch((error)=>console.log(error));