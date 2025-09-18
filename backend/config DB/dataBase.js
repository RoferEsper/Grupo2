const mysql = require ('mysql2');

const connection = mysql.createConnection({
    host: 'Localhost',
    user: 'root',
    password: 'lol1',
    database: 'pyc'
});

connection.connect ((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida con éxito');
});
module.exports = {connection};