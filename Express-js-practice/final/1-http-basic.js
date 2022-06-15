const http = require('http');
const {readFileSync} = require('fs');

const homePage = readFileSync('./index.html');


const server = http.createServer((req,res)=>{
        // console.log(req.method);
        // console.log(req.url);

        const url = req.url;
         
        //home page
        if(url === '/'){
            res.writeHead(200,{'content-type':'text/html'});
            res.write('<h1>Home Page</h1>');
            // res.write(homePage);
            res.end();
            console.log("Server Running");
        }
        else

        //About Page
            if(url === '/about'){
               res.writeHead(200,{'content-type':'text/html'});
               res.write('<h1>About Page</h1>');
               res.end();
            }

            //Error Page 404
        else {
            res.writeHead(404,{'content-type':'text/html'});
            res.write('<h1>We cannot finde the Page Error</h1>');
            res.end();
        }

      
});
server.listen(5000);


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>Home Page</h1>
//     <h3>Hello Haris</h3>
// </body>
// </html>


// const http = require('http');
// const {readFileSync} = require('fs');

// const homePage = readFileSync('./index.html');

// const server = http.createServer((req,res)=>{
//         // console.log(req.method);
//         // console.log(req.url);

//         const url = req.url;
         
//         //home page
//         if(url === '/'){
//             res.writeHead(200,{'content-type':'text/html'});
//             res.write(homePage);
//             res.end();
//             console.log("Server Running");
//         }
//         else

//         //About Page
//             if(url === '/about'){
//                res.writeHead(200,{'content-type':'text/html'});
//                res.write('<h1>About Page</h1>');
//                res.end();
//             }

//             //Error Page 404
//         else {
//             res.writeHead(404,{'content-type':'text/html'});
//             res.write('<h1>We cannot finde the Page Error</h1>');
//             res.end();
//         }

      
// });
// server.listen(5000);