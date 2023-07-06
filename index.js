'use strict';

const start = require('./server.js');
require('dotenv').config();

start(process.env.PORT);
