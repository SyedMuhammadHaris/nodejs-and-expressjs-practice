// Using Event Emitter API
const server = http.createServer();

// emits request event
// subcribe to it / listen for it / respond to it
server.on('request',(req,res)=>{
    res.end("Hello Wolrd")
    console.log(res);
});

server.listen(`Server listen ${5000}`);