const express = require('express')
const router = express.Router()
const path = require('path')


router.get('/', (req, res)=>
{
    res.sendFile(path.resolve(__dirname, '../public/index.html'))
})


router.get('/salir', (req, res)=>
{
    req.session.destroy()
    console.log('Sesión destruída')
    res.redirect('/')
})





module.exports = router