// Built in File System module in js

const {readFileSync , writeFileSync} = require('fs');

console.log("Satrter");
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

// console.log(first);
// console.log(second);

writeFileSync(
    './content/result-sync.txt',
    `Hers is the result of ${first} , ${second}`,
    {flag: 'a'}
)

console.log("Done with the task");
console.log("Starting  with the next task");