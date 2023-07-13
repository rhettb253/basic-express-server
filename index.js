'use strict';

const { sequelizeConnect } = require('./models/index.model');
const { start } = require('./server.js');
require('dotenv').config();
// You can use process.env.PORT || 3000; to make it work as expected locally
const PORT = process.env.PORT;

//get knowledge of models in our code but not db & vice-versa
//sync to database and then start the server
sequelizeConnect
  .sync()
  .then(() => start(PORT))
  .catch((err) => console.error(err));
