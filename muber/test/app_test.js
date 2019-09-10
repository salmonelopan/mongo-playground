const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('The Express App', () => {
  it('handle a GET resquest to /api', (done) =>{
    request(app)
      .get('/api')
      .end((err, response) => {
        assert(response.body.hi === 'there');
        done();
      });
  });
});