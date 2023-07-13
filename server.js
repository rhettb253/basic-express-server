'use strict';

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const error404 = require('./errorHandlers/404.js');
const error500 = require('./errorHandlers/500.js');
const express = require('express');
const server = express();
const coolGamesRoute = require('./routes/game.route.js');
const characterRoute = require('./routes/characters.route.js');

function start(port) {
    server.listen(port, console.log("I am listening on " + port))
};

//add express.json() for req.body, parses the JSON
server.use(express.json());

server.use(logger);

server.get('/', ((req, res) => res.send('default route working')));

server.get('/person', validator, (req, res) => {
    res.status(200).json({"name" : req.query.name});
});

server.use(coolGamesRoute);

server.use(characterRoute);

server.use('*', error404);

server.use(error500);

module.exports = {server, start};