var express = require('express');
var http = require('http');
var https = require('https');
var io = require('socket.io');
function run(port){
    /******************************* 配置部分 *******************************/
    var app = express();
    app.use(express.static('./public'));
    app.use(express.static('./node_modules'));

    // simple logger
    app.use(function(req, res, next){
        console.log(req.method, req.url);
        next();
    });
    /******************************* 服务部分 *******************************/
// http.createServer(app).listen(3000, function () {
//     console.log('   >> HTTP 服务端口%d启动完成!', server.address().port);
// });
    const fs = require('fs');
    const ssl = require('../config/conf').ssl;
    const options = {
        key:  fs.readFileSync(ssl.key),
        cert: fs.readFileSync(ssl.cert),
        passphrase: 'passphase4privkey',
    };

//解决读取证书异常
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    var server = https.createServer(options, app).listen(port, function () {
        console.log('   >> HTTPS 服务端口%d启动完成!', server.address().port);
    });

    /******************************* SOCKET *******************************/
    //TODO 1 # path方式
    var socketServer = io.listen(server, {
        path: '/weather',
        serveClient: false,
    });

    //TODO 2 # 命名空间方式
    // var socketServer = io.listen(server).of('/td666');
    var ServerHandler = require('../module/ServerHandler');
    new ServerHandler().attach(socketServer);

    /******************************* Redis *******************************/
    const redisAdapter = require('socket.io-redis');
    const config = require('../config/conf').redis;
    // socketServer.adapter(redisAdapter(config));

    var redis = require('redis');
    const pub = redis.createClient(config);
    const sub = redis.createClient(config);
    socketServer.adapter(redisAdapter({pubClient: pub, subClient: sub}));

    const adapter = socketServer.of('/').adapter;
    // sub.on('message', function (a,b,c,d) {
    //     console.log('--------------sub # message >>', a, b, c, d);
    // });
    //
    // adapter.subClient.on('message', function (a,b,c,d) {
    //     console.log('adapter.subClient # message >>', a, b, c, d);
    // });
    /*************************** Redis adapter ****************************/
    // setInterval(()=>{

        console.log(socketServer.sockets.rooms);
        console.log(adapter.rooms);
        console.log('-------------------------------------------获取数量');
        //TODO 获取所有的客户端ID
        adapter.clients(function (err, clients) {
            console.log('ALL => ', clients); //包含所有连接的套接字ID的数组
        });

        adapter.clients([1002,1003], (err, clients) => {
            console.log('1002,1003 => ', clients);
        });

        socketServer.in(1003).clients((err, clients) => {
            console.log('1003 => ', clients);
        });

        //TODO clientRooms # 返回指定房间内的房间数
        adapter.clientRooms('SeOvimHUD5VSZ8NRAAAA',(err, rooms) => {
            console.log('ALL clientRooms => ', rooms);
        });

        adapter.allRooms((err, rooms)=>{
            console.log('ALL ROOM => ', rooms);
        });

        adapter.on('error', (err)=>{
            console.error(err);
        });
    // }, 3000);
}

module.exports = run;