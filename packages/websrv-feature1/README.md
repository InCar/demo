# WEB服务器功能模块示例

websrv是一个WEB服务器的容器,它本身只监听端口,把收到的HTTP请求路由给具体的模块.
websrv本身并不承担任何具体的功能.
<https://github.com/InCar/demo/tree/master/packages/websrv>

websrv-feature1是一个精简的功能模块示例
它自身也是一个完整的express模块,通过express的级联,成为websrv的一个子模块
websrv-feature1展示一个标准的HTML网站
websrv将它的根路由设置为`/web`

`
router.use('/web', feature1); // 配置feature1的根路由为/web
`

websrv-feature1将它自身的html文件夹设置为静态资源
它访问了自身暴露出来的一个API接口

`
app.get('/api/node-version', nodeVersion.getNodeVersion);
`

<https://github.com/InCar/demo/tree/master/packages/websrv-feature1>