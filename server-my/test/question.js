// npm packages
import request from 'supertest';
import moment from 'moment';
// our packages
import app from '../src/app';

export default (test) => {
  const sendData = {text: 'Test my new Question?', expirationDate: moment().add(1, 'days').toDate()};
  test('POST /api/question', (t) => {
    request(app)
      .post('/api/question')
      .set('x-access-token', app.get('token'))
      .send(sendData)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const expectedBody = sendData;// app.get('user');
        const actualBody = res.body;

        t.error(err, 'No Error');
        app.set('question', actualBody);
        t.equal(actualBody.text, expectedBody.text, 'retrieve same question text');
        t.equal(moment(actualBody.expirationDate).isSame(expectedBody.expirationDate), true, 'retrieve same question date');
        t.end();
      });
  });
  test('GET /api/question/:id - get question', (t) => {
    request(app)
      .get(`/api/question/${app.get('question').id}`)
      .set('x-access-token', app.get('token'))
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const expectedBody = sendData;// app.get('user');
        const actualBody = res.body;

        t.error(err, 'No Error');
        t.equal(actualBody.text, expectedBody.text, 'retrieve same question text');
        t.equal(moment(actualBody.expirationDate).isSame(expectedBody.expirationDate), true, 'retrieve same question date');
        t.end();
      });
  });
  test('GET /api/question/ - get 10 questions orderby dcreation date', (t) => {
    request(app)
      .get('/api/question/')
      .set('x-access-token', app.get('token'))
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const expectedBody = sendData;// app.get('user');
        const actualBody = res.body[0];

        t.error(err, 'No Error');
        t.equal(actualBody.text, expectedBody.text, 'retrieve same question text');
        t.equal(moment(actualBody.expirationDate).isSame(expectedBody.expirationDate), true, 'retrieve same question date');
        t.end();
      });
  });
  test('POST /api/question/:id/answer - add answer to question', (t) => {
    console.log(app.get('question').id);
    request(app)
      .post(`/api/question/${app.get('question').id}/answer`)
      .set('x-access-token', app.get('token'))
      .send({answer: 'test answer'})
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const expectedBody = sendData;// app.get('user');
        const actualBody = res.body;

        t.error(err, 'No Error');
        t.equal(actualBody.answers.length, 1, 'retrieve same amount of answers 1');
        t.equal(actualBody.text, expectedBody.text, 'retrieve same question text');
        t.equal(moment(actualBody.expirationDate).isSame(expectedBody.expirationDate), true, 'retrieve same question date');
        t.end();
      });
  });
};
