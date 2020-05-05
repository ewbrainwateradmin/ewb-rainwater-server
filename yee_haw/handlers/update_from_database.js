"use strict"

const fs = require("fs")
const path = require("path")

function update() {
  try {
    // Get value (replace with database eventually)
    var water = Math.floor(500*Math.random())

    // Write to text file
    fs.writeFile(path.resolve(__dirname, "water.txt"), water, (err) => {
      if (err) throw err
    })

  } catch (err) {
    console.log(err.message)
  }
}

module.exports = {update}
