'use strict';

const Hapi = require('hapi');
const Code = require('code');
const Lab = require('lab');
const University = require('../lib');


const lab = exports.lab = Lab.script();
const expect = Code.expect;
const it = lab.test;

it('starts server and returns hapi server object', (done) => {

    University.init(0, (err, server) => {

        expect(err).to.not.exist();
        expect(server).to.be.instanceof(Hapi.Server);

        server.stop(done);
    });
});
