const loggerMiddleware = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const date = new Date();
    console.log(method, url, date.getFullYear());
    // res.send("Terminate the Process"); // to terminate process 
    next(); //use middleware

}
module.exports = loggerMiddleware;