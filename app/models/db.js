const maria = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const conn = maria.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
});

conn.connect((error) => {
  //if (error) throw error;
  if (error) {
    console.log("MySQL 연결 실패 : ", error);
    return;
  }

  console.log("Successfully connected to the database. ");
});

module.exports = conn;
