const express = require('express');
const Listing = require('../models/listing');
const router = express.Router();

router.get('/',async(req,res)=>{
    const listings = await Listing.find();
    res.send(listings);
});


router.post('/',async(req,res)=>{
    const listings = await Listing.find();
    res.send(listings);
});



module.exports = router;
