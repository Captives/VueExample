//socket.io-emitter
//https://github.com/socketio/socket.io-emitter
console.log("PID:", process.pid);
console.log("PPID:", process.ppid);
console.log("Versions:", process.versions);
switch (process['platform']){
    case "win32":
        console.log("HOSTNAME", process.env['COMPUTERNAME']);
        break;
    case "linux":
        console.log("HOSTNAME", process.env['HOSTNAME']);
}

// setInterval(function (e) {
//     console.log(process.uptime());
// },1000);

const a = require('./config/conf.js');
console.log(a);

