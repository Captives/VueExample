var qr = require('qr-image');
/******************************* HTTP/HTTPS *******************************/
const http = require('http');
var url = require('url');
const httpServer = http.createServer(function (req, res) {
    var item = url.parse(req.url);
    switch (item.pathname){
        case '/favicon.ico':
        case '/':
            var d = new Date();
            var text = "当前时间 " + d.toLocaleDateString() + ' '+ d.toLocaleTimeString();
            res.writeHead(200, {'Content-type': 'text/html; charset=UTF-8'});
            res.write('<div style="text-align: center;"><h3 id="time">扫描二维码</h3>');
            res.write('<img id="img" style="width: 300px;height: 300px">');
            res.write(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="-3 -3 37 37">
                        <path fill="#566574" d="${qr.svgObject(text,{size :300}).path}"/>
                     </svg>`);
            res.write(`<br><a href="javascript::" onclick="refresh()">刷新</a>`);
            res.write(`<div class="qr" id="qr">
                        <style rel="stylesheet" type="text/css">
                            .qr{
                                text-align: center;padding: 20px
                            }
                            
                            .qr span{
                                display:inline-block;width:7px;height:7px;
                            }
                            
                            .qr span.active{
                                background: red;
                            }
                    </style>
                    <script>
                        var dataSet = ${JSON.stringify(qr.matrix(text,{size :100}))};
                           dataSet.forEach(function (item) {
                                item.forEach(function (val) {
                                    var span = document.createElement('span');
                                        if(val){
                                            span.className = 'active';    
                                        }
                                    document.querySelector('#qr').appendChild(span);
                                });
                                document.querySelector('#qr').appendChild(document.createElement('br'));
                            });
                        
                            function refresh(e) {
                                var url = window.location.origin + '/create.png';
                                document.getElementById("img").src = url;
                            }
                    </script>
                </div>`);
            res.end('<hr></div>');
            break;
        case '/create.png':
            var d = new Date();
            var text = "当前时间 " + d.toLocaleDateString() + ' '+ d.toLocaleTimeString();
            try {
                //TODO 方式1
                var img = qr.image(text,{size :100});
                res.writeHead(200, {'Content-Type': 'image/png'});
                img.pipe(res);

                //TODO 方式2
                // var img = qr.imageSync(text,{size :100});
                // res.end(img);

                //TODO 方式3
                // var img = qr.svgObject(text,{size :100});
                // res.end(img);

                //TODO 方式4
                // var img = qr.matrix(text,{size :100});
                // console.log(img);
                // res.end(img);
            } catch (e) {
                res.writeHead(414, {'Content-Type': 'text/html'});
                res.end('<h1>414 Request-URI Too Large</h1>');
            }
            break;
    }
}).listen(3000, function () {
    console.log('\t\t>> Web服务端口%d启动完成!', httpServer.address().port);
});
