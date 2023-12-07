const express = require('express');
const cors = require('cors')
require('dotenv').config();

const mongoose = require('mongoose') //mongoose connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDb database connected")
})

const app = express();
const port = process.env.PORT || 5000
const exercisesRouter = require('./routes/exercises') // add routing files
const usersRouter = require('./routes/users')


app.use(cors());
app.use(express.json());
app.use('/exercises',exercisesRouter);// add routing files
app.use('/users',usersRouter)


app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})