const express = require('express')
const app = express()

const socketIo = require('socket.io')
const http = require('http')
const server = http.Server(app)
const io = socketIo(server)

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config')

app.use(webpackDevMiddleware(webpack(webpackConfig)))


/* RUTAS
.............................................*/
app.use('/', require('./routes/ruta-connect'))



io.on('connection', socket =>
{
    console.log('Usuario conectado')
})



require('./config/connection-server')(server)


