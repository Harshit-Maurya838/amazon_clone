const express = require('express');
const mongoose = require('mongoose');
const Listing = require('./models/listing');
const app = express();
require('dotenv').config();

const listingRouter = require('./router/listing');


port = process.env.PORT || 8080;

// Connecting to MongoDB
async function connectToMongo(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
    }catch(err){
        console.log('Error in connecting to MongoDB',err);
    }
}
connectToMongo();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.use('/listings', listingRouter);


app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
