//https://github.com/netcrazy/socket-io-server.git
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

var run = require('./server/RedisServer');
run(3000);
