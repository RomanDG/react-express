'use strict'

require('babel-register');
let http = require('http');
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let router = require('./routes');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', router.index);

http.createServer(app).listen(process.env.PORT || 80, ()=>{
	console.log('listening on 80 port');
});
