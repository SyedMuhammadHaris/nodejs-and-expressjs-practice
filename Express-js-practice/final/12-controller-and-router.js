const express = require('express');
const app = express();

// const {people} = require('./data');

const  people  = require('./router/people');
const  auth  = require('./router/auth');

//Static assets
app.use(express.static('./methods-public'));
//parse form data
app.use(express.urlencoded({extended:false}));
// parse json
app.use(express.json());

//router
app.use('/api/people', people);
app.use('/login', auth);







app.listen(5000,()=>{
  console.log("Server is listneing");
});

