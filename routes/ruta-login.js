const express = require('express')
const router = express.Router()
const path = require('path')


router.get('/', (req, res)=>
{
    res.sendFile(path.resolve(__dirname, '../public/index.html'))
})


router.post('/app', (req, res)=>
{
    if(req.body.username == 'eloy')
    {
        req.session.user = req.body.username
        console.log('Sesión creada:', req.session.user)
        res.sendFile(path.resolve(__dirname, '../public/app.html'))
    }
    else
    {
        res.redirect('/')
    }
})


router.get('/salir', (req, res)=>
{
    req.session.destroy()
    console.log('Sesión destruída')
    res.redirect('/')
})


module.exports = router