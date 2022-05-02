class Tabelas {
    init(conexao) {
       this.conexao = conexao

       this.criarUsuario()

       this.criarTarefa()

    }
      
    criarUsuario() {
        const sql = 'CREATE TABLE IF NOT EXISTS usuario (id int NOT NULL AUTO_INCREMENT , name varchar(50) NOT NULL, cpf varchar(11) NOT NULL, birthDate date NOT NULL,  email varchar(60) NOT NULL, password varchar(80) NOT NULL, address varchar(90) NOT NULL, number varchar (10) NOT NULL, complement varchar(50) NOT NULL, city varchar(30) NOT NULL, state varchar(40) NOT NULL, country varchar(20) NOT NULL, zipCode varchar(10) NOT NULL, PRIMARY KEY (id) ) '
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('tabela usuario criada ')
            }
        }) 
    }

    criarTarefa() {
        const sql = 'CREATE TABLE IF NOT EXISTS tarefa (description varchar(150) NOT NULL, date datetime NOT NULL, user int, CONSTRAINT fk_USTA FOREIGN KEY (user) REFERENCES usuario (id)  )'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('tabela tarefa criada ')
            }
        })
    }

    
}

module.exports = new Tabelas

