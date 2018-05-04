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
    }
}