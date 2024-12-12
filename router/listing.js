const express = require('express');
const Listing = require('../models/listing');
const router = express.Router();

router.get('/',async(req,res)=>{
    const listings = await Listing.find();
    res.send(listings);
});


router.post('/:id',async(req,res)=>{
    const id = req.params.id;
    const listings = await Listing.find();
});



module.exports = router;
