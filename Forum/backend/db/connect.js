const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  host: "109.70.148.42",
  connectionLimit: 10,
});

module.exports = dbConnection.promise();
