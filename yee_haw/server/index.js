"use strict"

const express = require("express")
const app = express()

const getWaterGallons = require('./handlers/getWaterGallons')
const getWaterBottles = require('./handlers/getWaterBottles')
const getWaterDollars = require('./handlers/getWaterDollars')
const update_from_database = require('./handlers/update_from_database')

const address = process.env.ADRR || ":80"
const [host, port] = address.split(":")

// Update information from database every 30 minutes (time is in milliseconds)
update_from_database.update()
setInterval(update_from_database.update, 30*60*1000)

app.get('/', (req, res) => {res.send("Hello World")})

app.get('/current_water_flow', getWaterGallons.getWater)
app.get('/current_water_bottles', getWaterBottles.getWater)
app.get('/current_dollars', getWaterDollars.getWater)

app.listen(port, () =>
  console.log(`Listening on ${host}:${port}`)
)
