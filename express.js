const express = require('express')

const app = express()
const db = require('./db')

app.get('/', (req, res) => {
    res.send('welcome to my hotel....how can i help you')
})

app.get('/biriyani' , (req, res) =>{
    var customised_biriyani ={
        name : 'dada boudi',
        type : 'chicken biriyani',
        spice_level : 'extremely hot',
        quantity : 2,
        is_rayta : true
    }
    res.send(customised_biriyani)
})

app.get('/butter-chicken',(req, res)=>{
    res.send('Here is your Butter Chicken , sir . It is the best butter-chicken available in India .')
})

app.listen(4000 , ()=>{
    console.log('server is up and running on port 4000')
})