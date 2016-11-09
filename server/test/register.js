// npm packages
import request from 'supertest';

// our packages
import app from '../src/app';

export default (test) => {
  test('Should register with given required data', (t) => {
    request(app)
      .post('/api/register')
      .send({
        name: 'test',
        surname: 'tset',
        login: 'test',
        email: 'test@klayas.com',
        password: '123',
        passwordRepeat: '123'})
      .expect(201)
      .end((err) => {
        t.error(err, 'No error');
        t.end();
      });
  });

  test('Should register second user with given required data', (t) => {
    request(app)
      .post('/api/register')
      .send({
        name: 'test2',
        surname: 'tset2',
        login: 'test2',
        email: 'test2@klayas.com',
        password: '123',
        passwordRepeat: '123'})
      .expect(201)
      .end((err) => {
        t.error(err, 'No error');
        t.end();
      });
  });

  test('Should fail to register with same username', (t) => {
    request(app)
      .post('/api/register')
      .send({
        name: 'test',
        surname: 'tset',
        login: 'test',
        email: 'test@klayas.com',
        password: '123',
        passwordRepeat: '123'})
      .expect(403)
      .end((err, res) => {
        const expectedBody = {error: 'User already exists!'};
        const actualBody = res.body;

        t.error(err, 'No error');
        t.deepEqual(actualBody, expectedBody, 'Retrieve body');
        t.end();
      });
  });

  test('Should fail to register with mismatching passwords', (t) => {
    request(app)
      .post('/api/register')
      .send({
        name: 'test3',
        surname: 'tset3',
        login: 'test3',
        email: 'test3@klayas.com',
        password: '123',
        passwordRepeat: '321'})
      .expect(400)
      .end((err, res) => {
        const expectedBody = {error: 'passwords do not match!'};
        const actualBody = res.body;

        t.error(err, 'No error');
        t.deepEqual(actualBody, expectedBody, 'Retrieve body');
        t.end();
      });
  });
};
