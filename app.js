const mysql = require('mysql2');

// Criando a conexão
const conn = mysql.createConnection({
    host: 'localhost', //caminho da base de dados
    user: 'root',
    password: '',
    database: 'olamundo', //nome da base de dados
  });

conn.connect(function (err){
    console.log("Conexão com Banco de Dados realizada com sucesso!")
});

//conn.query("INSERT INTO `usuarios` (`id`, `nome`, `email`) VALUES ('', 'Gilvan', 'alvesgilvan9@gmail.com')")

//conn.query("DELETE FROM usuarios WHERE `usuarios`.`id` = 0")

//var adr = '1';
//var sql = 'SELECT * FROM usuarios WHERE id = ' + mysql.escape(adr);

// conn.query(sql, function (err, rows, fields){
//     if(!err){
//         console.log('Resultado: ',rows)
//     }else{
//         console.log('Erro: Consulta não realizada com sucesso!')
//     }
// })


conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO usuarios (nome, email) VALUES ?";
    var values = [
      ['John', '@outlook.com'],
      ['Peter', '@outlook.com'],
      ['Amy', '@gmail.com'],
      ['Hannah', '@outlook.com'],
      ['Michael', '@gmail.com'],
      ['Sandy', '@gmail.com'],
      ['Betty', '@outlook.com'],
      ['Richard', '@gmail.com'],
      ['Susan', '@outlook.com'],
      ['Vicky', '@outlook.com'],
      ['Ben', '@gmail.com'],
      ['William', '@gmail.com'],
      ['Chuck', '@outlook.com'],
      ['Viola', '@gmail.com']
    ];

    conn.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Número de registros inserido: " + result.affectedRows);
    });

    //===============//
    
    conn.query("SELECT id, nome, email FROM usuarios", function (err, rows, fields){
      if(!err){
          console.log('Resultado: ',rows)
      }else{
         console.log('Erro: Consulta não realizada com sucesso!')
      }
  })
  });


