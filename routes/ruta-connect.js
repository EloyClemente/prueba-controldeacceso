const express = require('express')
const router = express.Router()
const path = require('path')
const foo = false


router.get('/', (req, res)=>
{
    let ruta = '../public/index.html'

    if(foo)
    {
        ruta = '../public/app.html'
    }
 
    res.sendFile(path.resolve(__dirname, ruta))
})

module.exports = router