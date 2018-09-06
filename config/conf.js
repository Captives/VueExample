/**
 * Created by Administrator on 2018/7/20.
 */

const ssl ={
    key: 'keys/uuabc_com.key',
    cert: 'keys/uuabc_com.crt',
};
//
// const redis = {
//     host:'wsc.uuabc.com',
//     port:6379,
//     password:'Seven123',
// };

const redis = {
    host: '192.168.66.128',
    port: 6379,
    password: '123456'
};

module.exports = {
    ssl:ssl,
    redis:redis,
};