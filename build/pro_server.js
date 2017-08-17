// 单独配置访问构建之后的项目， 开发环境的项目中的热加载技术可能在云之家里面造成问题，导致退出后一直进不去
var express = require("express");
var port = process.env.PORT || 8081;
var app  = express();

// 设置静态资源
app.use(express.static('dist')); // static中间件工具是express唯一内置的，更多的http://www.expressjs.com.cn/guide/using-middleware.html

// 启用服务
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('app listening at http://%s:%s', host, port);
});
