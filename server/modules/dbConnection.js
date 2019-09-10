var mysql = require('mysql');

const connection = mysql.createConnection({
    host:       'localhost',
    user:       'root',
    password:   '',
    port:       '3306',
    database:   'atypikhouse'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

export default connection;