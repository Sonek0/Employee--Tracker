
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3001,

    user: "root",

    password: "C0d!ng101520",
    database: "employee_management_db"

});

module.exports = connection;