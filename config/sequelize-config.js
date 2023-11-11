// config/config.js
/*
const path = require("path");
const dotenv = require("dotenv").config({
    path: path.resolve(__dirname,"../.env.development")
})*/
const dotenv = require("./env")
dotenv.loadEnvironmentFile(process.env.NODE_ENV)

const development = {
    username: process.env.DB_USERNAME || "dev_username",
    password: process.env.DB_PASSWORD || "dev_password",
    database: process.env.DB_DATABASE || "database_dev",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_TYPE || "mysql" // or 'postgres', 'sqlite', 'mariadb', 'mssql'
}
const production = {
    username: process.env.DB_USERNAME || "pro_username",
    password: process.env.DB_PASSWORD || "pro_password",
    database: process.env.DB_DATABASE || "database_prod",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_TYPE || "mysql" // or 'postgres', 'sqlite', 'mariadb', 'mssql'
}


module.exports = {
    development,
    production
};