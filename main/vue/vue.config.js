let config = require('./config/config');
module.exports={
    devServer:{
        proxy:{
            '/api':{
                target:config.baseUrl.localhost,
                changeOrigin:true,
            },
            '/douban':{// axios 访问 /douban == target + '/douban'
            target:'https://api.douban.com',
            changeOrigin:true,
            pathRewrite:{//路径替换
            '^/douban':'',// axios 访问/douban/v2 == target + /v2
                }
            }
        }
    }
}