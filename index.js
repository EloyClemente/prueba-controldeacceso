const express = require('express')
const app = express()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config')




app.use('/', require('./routes/ruta-connect'))


app.use(webpackDevMiddleware(webpack(webpackConfig)))


require('./config/connection-server')(app)


