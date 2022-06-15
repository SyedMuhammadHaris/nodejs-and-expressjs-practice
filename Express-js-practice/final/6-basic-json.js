const express = require('express');
const app = express();

const {products,people} = require('./data');


app.get('/',(req,res)=>{
    //    res.json([{name:"haris"},{name:"ahmed"}]);
    // res.json(people)
    res.json(products);
});
app.get('/peoples',(req,res)=>{
     res.json(people);
});

app.listen(5000,()=>{
    console.log("Server is  listening");
});