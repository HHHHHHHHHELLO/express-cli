// config/config.js
/*
const path = require("path");
const dotenv = require("dotenv").config({
    path: path.resolve(__dirname,"../.env.development")
})*/
const dotenv = require("./env")


console.log("User",process.env.DB_USERNAME)

module.exports = {
    development: {
        username: process.env.DB_USERNAME || "dev_username",
        password: process.env.DB_PASSWORD || "dev_password",
        database: process.env.DB_DATABASE || "database_dev",
        host: process.env.DB_HOST || "127.0.0.1",
        dialect: "mysql" // or 'postgres', 'sqlite', 'mariadb', 'mssql'
    },
    test: {
        // similar configuration for test
    },
    production: {
        // similar configuration for prod, usually fetching from environment variables
    }
};