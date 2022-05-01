const conexao = require('./database/conexao')
const customexpress = require('./config/customexpress')
const Tabelas = require('./database/tabelas')


conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
        Tabelas.init(conexao)
        
        const app = customexpress()
        
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})
    


