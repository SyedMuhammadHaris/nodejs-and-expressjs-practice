//file module using Async Approach

const { readFile, writeFile } = require('fs');

console.log("Satrter");

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        // console.log(second);

        writeFile('./content/resultAsync.txt',
        `Here is the result of async ${first} , ${second}`,
         {flag:'a'},  //means append kar de ga content file me
        (err,result)=>{
            if (err) {
                console.log(err);
                return;
            }
            const third = result;
            // console.log(third);
            console.log("Done with task line 31");
            
        })
    })
})

console.log("starting next task line 37");
