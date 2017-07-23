'use strict';

// Load modules

const Hoek = require('hoek');
const Hapi = require('hapi');
const Version = require('./version');


// Declare internals

const internals = {};


exports.init = function (port, next) {

    const server = new Hapi.Server();
    server.connection({ port });
    server.register(Version, (err) => {

        Hoek.assert(!err, err);
        server.start((err) => {

            return next(err, server);
        });
    });
};

