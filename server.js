'use strict';
const server = require('express')();

function start(port) {
    server.listen(port, console.log("I am listening on " + port))
};

module.exports = start;