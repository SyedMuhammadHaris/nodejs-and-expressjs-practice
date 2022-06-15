const express = require('express');

const app = express();
const loggerMiddleware = require('./middlewares/logger');
const authorizeMiddleware = require('./middlewares/authorize')

app.use([loggerMiddleware,authorizeMiddleware])

app.get('/',(req,res)=>{
  res.send("Home"); 
});

app.get('/about',(req,res)=>{
   res.send("About"); 
 });

 app.get('/api/products',(req,res)=>{
   res.send("Products"); 
 });

 app.get('/api/reviews',(req,res)=>{
    console.log(req.user);
   res.send("reviews"); 
 });
app.listen(5000,()=>{
   console.log("Server is listening");
});