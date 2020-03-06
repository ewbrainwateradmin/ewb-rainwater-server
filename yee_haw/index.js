"use strict"

const express = require("express")
const app = express()

const getExponent = require('./handlers/getExponent')

const address = process.env.ADRR || ":80"
const [host, port] = address.split(":")

app.get('/', (req, res) =>
  res.send("Hello World!")
)

app.get('/exponent/:integer', getExponent.getExponent)

app.listen(port, () =>
  console.log(`Listening on ${host}:${port}`)
)
