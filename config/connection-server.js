
const port = process.env.PORT || 3000

module.exports = server =>
{
    server.listen(port, ()=>
    {
        console.log('Servidor ejecutando en 3000')
    })
}