let mysql = require('mysql');

const db = mysql.createConnection({
    host: '37.59.61.46',
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
