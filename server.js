const express = require('express');
const mysql = require('mysql2');

const app = express();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'FisHiNg4b0Ot$',
    database: 'company'
}
)

app.listen(3001);