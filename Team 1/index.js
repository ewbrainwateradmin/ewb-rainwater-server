var http = require('http');
var fs = require('fs');

//put interpreter into strict mode
"use strict";


const exponentModule = require('./handlers/getExponent');
const express = require("express");

const app = express();
const port = 8080;


app.get('/', function(req, res){
	res.send('Hello World!')
})

app.get('/exponent/:integer', exponentModule.getExponent(req, res));

app.listen(port, () => {
	console.log('server is listening on port ${port}')
})
