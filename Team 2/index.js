const express = require('express')
const app = express()
const port = 3000
const getExponent = require('./handlers/getExponent')

//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/exponent/:integer', getExponent.getExponent)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))