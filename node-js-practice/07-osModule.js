// built in OS module in NodeJS

const os = require('os');
const user = os.userInfo();

console.log(user);

//Method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name : os.platform(),
  type : os.type(),
  release : os.release(),
  totalMem : os.totalmem(),
  freeMem : os.freemem(),
  HOSTnAME : os.hostname()
}

console.table(currentOS);