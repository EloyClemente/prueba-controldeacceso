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


app.post('/app', (req, res)=>
{
    if(req.body.username == 'eloy')
    {
        req.session.user = req.body.username
        console.log('Sesión creada:', req.session.user)


        io.on('connection', socket =>
        {
            console.log('Usuario conectado', socket.id)
        })


        res.sendFile(path.resolve(__dirname, 'public/app.html'))
    }
    else
    {
        io.on('disconnect', socket =>
        {
            console.log('Usuario desconectado')
        })
        
        res.redirect('/')
    }
})

require('./config/connection-server')(server)


