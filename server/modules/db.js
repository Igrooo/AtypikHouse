let mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'amine',
    password: 'aminou@14',
    port: "3306",
    database: 'atypikhouse'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

export default db;