const express = require('express');

const app = express();
const loggerMiddleware = require('./logger');
const authorizeMiddleware = require('./authorize')

// app.use([loggerMiddleware,authorizeMiddleware]) our own middleware
// setup static and middleware
// app.use(express.static('./public')) static middleware given by express js
//We also use external libary of middleware function

app.get('/',(req,res)=>{
  res.send("Home"); 
});

app.get('/about',(req,res)=>{
   res.send("About"); 
 });

 app.get('/api/products',(req,res)=>{
   res.send("Products"); 
 });

 app.get('/api/reviews',[loggerMiddleware,authorizeMiddleware],(req,res)=>{
    console.log(req.user);
   res.send("reviews"); 
 });
app.listen(5000,()=>{
   console.log("Server is listening");
});