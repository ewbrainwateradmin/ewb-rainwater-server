"use strict"

const express = require("express")
const app = express()

const address = process.env.ADRR || ":80"
const [host, port] = address.split(":")

app.get('/', (req, res) =>
  res.send("Hello World!")
)

app.listen(port, () =>
  console.log(`Listening on ${host}:${port}`)
)
