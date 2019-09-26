var mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: "8889",
    database: 'atypikhouse'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

export default connection;