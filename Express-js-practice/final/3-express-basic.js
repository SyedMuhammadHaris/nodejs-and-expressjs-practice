const express = require('express');
const app = express();

app.get('/',(req,res)=>{
   res.status(200).send('Welcome to Home Page');
});

app.get('/about',(req,res)=>{
   res.status(200).send('Welcome to About Page');
});

app.all('*',(req,res)=>{
   res.status(404).send('<h1>Sorry Resource not found</h1>')
});

app.listen(5000,()=>{
   console.log("Server is listening at port 5000");
});








//Methods provided by express js

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
