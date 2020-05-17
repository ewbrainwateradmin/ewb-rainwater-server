"use strict"

const mysql = require('mysql')
var sleep = require('sleep')

const con = mysql.createConnection({
  host: 'ewb-rainwater-database',
  port: '3306',
  user: 'root',
  password: 'ewb2020',
  database: 'mysql'
})

con.connect((err) => {
  if (err) throw err
  console.log("Connected")
})

function insertData(water_amount) {
  return new Promise((resolve, reject) => {
    try {
      var sql = `INSERT INTO WATER_SAVED (entry_time, water_amount) VALUES (NOW(), ${water_amount})`
      con.query(sql, (err, result) => {
        if (err) throw err
        resolve("Record Inserted")
      })
    } catch (err) {reject(err.message)}
  })
}

module.exports = {insertData}
