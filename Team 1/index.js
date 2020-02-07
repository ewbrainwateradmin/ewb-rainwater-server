import {getExponent} from 'getExponent.js';
var http = require('http');
var fs = require('fs');

//put interpreter into strict mode
"use strict";

//require the express packages
const express = require("express");
//create a new express application
const app = express();
const port = 8080;

app.get('/', function(req, res){
	res.send('Hello World!')
})

app.get('/exponent/:integer', function(req, res){
	getExponent(req, res);
})

app.listen(port, () => {
	console.log('server is listening on port ${port}')
})
