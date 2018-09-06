
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
var run = require('./server/RedisServer');
run(2443);