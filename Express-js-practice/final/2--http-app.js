const http = require('http');
const {readFileSync} = require('fs');

const homePage = readFileSync('./index.html');
const homeStyles = readFileSync('./style.css');
const homeLogo = readFileSync('./logo.svg');
const homeLogic = readFileSync('./browserapp.js');

const server = http.createServer((req,res)=>{
    const url = req.url
        console.log(req.url);
        if(url === '/'){
           res.writeHead(200,{'content-type':'text/html'});
           res.write(homePage);
           res.end();
        } 
        else
         if(url === '/style.css'){
             res.writeHead(200,{'content-type':'text/css'});
             res.write(homeStyles);
             res.end();
         }
         else if(url === '/logo.svg'){
            res.writeHead(200,{'content-type':'image/svg+xml'});
            res.write(homeLogo);
            res.end();
         }    
         else if(url === '/browserapp.js'){
            res.writeHead(200,{'content-type':'text/javascript'});
            res.write(homeLogic);
            res.end();
         }
        else{
            res.writeHead(404,{'content-type':'text/html'});
            res.write('<h1>We cannot finde the Page Error</h1>');
            res.end();
        }
});

server.listen(5000)