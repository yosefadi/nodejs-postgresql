require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const { Sequelize } = require('sequelize');

let dbHost = process.env.DB_HOST
let dbPort = process.env.DB_PORT
let dbUser = process.env.DB_USER
let dbPass = process.env.DB_PASS
let dbName = process.env.DB_NAME

// Create connection
const sequelize = new Sequelize('postgres://' + dbUser + ':' + dbPass + '@' + dbHost + ':' + dbPort + '/' + dbName + '?sslmode=disable');
// Connect to database server
try {
    sequelize.authenticate();
    console.log('Connection to DB has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.get('/', (req, res) => {
  res.send('Hello World! Test CAD-IT by yosefadi')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
