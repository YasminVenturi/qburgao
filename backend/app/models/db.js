//modulo do MySQL
const mysql = require("mysql")
const dbConfig = require("../configs/db.config");

//Criar uma conexao com o BD
const connection = myqsl.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.Config.DB,
    port: dbConfig.Config.PORT
});

//Nova conxao com o MySQL
connection.connect(error=>{
    if(error) throw error;
    console.log("Banco de Dados Conectado!");
});
module.exports = connection;