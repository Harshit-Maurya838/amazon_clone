const express = require('express');
const Listing = require('../models/listing');
const router = express.Router();

// Getting all data
router.get('/',async(req,res)=>{
    const listings = await Listing.find();
    res.render('./listings/home.ejs',{listings});
});

// Getting data by id
router.get('/:id',async(req,res)=>{
    const id = req.params.id;
    const listing = await Listing.findById(id);
    res.send(listing);
});

// Adding data
router.post('/',async(req,res)=>{
    const {listing} = req.body;
    const newListing = new Listing(listing);
    await newListing.save();
    res.send(newListing);
});


// Updating data
router.put('/:id',async(req,res)=>{
    const id = req.params.id;
    const {listing} = req.body;
    listing.updatedAt = new Date();
    console.log(listing);
    await Listing.findByIdAndUpdate(id, listing);
    const upadetedListing = await Listing.findById(id);
    res.send(upadetedListing);
});

// Deleting data
router.delete('/:id',async(req,res)=>{
    const id = req.params.id;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.send({status: 200, message: 'Deleted successfully'});
});



module.exports = router;
