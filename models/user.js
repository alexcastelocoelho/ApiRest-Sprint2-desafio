const conexao = require('../database/conexao')

const moment = require('moment')

class User {
    
    adicionaUsuario(user, res) {
        
        const birthDate = moment(user.birthDate, 'DD/MM/YYYY').format('YYYY-MM-DD')
        const senhavalida = user.password.length >= 6
        const cpfvalido = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(user.cpf )
         
        const validando = [
            {
                nome: 'password',
                valido:  senhavalida,
                mensagem: 'senha precisa de pelo menos 6 digitos'
            },
            {
                nome: 'cpf',
                valido: cpfvalido,
                mensagem: 'cpi invalido, use o formato xxx.xxx.xxx-xx'
            }
        ]

        const erros = validando.filter(teste => !teste.valido)
        const existemerros = erros.length

        if(existemerros) {
            res.status(400).json(erros)
        } else {

            const body = {...user, birthDate}
            
            const sql = 'INSERT INTO usuario SET ?'
            
            conexao.query(sql, body, (erro, resultados) => {
           
                if(erro) {
                   res.status(400).json(erro)
               } else {
                   res.status(201).json(resultados)
                }
            })
        }

        
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
                res.status(404).json(erro)
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