/**
 * Created by jh on 2018/5/4.
 */
var path = require('path');
//导出一个对象
module.exports={
    //设置入口文件的绝对路径
    entry:path.resolve('src/index.js'),
    //设置输出
    output:{
        path: __dirname + "/build",
        filename:'bundle.js'
    },
    //指定webpack-dev-server的配置项   git
    devServer:{
        stats:{colors:true},
        port:9090,//配置端口号
        contentBase:'./build',//配置文件的根目录
    },
    module:{
        rules:[ //指定不同文件的加载器
            {
                test:/\.js$/, //指定要加载的文件
                exclude: /node_modules/,
                loader:'babel-loader'//指定加载器
            }
        ]
    }
}