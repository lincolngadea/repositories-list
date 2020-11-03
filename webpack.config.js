//ARQUIVO DE CONFIGURAÇÃO PRINCIPAL DO WEBPACK

const { ModuleFilenameHelpers } = require("webpack");

module.exports = {
    entry:['@babel/polyfill','./src/main.js'],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer:{
        contentBase: __dirname + '/public'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                }
            }
        ],
    },
};