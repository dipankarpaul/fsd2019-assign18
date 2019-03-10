import app from '../../app';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

let routeNameId, routeNameDetails;
const routeName = dataObj;

describe('routeName API.......................', () => {

  describe('POST /api/routeName', () => {
    it('it should save a routeName and return an object', () => {
      return request(app)
        .post('/routeName')
        .send(routeName)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('testProp');
          routeNameId = res.body._id;
          routeNameDetails = res.body;
        });
    });
  });

  describe('GET /api/routeName', () => {
    it('it should respond with routeName array', () => {
      return request(app)
        .get('/routeName')
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body[0]).to.have.property('testProp');
        });
    });
  });

  describe('GET /api/routeName/:id', () => {
    it('it should respond with routeName object', () => {
      return request(app)
        .get('/routeName/' + routeNameId)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('testProp');
        });
    });
  });

  describe('PUT /api/routeName/:id', () => {
    it('it should respond with updated routeName data', () => {
      routeNameDetails.testProp = 'test 2';
      return request(app)
        .put('/routeName/' + routeNameId)
        .send(routeNameDetails)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body.testProp).to.eql('test 2');
        });
    });
  });

  describe('DELETE /api/routeName/:id', () => {
    it('it should delete the data and respond with deleated data', () => {
      return request(app)
        .del('/routeName/' + routeNameId)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body.testProp).to.eql('test 2');
        });
    });
  });
});
