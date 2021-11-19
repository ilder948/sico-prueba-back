require('dotenv').config()

const config = {
    PORT: process.env.PORT,
    MSSQL_SERVER: process.env.MSSQL_SERVER,
    MSSQL_PORT: process.env.MSSQL_PORT,
    MSSQL_USER: process.env.MSSQL_USER,
    MSSQL_PASS: process.env.MSSQL_PASS,
    MSSQL_DATABASE: process.env.MSSQL_DATABASE
}

module.exports = config