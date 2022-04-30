const conexao = require('./config/conexao')
const customexpress = require('./config/customexpress')

const app = customexpress()

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
        
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})
    


