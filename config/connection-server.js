
const port = process.env.PORT || 3000

module.exports = app =>
{
    app.listen(port, ()=>
    {
        console.log('Servidor ejecutando en 3000')
    })
}