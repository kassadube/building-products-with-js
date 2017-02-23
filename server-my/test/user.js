// npm packages
import request from 'supertest';

// our packages
import app from '../src/app';

export default (test) => {
  test('GET /api/user/:id', (t) => {
    request(app)
      .get(`/api/user/${app.get('user').id}`)
      .set('x-access-token', app.get('token'))
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const expectedBody = app.get('user');
        const actualBody = res.body;

        t.error(err, 'No Error');
        t.deepEqual(actualBody, expectedBody, 'Retrieve body');
        t.end();
      });
  });
  test('GET /api/user/me', (t) => {
    request(app)
      .get('/api/user/me')
      .set('x-access-token', app.get('token'))
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const expectedBody = app.get('user');
        const actualBody = res.body;

        t.error(err, 'No Error');
        t.deepEqual(actualBody, expectedBody, 'Retrieve body');
        t.end();
      });
  });
  test('GET /api/user/:id non exist id', (t) => {
    request(app)
      .get('/api/user/1234')
      .set('x-access-token', app.get('token'))
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const expectedBody = {error: 'User does not exist'};
        const actualBody = res.body;

        t.error(err, 'No Error');
        t.deepEqual(actualBody, expectedBody, 'Get the correct error');
        t.end();
      });
  });
  test('POST /api/user/:id - update with same data', (t) => {
    request(app)
      .post(`/api/user/${app.get('user').id}`)
      .set('x-access-token', app.get('token'))
      .send({login: 'test'})
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const expectedBody = app.get('user');
        delete expectedBody.password;
        const actualBody = res.body;

        t.error(err, 'No Error');
        t.deepEqual(actualBody, expectedBody, 'Retrieve body');
        t.end();
      });
  });
  test('POST /api/user/:id', (t) => {
    request(app)
      .post(`/api/user/${app.get('user').id}`)
      .set('x-access-token', app.get('token'))
      .send({login: 'test123'})
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const expectedBody = {
          ...app.get('user'),
          login: 'test123',
        };
        delete expectedBody.password;
        const actualBody = res.body;

        t.error(err, 'No Error');
        t.deepEqual(actualBody, expectedBody, 'Retrieve body');
        t.end();
      });
  });
};
