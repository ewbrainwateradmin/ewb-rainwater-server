var http = require('http');
var fs = require('fs');

//put interpreter into strict mode
"use strict";

//require the express packages
const express = require("express");
//create a new express application
const app = express();

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(8080);