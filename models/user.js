const conexao = require('../database/conexao')

class User {
    
    adicionaUsuario(user, res) {
        const sql = 'INSERT INTO usuario SET ?'

        conexao.query(sql, user, (erro, resultados) => {
           if(erro) {
               res.status(400).json(erro)
           } else {
               res.status(201).json(resultados)
           }
        })
    }

   listaUsuarios(res) {
        const sql = 'SELECT * FROM usuario'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        }) 

    }

    buscaPorId(id, res ) {
        const sql = `SELECT * FROM usuario WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const user = resultados[0]
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(user)
            }
        })

    }

    alteraUsuario(id, valores, res) {
        const sql = 'UPDATE usuario SET ? WHERE id=?'

        conexao.query(sql, [valores,id], (erro,resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    deletaUsuario(id, res) {
        const sql = 'DELETE FROM usuario WHERE id=?'

        conexao.query(sql, id, (erro,resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }

}

module.exports = new User