
const User = require('../models/user') //importação do arquivo user da pasta models

module.exports = app => {
    //rota de listar usuarios usando GET
    app.get('/api/v1/user', (req,res) => {
        User.listaUsuarios(res)
        
    })

    //rota de lista usuario especifico atraves do id usando GET
    app.get('/api/v1/user/:id', (req,res) => {
        const id = parseInt(req.params.id)
        
        User.buscaPorId(id, res)
        
    })
    
    //rota de criação de usuario usando POST
    app.post('/api/v1/user', (req,res) => {
        const user = req.body

        User.adicionaUsuario(user, res)
    })
    
    //rota de alteração de usuario usando PUT
    app.put('/api/v1/user/:id', (req,res) => {
        const id = parseInt(req.params.id)

        const valores = req.body
    
        User.alteraUsuario(id, valores, res)
    })

    //rota de exclusão de usuario atraves do id usando DELETE
    app.delete('/api/v1/user/:id', (req,res) => {
        const id = parseInt(req.params.id)

        User.deletaUsuario(id, res)
    })


       
}