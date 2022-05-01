
const User = require('../models/user')

module.exports = app => {
    
    app.get('/api/v1/user', (req,res) => {
        User.listaUsuarios(res)
        
    })

    app.get('/api/v1/user/:id', (req,res) => {
        const id = parseInt(req.params.id)
        
        User.buscaPorId(id, res)
        
    })
    
    app.post('/api/v1/user', (req,res) => {
        const user = req.body

        User.adicionaUsuario(user, res)
    })
    
    app.put('/api/v1/user/:id', (req,res) => {
        const id = parseInt(req.params.id)

        const valores = req.body
    
        User.alteraUsuario(id, valores, res)
    })

    app.delete('/api/v1/user/:id', (req,res) => {
        const id = parseInt(req.params.id)

        User.deletaUsuario(id, res)
    })


       
}