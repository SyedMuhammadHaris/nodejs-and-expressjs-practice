const express = require('express');

const app = express();

//req => middleware => res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const date = new Date();
    console.log(method, url, date.getUTCFullYear());
    // res.send("Terminate the Process"); // to terminate process 
    next(); //use middleware

}

app.get('/', logger, (req, res) => {

    res.send("Home Page");
});

app.get('/about', logger, (req, res) => {
    res.send("About Page");
});

app.listen(5000, () => {
    console.log("Server is listening");
});