"use strict"

const express = require("express")
const app = express()

const getExponent = require('./handlers/getExponent')

const address = process.env.ADRR || ":3000"
const [host, port] = address.split(":")

app.get('/', (req, res) =>
  res.send("Hello World!")
)

app.get('/exponent/:integer', (req, res) =>
  getExponent.getExponent(req, res)
)

app.listen(port, () =>
  console.log(`Listening on ${host}:${port}`)
)
