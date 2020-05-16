"use strict"

var mysql = require('mysql')

let con = mysql.createConnection({
  host: 'ewb-rainwater-database',
  port: '3306',
  user: 'root',
  password: 'ewb2020',
  database: 'mysql'
})

function connection() {
  con.connect(function(err) {
    if (err) throw err
    console.log("Connected to MySQL")
  })
}

module.exports = {connection}
