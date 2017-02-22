// npm packages
import request from 'supertest';

// our packages
import app from '../src/app';

export default (test) => {
  test('GET /', (t) => {
    request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /text\/html/)
    .end((err, res) => {
      const expectedBody = 'Hello world!';
      const actualBody = res.text;

      t.error(err, 'No error');
      t.equal(actualBody, expectedBody, 'Retrieve body');
      t.end();
    });
  });
  test('should get 404 page not exists', (t) => {
    request(app)
      .get('/GETShouldFailOnRandomURL')
      .expect(404)
      .expect('Content-Type', /text\/html/)
      .end((err, res) => {
        const expectedBody = 'Cannot GET /GETShouldFailOnRandomURL\n';
        const actualBody = res.text;

        t.error(err, 'No error');
        t.equal(actualBody, expectedBody, 'Retrieve body');
        t.end();
      });
  });
  test('should fail to sutenticated request', (t) => {
    request(app)
    .get('/tauth')
    .expect(401)
    .end((err, res) => {
      const expectedBody = 'Unauthorized';
      const actualBody = res.text;

      t.error(err, 'No error');
      t.equal(actualBody, expectedBody, 'Retrieve body');
      t.end();
    });
  });
  test('should succeed to sutenticated request', (t) => {
    request(app)
    .get('/tauth')
    .set('x-access-token', app.get('token'))
    .expect(200)
    .end((err, res) => {
      const expectedBody = 'auth!';
      const actualBody = res.text;

      t.error(err, 'No error');
      t.equal(actualBody, expectedBody, 'Retrieve body');
      t.end();
    });
  });
};

