'use strict';

const supertest = require('supertest');
const { server } = require('../server.js');
const mockRequest = supertest(server);
const { sequelizeConnect } = require('../models/index.model.js');

describe('databse interaction', () => {
  beforeAll(async () => {
    await sequelizeConnect.sync();
  });
  afterAll(async () => {
    await sequelizeConnect.drop();
  });

  it('can create a record', async () => {
    const newGame = {
      title: 'sonic',
      type: '2d runner',
    };
    //.send sends the req.body for jest
    let res = await mockRequest.post('/coolgames').send(newGame);
    expect(res.status).toBe(200);
    expect(res.body.id).toBeDefined();
    expect(res.body.title).toBe('sonic');
    // Is the data we sent in the database?
    // Object.keys takes in an OBJECT returns and array of the key names ["firstName", "lastName"]
    // ["firstName", "lastName"].forEach(key = McBarksalot === response.body[key])
    Object.keys(newGame).forEach((key) => {
      expect(newGame[key]).toEqual(res.body[key]);
    });
  });
  // Give rid of this test if its not needed
  // needs middleware to create an error code
  // it("send an error when req body is invalid", async () => {
  //     const notAGame = {
  //       title: "sonic",
  //       age: "14",
  //     };
  //     let res = await mockRequest.post("/coolgames").send(notAGame);
  //     expect(res.status).toBe(400);
  // });

  it('can get all db records', async () => {
    let res = await mockRequest.get('/coolgames');
    console.log(res.body);
    expect(res.status).toBe(200);
    //this will return an array which is why it looks differrent to verify than the create test above
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body[0].id).toBeDefined();
    expect(res.body[0].id).toBe(1);
    expect(res.body[0].title).toEqual('sonic');
  });

  it('can get a record', async () => {
    const res = await mockRequest.get('/coolgames/1');
    expect(res.status).toBe(200);
    expect(typeof res.body).toEqual('object');
    expect(res.body.id).toEqual(1);
  });
});
