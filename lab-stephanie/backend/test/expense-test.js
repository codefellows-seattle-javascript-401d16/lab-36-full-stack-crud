'use strict';

require('dotenv').config({ path: `${__dirname}/../.test.env` });

const faker = require('faker');
const expect = require('expect');
const superagent = require('superagent');

const clearDB = require('./lib/clear-db');
const server = require('../lib/server.js');
const Category = require('../model/category.js');
const mockCategory = require('./lib/mock-category.js');
const mockExpense = require('./lib/mock-expenses.js');

const API_URL = process.env.API_URL;

describe('testing /api/expenses', () => {
  before(server.start);
  after(server.stop);
  afterEach(clearDB);

  describe('testing POST /api/expenses', () => {
    let tempCategory;
    let tempExpense;
    it('should create a expense', () => {
      return mockCategory
        .createOne()
        .then(category => {
          tempCategory = category;
          return superagent.post(`${API_URL}/api/expenses`).send({
            name: 'beach',
            timeStamp: Date.now(),
            category: tempCategory._id
          });
        })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body._id).toExist();
          expect(res.body.name).toEqual('beach');
          tempExpense = res.body;
          return Category.findById(tempCategory._id);
        })
        .then(category => {
          expect(category.expense.length).toEqual(1);
        });
    });

    it('should respond with a 400 for having a bad id ', () => {
      return superagent
        .post(`${API_URL}/api/expenses`)
        .send({
          name: faker.random.word(1),
          timeStamp: Date.now(),
          category: 'fjashdfasdfhasfh'
        })
        .catch(res => {
          expect(res.status).toEqual(400);
        });
    });

    it('should respond with status 409', () => {
      return mockExpense.createOne().then(data => {
        tempCategory = data.category;
        tempExpense = data.expense;
        return superagent
          .post(`${API_URL}/api/expenses`)
          .send(tempExpense)
          .catch(res => {
            expect(res.status).toEqual(409);
          });
      });
    });
  });

  describe('testing PUT /api/expenses/:id', () => {
    it('should respond with the updated expense', () => {
      let tempCategory, tempExpense;
      return mockExpense
        .createOne()
        .then(({ expense, category }) => {
          tempExpense = expense;
          tempCategory = category;
          return superagent
            .put(`${API_URL}/api/expenses/${tempExpense._id}`)
            .send({ name: 'cats' });
        })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body.name).toEqual('cats');
          expect(res.body._id).toEqual(tempExpense._id);
          return Category.findById(tempCategory._id);
        })
        .then(category => {
          expect(category.expense.length).toEqual(1);
        });
    });

    it('should respond with status 400 invalid request body', () => {
      let tempCategory, tempExpense;
      return mockExpense
        .createOne()
        .then(({ expense, category }) => {
          tempExpense = expense;
          tempCategory = category;
          return superagent
            .put(`${API_URL}/api/expenses/${tempExpense._id}`)
            .send(null);
        })
        .catch(err => {
          expect(err.status).toEqual(400);
        });
    });

    it('should respond with status 404 not found', () => {
      let tempCategory, tempExpense;
      return mockExpense
        .createOne()
        .then(({ expense, category }) => {
          tempExpense = expense;
          tempCategory = category;
          return superagent
            .put(`${API_URL}/api/expenses/124`)
            .send({ name: 'cats' });
        })
        .catch(err => {
          expect(err.status).toEqual(404);
        });
    });
  });

  describe('testing GET /api/expenses/:id', () => {
    it('should respond with a expense', () => {
      let tempCategory, tempExpense;
      return mockExpense
        .createOne()
        .then(({ expense, category }) => {
          tempExpense = expense;
          tempCategory = category;
          return superagent.get(`${API_URL}/api/expenses/${tempExpense._id}`);
        })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body.name).toEqual(tempExpense.name);
        });
    });

    it('should respond with status 404 not found', () => {
      let tempCategory, tempExpense;
      return mockExpense
        .createOne()
        .then(({ expense, category }) => {
          tempExpense = expense;
          tempCategory = category;
          return superagent.get(`${API_URL}/api/expenses/124`);
        })
        .catch(err => {
          expect(err.status).toEqual(404);
        });
    });
  });

  describe('testing DELETE /api/expenses/:id', () => {
    it('should respond with status 204 -deleted', () => {
      let tempCategory, tempExpense;
      return mockExpense
        .createOne()
        .then(({ expense, category }) => {
          tempExpense = expense;
          tempCategory = category;
          return superagent.delete(
            `${API_URL}/api/expenses/${tempExpense._id}`
          );
        })
        .then(res => {
          expect(res.status).toEqual(204);
        });
    });

    it('should respond with status 404 not found', () => {
      let tempCategory, tempExpense;
      return mockExpense
        .createOne()
        .then(({ expense, category }) => {
          tempExpense = expense;
          tempCategory = category;
          return superagent.delete(`${API_URL}/api/expenses/124`);
        })
        .catch(err => {
          expect(err.status).toEqual(404);
        });
    });
  });
});
