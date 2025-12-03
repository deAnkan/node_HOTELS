const express = require('express');
const Menuitem = require('../Models/Menuitem');
const router = express.Router();

// POST route to add a person
router.post('/', async (req, res) => {
    try{
        const data = req.body;//assuming the request body contains the person data.
    
        // create a new person model using the mongoose model
        const newMenu = new Menuitem(data);
    
        // save the new person to the database
        const savedMenu = await newMenu.save();
        console.log('data saved successfully');
        res.status(201).json(savedMenu);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }

});  

// GET method the get the person
router.get('/',async (req,res)=>{
    try{
        const data = await Menuitem.find();
        console.log('Data Fetched Successfully');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.get('/:tasteType', async (req,res)=>{
    try{
        const tasteType = req.params.tasteType;
        if(tasteType=='sweet' || tasteType=='spicy' || tasteType=='sour' || tasteType=='bitter' || tasteType=='salty'){
            const response = await Menuitem.find({taste: tasteType});
            console.log('Data Fetched Successfully');
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid work type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

// comment added
module.exports = router;