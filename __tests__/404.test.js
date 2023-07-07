'use strict';

const { server } = require('../server.js');
const module404 = require('../errorHandlers/404.js');
const supertest = require('supertest');


describe('test 404 error middlware', () => {
    test('404 on bad route responds with: ERROR: Route not found', async () => {
        await supertest(server).get('/bananas').expect('ERROR: Route not found');
        // This works to:
        // const res = await supertest(server).get('/pizza');
        // expect(res.text).toBe('ERROR: Route not found');
    })
});