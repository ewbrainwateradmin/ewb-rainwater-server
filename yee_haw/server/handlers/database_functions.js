"use strict"

const mysql = require('mysql')

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
  try {
    var sql = `INSERT INTO WATER_SAVED (entry_time, water_amount) VALUES (NOW(), ${water_amount})`
    con.query(sql, (err, result) => {
      if (err) throw err
      console.log("Record Inserted")
    })
  } catch (err) {console.log(err.message)}
}

module.exports = {insertData}
