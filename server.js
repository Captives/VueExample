//https://github.com/netcrazy/socket-io-server.git
// process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//
// var run = require('./server/RedisServer');
// run(3000);
var dataSet = [
    [1,1,1,1,1,0,1,0,1,0],
    [1,1,1,1,1,0,1,0,1,0],
    [1,1,1,1,1,5,1,0,1,0],
    [1,1,1,1,1,0,1,0,1,0],
]
dataSet.forEach(function (item) {
    var k = 0;
    item.forEach(function (val) {
        k+=val;
    });
});