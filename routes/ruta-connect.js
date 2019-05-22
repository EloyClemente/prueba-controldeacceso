const express = require('express')
const router = express.Router()
const path = require('path')
const foo = false


router.get('/', (req, res)=>
{
    if(foo == false)
    {
        res.sendFile(path.resolve(__dirname, '../public/index.html'))
    }
    else
    {
        res.sendFile(path.resolve(__dirname, '../public/app.html'))
    }
})



module.exports = router