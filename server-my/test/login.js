// npm packages
import request from 'supertest';

// our packages
import app from '../src/app';

export default (test) => {
  test('should login success test', (t) => {
    request(app)
    .post('/api/login')
    .send({login: 'test', password: '123'})
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      const actualBody = res.body;

      t.error(err, 'No error');
      t.ok(actualBody.user, 'User exists');
      t.equal(actualBody.user.login, 'test', 'Login matches request');
      t.end();
    });
  });
  test('should Fail login when password not valid return 401 test', (t) => {
    request(app)
    .post('/api/login')
    .send({login: 'test1', password: '123'})
    .expect(401)
    .end((err) => {
      t.error(err, 'No error');
      t.end();
    });
  });
  test('should Fail login when login not valid return 401 test', (t) => {
    request(app)
    .post('/api/login')
    .send({login: 'test', password: '1233'})
    .expect(401)
    .end((err) => {
      t.error(err, 'No Error');
      t.end();
    });
  });
};

