const conexao = require('../database/conexao')
const moment = require('moment')
class Task {

    adicionaTarefa(task, res) {
        
        const date = moment(task.date, 'DD-MM-YYYY').format('YYYY-MM-DD HH:mm:ss')
        
        const body = {...task, date}
        const sql = 'INSERT INTO tarefa SET ?'

        conexao.query(sql, body ,(erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    listaTarefa(res) {
        const sql = 'SELECT * FROM tarefa'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorid(id, res) {
        const sql = `SELECT * FROM tarefa WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const task = resultados[0]
            if(erro) {
                res.status(404).json(erro)
            } else {
                res.status(200).json(task)
            }
        })

    }

    alteraTarefa(id, valores, res) {
        const sql = 'UPDATE tarefa SET ? WHERE id=?'

        conexao.query(sql, [valores,id], (erro,resultados) => {
            if(erro) {
                res.status(404).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    deletaTarefa(id, res) { 
        const sql = 'DELETE FROM tarefa WHERE id=?'

        conexao.query(sql, id, (erro,resultados) => {
            if(erro) {
                res.status(404).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }


}

module.exports = new Task


