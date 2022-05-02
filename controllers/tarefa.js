const Task = require('../models/task')


module.exports = app => {
    
    app.get('/api/v1/task', (req,res) => {
        Task.listaTarefa(res)
        
    })
    app.get('/api/v1/task/:id', (req,res) => {
        const id = parseInt(req.params.id)
        
        Task.buscaPorid(id, res)
    })



    app.post('/api/v1/task', (req,res) => {
        const task = req.body

        Task.adicionaTarefa(task, res)
    })

    app.put('/api/v1/task/:id', (req,res) => {
        const id = parseInt(req.params.id)

        const valores = req.body

        Task.alteraTarefa(id, valores, res)
    })

    app.delete('/api/v1/task/:id', (req,res) => {
        const id = parseInt(req.params.id)

        Task.deletaTarefa(id, res)

    })



}