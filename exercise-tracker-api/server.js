const express = require('express');
const cors = require('cors')
require('dotenv').config();

const mongoose = require('mongoose') //mongoose connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDb databse connected")
})

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})