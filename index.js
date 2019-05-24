const express = require('express')
const app = express()

const session = require('express-session')
const path = require('path')
const bodyParser = require('body-parser')

const socketIo = require('socket.io')
const http = require('http')
const server = http.Server(app)
const io = socketIo(server)

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config')

app.use(webpackDevMiddleware(webpack(webpackConfig)))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: '1234',
    name: 'session'
}))


app.use(express.static(path.resolve(__dirname, 'public')))

/* RUTAS
.............................................*/
app.use('/', require('./routes/ruta-login'))




io.on('connection', socket =>
{
    console.log('Usuario conectado')
})


require('./config/connection-server')(server)


