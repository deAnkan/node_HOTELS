const express = require('express');
const app = express();
const db = require('./db');
const Person = require('./Models/person');
const Menuitem = require('./Models/Menuitem');
require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


// const bodyParser = require('body-parser');
// app.use(bodyParser.json()); //or we can use [app.use(express.json());]
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Middleware Function
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next(); //Move on to the next phase
}
app.use(logRequest);

// Making the virfication function using passport
app.use(new LocalStrategy(async(USERNAME, password, done) => {
    // Authentication logic here
    try{
        console.log('Recieved credentials:', USERNAME, password);
        
    }catch(err){

    }
}));    

app.get('/', (req,res) =>{
    res.send('welcome to my hotel....how can i help you')
})

// POST route to add a person
app.post('/person', async (req, res) => {
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
app.get('/person',async (req,res)=>{
    try{
        const data = await Person.find();
        console.log('Data Fetched Successfully');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

// POST method to add menu item

app.post('/menu', async (req, res) => {
    try{
        const data = req.body;//assuming the request body contains the person data.
    
        // create a new person model using the mongoose model
        const newMenu = new Menuitem(data);
    
        // save the new person to the database
        const response = await newMenu.save();
        console.log('Data Saved Successfully');
        res.status(201).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }

});  

// GET method to get the menu items
app.get('/menu',async (req,res)=>{
    try{
        const data = await Menuitem.find();
        console.log('Data Fetched Successfully');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

app.get('/person/:workType', async (req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType=='chef' || workType=='waiter' || workType=='manager' || workType=='cleaner' || workType=='assistant manager'){
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
})


// Import the router file
const personRoutes = require('./routes/personRoutes');
// Use the router for person-related routes 
app.use('/person', personRoutes);

// Import the menu router file
const menuRoutes = require('./routes/menuRoutes');
// Use the router for menu-related routes
app.use('/menu', menuRoutes);




app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});