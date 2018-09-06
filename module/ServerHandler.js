/**
 * Created by Administrator on 2018/7/20.
 */
//TODO ------------------ 测试通过 -----------------
//TODO OK => 广播自己外的所有用户
//socket.broadcast.emit('chat', data);
//TODO OK => 广播包含自己的所有用户
//socketServer.sockets.emit('chat', data);
//TODO OK => 指定房间内的所有用户,不包含自己
// socket.to(socket.td).emit('chat', data);
// socket.in(socket.td).emit('chat', data);
//TODO OK => 指定房间内的所有用户，包含自己
// socketServer.sockets.to(socket.td).emit('chat', data);
// socketServer.sockets.in(socket.td).emit('chat', data);
//TODO OK => 发给指定房间,但是不能为自己所在房间
//socket.broadcast.to('td1002').emit('chat', data);
//TODO OK => 广播指定房间内初自己之外的其它用户
// socket.broadcast.in(socket.td).emit('chat', data);
//TODO ----------------- 测试通过 END ----------------

// 发给自己指定人
// socketServer.sockets.socket(socket.id).emit('chat', data);
// socket.to(socket.id).emit('chat', data);
// 发送需要确认的消息
// socket.emit('question', 'do you think so?', function (answer) {});

var rooms = [1001, 1002, 1003];
var socketServer = null;
function ServerHandler(){

}

ServerHandler.prototype.attach = function (server) {
    var that = this;
    socketServer = server;
    socketServer.use(function(socket, next){
        socket.address = (socket.handshake.headers['x-forwarded-for'] ||
                        socket.request.connection.remoteAddress ||
                        socket.handshake.address).replace("::ffff:", "");
        socket.query = socket.handshake.query;
        socket.ua = socket.handshake.headers['user-agent'];
        socket.request.headers.cookie;

        //报错给客户端
        //return next(new Error('Authentication error'));
        next();
    });

    socketServer.on('connection', function (socket) {
        socket.emit('srv',{env:process.env});
        that.push(socket);
    });
};

ServerHandler.prototype.push = function (socket) {
    var td = rooms[Date.now() % rooms.length];
    socketServer.sockets.rooms.push(td);
    socket.join(td);
    socket.td = td;
    socket.pid = process.pid;
    socket.emit('enterSucess', {td: td, pid: socket.pid, sid: socket.id, address: socket.address, query: socket.query});
    console.log(td, "TD new socket", socket.id, socket.address, socket.query);

    //收到消息发送房间内所有人
    socket.on('chat', function (data) {
        data.pid = socket.pid;
        data.uid = socket.td + "#" + socket.pid;
        console.log(data.uid, 'Send', data);

        // socket.to(socket.td).emit('chat', data);
        socketServer.sockets.emit('chat', data);
        // socketServer.sockets.in(socket.td).emit('chat', data);
    });
};
module.exports = ServerHandler;