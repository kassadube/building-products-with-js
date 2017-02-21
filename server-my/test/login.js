// npm packages
import test from 'tape';
import request from 'supertest';

// our packages
import app from '../src/app';

test('POST /login', (t) => {
  request(app)
    .post('/login')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      const expectedBody = {
        userName: 'test',
        id: 1,
      };
      const actualBody = res.body;

      t.error(err, 'No error');
      t.deepEqual(actualBody, expectedBody, 'Retrieve user');
      t.end();
    });
});
