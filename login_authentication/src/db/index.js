const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "employee",
  password: "root",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
