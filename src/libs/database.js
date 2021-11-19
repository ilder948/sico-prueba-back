const { Sequelize } = require("sequelize");
const config = require("../config/index");


const sequelize = new Sequelize(
  config.MSSQL_DATABASE,
  config.MSSQL_USER,
  config.MSSQL_PASS,
  {
    host: config.MSSQL_SERVER,
    port: config.MSSQL_PORT,
    dialect: "mssql",
  }
);

module.exports = sequelize