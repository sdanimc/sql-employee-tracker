const mysql =require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    //users need to change password to their personal mysql password
    password: 'FisHiNg4b0Ot$',
    database: 'company'
}
);
db.connect(function (err) {
    if (err) throw err;
});
module.exports = db;