let prod;
prod = true;
let mysql = require('mysql');

const dbDev = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: "3306",
    database: 'atypikhouse'
});

const dbProd = mysql.createConnection({
    host: 'localhost',
    user: 'amine',
    password: 'aminou@14',
    port: "3306",
    database: 'atypikhouse'
});

const db = (prod) ? dbProd:dbDev; 

db.connect((err) => {
    if (err) throw err;
    if(prod){
        console.log('Connected to the Production Database !');
    }
    else{
        console.log('Connected to the Development Database !');
    }
});

export default db;