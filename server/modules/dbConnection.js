var mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'phpmyadmin',
    password: 'root',
    port: "3306",
    database: 'atypikhouse'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

export default connection;