"use strict"

const express = require("express")
const app = express()

const getWaterGallons = require('./handlers/getWaterGallons')
const getWaterBottles = require('./handlers/getWaterBottles')
const getWaterDollars = require('./handlers/getWaterDollars')
const update_from_database = require('./handlers/update_from_database')
const database_functions = require('./handlers/database_functions')

const port = process.env.PORT || "80"

// Update information from database every 30 minutes (time is in milliseconds)
update_from_database.update()
setInterval(update_from_database.update, 30*60*1000)

app.use(express.static("public"))

app.get('/current_water_flow', getWaterGallons.getWater)
app.get('/current_water_bottles', getWaterBottles.getWater)
app.get('/current_dollars', getWaterDollars.getWater)
app.get('/water_records', database_functions.selectAll)
// Format for :start_time and :end_time
// YYYY-MM-DDThh:mm:ss.000Z
app.get('/water_records/start/:start_time/end/:end_time', database_functions.selectDate)

app.listen(port, () =>
  console.log(`Listening on :${port}`)
)
