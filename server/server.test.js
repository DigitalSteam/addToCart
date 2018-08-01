const request = require('supertest');
const app = require('./index.js');

describe('Server test', () => {
  it('get data from games table', async () => {
    const response = await request(app).get('/api/games/1');
    expect(response.statusCode).toBe(200);
  });

  it('get the correct data from api', async () => {
    const response = await request(app).get('/api/games/1');
    expect(response.text).toBe('{\"name\":\"dolor deleniti iste\",\"price\":294}')
  });

});