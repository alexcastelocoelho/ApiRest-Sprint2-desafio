const Task = require('../models/task')  //importação do arquivo task da pasta models


module.exports = app => {
    //rota de listar tarefas usando GET
    app.get('/api/v1/task', (req,res) => {
        Task.listaTarefa(res)
        
    })
    //rota de lista tarefa especifica atraves do id usando GET
    app.get('/api/v1/task/:id', (req,res) => {
        const id = parseInt(req.params.id)
        
        Task.buscaPorid(id, res)
    })


    //rota de criar tarefa usando POST
    app.post('/api/v1/task', (req,res) => {
        const task = req.body

        Task.adicionaTarefa(task, res)
    })

    //rota de alterar tarefa atraves do id usando PUT
    app.put('/api/v1/task/:id', (req,res) => {
        const id = parseInt(req.params.id)

        const valores = req.body

        Task.alteraTarefa(id, valores, res)
    })

    //rota de deletar tarefa atraves do id usando DELETE
    app.delete('/api/v1/task/:id', (req,res) => {
        const id = parseInt(req.params.id)

        Task.deletaTarefa(id, res)

    })



}