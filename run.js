var async = require("async");
var playerCount = 10;

function run(playerCount, workerId) {
    var arr = [];
    for (var i = 0; i < playerCount; i++) {
        arr.push(workerId * 10000 + i);
    }

    console.log(arr);
    async.each(arr, function (item, cb) {
        // console.log('111111', item);
        cb(null);
    }, function (err, resp) {
        console.log("all player login called");
    });
}

if (!module.parent) {
    run(playerCount, 1);
} else {
    module.exports = {
        run: run
    }
}

var data = [
    {name: 'Apple', price: 6.8, delay: 200},
    {name: 'Litchi', price: 2.5, delay: 300},
    {name: 'Orange', price: 8.2, delay: 400}
];

console.log(data);
//并行
// async.each(data, function (item, callback) {
//     console.log('start', item.name);
//     setTimeout(function () {
//         console.log('end', item.name);
//         callback();
//     }, item.delay);
// }, (err) => {
//     console.log('Error', err);
// });

// 顺序执行
// async.eachSeries(data, function (item, callback) {
//     console.log('start', item.name);
//     setTimeout(function () {
//         console.log('end', item.name);
//         callback();
//     }, item.delay);
// }, (err) => {
//     console.log('Error', err);
// });

//批量限制数量执行
// async.eachLimit(data, 3, (item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() =>{
//         console.log('end', item.name);
//         callback();
//     }, item.delay);
// }, (err) => {
//     console.log('eachLimit', err);
// });


//并行
// async.map(data, (item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() =>{
//         console.log('end', item.name);
//         callback(null, item.name + "!");
//     }, item.delay);
// }, (err, result) => {
//     console.log('map', err, result);
// });

//顺序执行
// async.mapSeries(data, (item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() =>{
//         console.log('end', item.name);
//         callback(null, item.name + "!");
//     }, item.delay);
// }, (err, result) => {
//     console.log('mapSeries', err, result);
// });

//批量限制数量执行
// async.mapLimit(data, 3, (item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() =>{
//         console.log('end', item.name);
//         callback(null, item.name + "!");
//     }, item.delay);
// }, (err, result) => {
//     console.log('mapLimit', err, result);
// });
//
// async.mapValuesLimit(data, 2, (item, key, callback) => {
//     console.log('start', key, item);
//     setTimeout(() => {
//         console.log('end', key, item);
//         callback(null, item.name);
//     }, item.delay);
// }, (err, result) => {
//     console.log('mapValuesLimit', err, result);
// });

//
// async.mapValuesSeries(data, (item, key, callback) => {
//     console.log('start', key, item);
//     setTimeout(() => {
//         console.log('end', key, item);
//         callback(null, item.name);
//     }, item.delay);
// }, (err, result) => {
//     console.log('mapValuesSeries', err, result);
// });


//并行
// async.filter(data, (item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() =>{
//         console.log('end', item.name);
//         callback(null, item.price > 7 || item.delay < 300);
//     }, item.delay);
// }, (err, result) => {
//     console.log('filter',err, result);
// });

// async.filterLimit(data, 2, (item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() =>{
//         console.log('end', item.name);
//         callback(null, item.price > 7 || item.delay < 300);
//     }, item.delay);
// }, (err, result) => {
//     console.log('filter',err, result);
// });

//顺序执行
// async.filterSeries(data, (item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() =>{
//         console.log('end', item.name);
//         callback(null, item.price > 7 || item.delay < 300);
//     }, item.delay);
// }, (err, result) => {
//     console.log('filterSeries',err, result);
// });

//求表达式为false的值
// async.reject(data, (item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() =>{
//         console.log('end', item.name);
//         callback(null, item.price > 7 || item.delay < 300);
//     }, item.delay);
// }, (err, result) => {
//     console.log('reject',err, result);
// });
//
// async.rejectLimit(data, 2, (item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() =>{
//         console.log('end', item.name);
//         callback(null, item.price > 7 || item.delay < 300);
//     }, item.delay);
// }, (err, result) => {
//     console.log('rejectLimit',err, result);
// });

// async.rejectSeries(data, (item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() =>{
//         console.log('end', item.name);
//         callback(null, item.price > 7 || item.delay < 300);
//     }, item.delay);
// }, (err, result) => {
//     console.log('rejectSeries',err, result);
// });

// async.reduce(data, 0, (memo, item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() =>{
//         console.log('end', item.name);
//         callback(null, item.price + memo);
//     }, item.delay);
// }, (err, result) => {
//     console.log('reduce',err, result);
// });

// async.reduceRight(data, 0, (memo, item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() =>{
//         console.log('end', item.name);
//         callback(null, item.price + memo);
//     }, item.delay);
// }, (err, result) => {
//     console.log('reduceRight',err, result);
// });

// async.detect(data, (item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() =>{
//         console.log('end', item.name);
//         callback(null, item.price > 7 || item.delay < 300);
//     }, item.delay);
// }, (err, result) => {
//     console.log('detect',err, result);
// });

// async.detectLimit(data, 2, (item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() => {
//         console.log('end', item.name);
//         callback(null, item.price > 7 || item.delay < 300);
//     }, item.delay);
// }, (err, result) => {
//     console.log('detectLimit', err, result);
// });

// async.detectSeries(data, (item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() =>{
//         console.log('end', item.name);
//         callback(null, item.price > 7 || item.delay < 300);
//     }, item.delay);
// }, (err, result) => {
//     console.log('detectSeries',err, result);
// });

// var data = [2, 0, 5, 8, 4, 9, 1, 6, 7];
// async.sortBy(data, (item, callback) => {
//     callback(null, item * -1);
// }, (err, result) => {
//     console.log('sortBy',err, result);
// });

// async.sortBy(data, (item, callback) => {
//     callback(null, item.price); //item.price排序字段
// }, (err, result) => {
//     console.log('sortBy',err, result);
// });

// async.some(data, (item, callback) => {
//     callback(null, item.price > 7);
// }, (err, result) => {
//     console.log('some',err, result);
// });

// async.concat(data, (item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() => {
//         console.log('end', item.name);
//         callback(null, item.price * 2);
//     }, item.delay);
// },  (err, result) => {
//     console.log('concat', err, result);
// });

// async.concatSeries(data, (item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() => {
//         console.log('end', item.name);
//         callback(null, item.price * 2);
//     }, item.delay);
// },  (err, result) => {
//     console.log('concatSeries', err, result);
// });

// async.concatLimit(data, 2, (item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() => {
//         console.log('end', item.name);
//         callback(null, item.price * 2);
//     }, item.delay);
// },  (err, result) => {
//     console.log('concatLimit', err, result);
// });

// var data = [
//     { name: 'Apple', price: 6.8, delay: 200, origin:'A'},
//     { name: 'Litchi', price: 2.5, delay: 300, origin:'B' },
//     { name: 'Orange', price: 8.2, delay: 400, origin:'A' }
// ];

// async.groupBy(data, (item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() => {
//         console.log('end', item.name);
//         callback(null, item.origin);
//     }, item.delay);
// },  (err, result) => {
//     console.log('groupBy', err, result);
// });

// async.groupBySeries(data, (item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() => {
//         console.log('end', item.name);
//         callback(null, item.origin);
//     }, item.delay);
// },  (err, result) => {
//     console.log('groupBySeries', err, result);
// });

// async.groupByLimit(data, 2, (item, callback) => {
//     console.log('start', item.name);
//     setTimeout(() => {
//         console.log('end', item.name);
//         callback(null, item.origin);
//     }, item.delay);
// },  (err, result) => {
//     console.log('groupByLimit', err, result);
// });

//Control Flow
const list = {
    one: (callback) => {
        console.log('start', '1');
        setTimeout(() => {
            console.log('end', '1');
            callback(null, 1);
        }, 2000);
    },
    two: (callback) => {
        console.log('start', '2');
        setTimeout(() => {
            console.log('end', '2');
            callback(null, 2);
        }, 1000);
    }
};

// async.series(list, function (err, results) {
//     console.log('series',err, results);
// });

// async.parallel(list, function (err, results) {
//     console.log('parallel',err, results);
// });

// var count = 6;
// async.whilst(()=> {
//     return count > 1;
// }, (callback) => {
//     console.log('start', count);
//     count--;
//     setTimeout(() => {
//         console.log('end', count);
//         callback(null, count);
//     }, 1000);
// }, (err, results) => {
//     console.log('whilst', err, results);
// });

// var count = 6;
// async.doWhilst((callback) => {
//     console.log('start', count);
//     count--;
//     setTimeout(() => {
//         console.log('end', count);
//         callback(null, count);
//     }, 1000);
// }, ()=> {
//     return count > 1;
// }, (err, results) => {
//     console.log('doWhilst', err, results);
// });
//
// async.waterfall([
//     function(callback) {
//         console.log('1');
//         callback(null, 'one', 'two');
//     },
//     function(arg1, arg2, callback) {
//         console.log('2', arg1, arg2);
//         callback(null, 'three');
//     },
//     function(arg1, callback) {
//         console.log('3', arg1);
//         callback(null, 'done');
//     }
// ], function (err, results) {
//     console.log('waterfall',err, results);
// });


var count = 6;
// async.whilst(()=> {
//     return count > 3;
// }, (callback) => {
//     console.log('start', count);
//     count--;
//     setTimeout(() => {
//         console.log('end', count);
//         callback(null, count);
//     }, 1000);
// }, (err, results) => {
//     console.log('whilst', err, results);
// });

// var count = 6;
// async.until(()=> {
//     return count < 3;
// }, (callback) => {
//     console.log('start', count);
//     count--;
//     setTimeout(() => {
//         console.log('end', count);
//         callback(null, count);
//     }, 1000);
// }, (err, results) => {
//     console.log('until', err, results);
// });

// async.doUntil((callback) => {
//     console.log('start', count);
//     count--;
//     setTimeout(() => {
//         console.log('end', count);
//         callback(null, count);
//     }, 1000);
// }, ()=> {
//     return count > 1;
// }, (err, results) => {
//     console.log('doWhilst', err, results);
// });

// var count = 6;
// async.during((callback) => {
//         console.log('start', count);
//         callback(null, count > 1);
//     },(callback) => {
//         count--;
//         console.log('change', count);
//         setTimeout(callback, 1000);
//     },(err) => {
//         console.log('during', err);
//     }
// );

// async.doDuring((callback) => {
//     console.log('start', count);
//     count--;
//     setTimeout(() => {
//         console.log('end', count);
//         callback(null, count);
//     }, 1000);
// }, (args, callback) => {
//     return callback(null, args > 3);
//     // return callback('异常', args > 3);
// }, (err) => {
//     console.log('doDuring', err);
// });

function getClientIP(req) {
    return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
};

function getServerIP() {
    var os = require('os');
    var interfaces = os.networkInterfaces();
    var list = [];
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                list.push( alias.address);
            }
        }
    }
    return list;
}

console.log(getServerIP());

function getIP(callback) {
    var os = require('os');
    var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                console.log(null, alias.address);
            }
        }
    }
};
console.log(getIP());

var os = require('os');
var iptable = {};
var ifaces = os.networkInterfaces();
for (var dev in ifaces) {
    ifaces[dev].forEach(function (details, alias) {
        if (details.family == 'IPv4') {
            iptable[dev + (alias ? ':' + alias : '')] = details.address;
        }
    });
}
console.log(iptable);