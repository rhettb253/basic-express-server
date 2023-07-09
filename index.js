'use strict';

const { sequelizeConnect } = require('./models/index.model')
const { start } = require('./server.js');
require('dotenv').config();
const PORT = process.env.PORT

//get knowledge of models in our code but not db & vice-versa
sequelizeConnect.sync()
    .then(()=> start(PORT))
    .catch(err=> console.error(err));

start(PORT);
