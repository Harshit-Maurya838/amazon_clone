const express = require('express');
const mongoose = require('mongoose');
const Listing = require('./models/listing');
const ejsMate = require('ejs-mate');
const path = require('path');
const methodOverride = require('method-override');
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
app.use(express.static(path.join(__dirname,'public')));
app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(methodOverride('_method'));

// parsing the body
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.use('/listings', listingRouter);


app.get('/',(req,res)=>{
    res.render('layouts/boilerplate');
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
