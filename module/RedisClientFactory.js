/**
 * Created by Administrator on 2018/5/12.
 */
var redis = require('redis');
// var Redis = require('ioredis');
var conf = require('./../conf/conf');

var log4js = require('./../conf/Logger');
var console = log4js.getLogger('other');
var RedisClientFactory = {
    create: () => {
        return new Promise((resolve, reject)=> {
            var client = redis.createClient(conf.redis);
            // var client = new Redis(conf.redis);
            client.isEmpty = function (data) {
                return JSON.stringify(data) == '[null]' ? true : false;
            };

            //监听订阅成功事件
            client.on('subscribe', function (channel, message) {
                console.log('订阅', channel, '消息', message);
            });

            //监听取消订阅事件
            client.on("unsubscribe", function (channel, count) {
                console.log('退订', channel, '消息', count);
            });

            client.on('ready', ()=> {
                resolve(client);
            });

            client.on('end', ()=> {

            });

            client.on('error', (err)=> {
                reject(err);
            });
        });
    }
};

module.exports = {
    create: RedisClientFactory.create
};