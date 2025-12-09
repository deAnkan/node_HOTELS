const express = require('express');
const router = express.Router();
const Person = require('../Models/person');

// POST route to add a person
router.post('/signup', async (req, res) => {
    try{
        const data = req.body;//assuming the request body contains the person data.
    
        // create a new person model using the mongoose model
        const newPerson = new Person(data);
    
        // save the new person to the database
        const savedPerson = await newPerson.save();
        console.log('data saved successfully');
        res.status(201).json(savedPerson);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }

});  

// GET method the get the person
router.get('/',async (req,res)=>{
    try{
        const data = await Person.find();
        console.log('Data Fetched Successfully');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.get('/:workType', async (req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType=='chef' || workType=='waiter' || workType=='manager' || workType=='cleaner'){
            const response = await Person.find({work: workType});
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

router.put('/:id', async (req, res)=>{
    try{
        const personId = req.params.id; //Extract the id from the URL parameter
        const updatedPersonData = req.body; //updated data for the person

        const response = await Person.findByIdAndUpdate(
            personId, 
            updatedPersonData, {
            new : true , //to return the updated document
            runValidators: true //to run schema validators on the updated data
        });

        if(!response){
                return res.status(404).json({error: 'Person not found'});
            }

        console.log('Data Updated Successfully');
            res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Person not found'});
    }
});

router.delete('/:id', async (req, res) =>{
    try{
        const personId = req.params.id; //Extract the id from the URL parameter
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('Data Deleted Successfully');
        res.status(200).json({message: 'Person deleted successfully'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

module.exports = router;
