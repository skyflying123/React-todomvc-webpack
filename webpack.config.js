var path = require("path");

	module.exports = {
	    entry: './js/index.js', // 入口文件
	    output: {
	        path: path.resolve(__dirname, "."),
	        filename: 'bundle.js' // 打包输出的文件
	    },
	    module: {
	        rules: [{
	            test: /\.js?$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
	            exclude: /(node_modules|bower_components)/,
	            loader: 'babel-loader',
	            query: {
	                presets: ['es2015', 'react']
	            }
	        }]
	    }
	};