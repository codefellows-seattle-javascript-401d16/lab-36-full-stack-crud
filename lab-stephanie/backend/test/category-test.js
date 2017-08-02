'use strict';

require('dotenv').config({ path: `${__dirname}/../.test.env` });

const faker = require('faker');
const expect = require('expect');
const superagent = require('superagent');

const server = require('../lib/server.js');
const clearDB = require('./lib/clear-db.js');
const mockExpenseCategory = require('./lib/mock-category.js');

let tempExpenseCategory;
const API_URL = process.env.API_URL;

describe('testing /api/categorys', () => {
  before(server.start);
  after(server.stop);
  afterEach(clearDB);

  describe('testing POST /api/categorys', () => {
    let data = {
      name: faker.random.word(1),
      budget: 500
    };
    it('should respond with an category', () => {
      return superagent
        .post(`${API_URL}/api/categorys`)
        .send(data)
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body.name).toEqual(data.name);
          expect(res.body._id).toExist();
        });
    });

    it('should respond with status 400 bad request body ', () => {
      return superagent
        .post(`${API_URL}/api/categorys`)
        .send(null)
        .catch(err => {
          expect(err.status).toEqual(400);
        });
    });

    it('should respond with status 409', () => {
      return superagent
        .post(`${API_URL}/api/categorys`)
        .send(data)
        .catch(err => {
          expect(err.status).toEqual(409);
        });
    });
  });

  describe('testing GET /api/categorys/:id', () => {
    it('should respond with an category', () => {
      let tempExpenseCategory;
      return mockExpenseCategory
        .createOne()
        .then(category => {
          tempExpenseCategory = category;
          return superagent.get(`${API_URL}/api/categorys/${category._id}`);
        })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body.name).toEqual(tempExpenseCategory.name);
          expect(res.body._id).toExist();
        });
    });
  });

  it('should respond with a an array of expenses', () => {
    let tempExpenseCategorys;
    return mockExpenseCategory
      .createMany(10)
      .then(categorys => {
        tempExpenseCategorys = categorys;
        return superagent.get(`${API_URL}/api/categorys?page=2`);
      })
      .then(res => {
        expect(res.status).toEqual(200);
        res.body.forEach(category => {
          expect(category._id).toExist();
          expect(category.expense).toEqual([]);
        });
      });
  });

  it('should respond with 404 not found', () => {
    let tempExpenseCategorys;
    return mockExpenseCategory
      .createMany(10)
      .then(categorys => {
        tempExpenseCategorys = categorys;
        return superagent.get(`${API_URL}/api/categorys/123`);
      })
      .catch(err => {
        expect(err.status).toEqual(404);
      });
  });

  describe('testing PUT /api/categorys/:id', () => {
    it('should respond with the updated category', () => {
      let tempExpenseCategory;
      return mockExpenseCategory
        .createOne()
        .then(category => {
          tempExpenseCategory = category;
          return superagent
            .put(`${API_URL}/api/expenses/${tempExpenseCategory._id}`)
            .send({ name: 'cats' });
        })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body.name).toEqual('cats');
        });
    });

    it('should respond with status 400 invalid body', () => {
      let tempExpenseCategory;
      return mockExpenseCategory
        .createOne()
        .then(category => {
          tempExpenseCategory = category;
          return superagent
            .put(`${API_URL}/api/expenses/${tempExpenseCategory._id}`)
            .send(null);
        })
        .catch(err => {
          expect(err.status).toEqual(400);
        });
    });

    it('should respond with status 404 not found', () => {
      let tempExpenseCategory;
      return mockExpenseCategory
        .createOne()
        .then(category => {
          tempExpenseCategory = category;
          return superagent
            .put(`${API_URL}/api/expenses/123`)
            .send({ name: 'bird' });
        })
        .catch(err => {
          expect(err.status).toEqual(404);
        });
    });
  });

  describe('testing DELETE /api/categorys/:id', () => {
    it('should respond with status 204 - deleted', () => {
      let tempExpenseCategory;
      return mockExpenseCategory
        .createOne()
        .then(category => {
          tempExpenseCategory = category;
          return superagent.delete(`${API_URL}/api/categorys/${category._id}`);
        })
        .then(res => {
          expect(res.status).toEqual(204);
        });
    });
  });

  it('should respond with status 404 bad request', () => {
    let tempExpenseCategory;
    return mockExpenseCategory
      .createOne()
      .then(category => {
        tempExpenseCategory = category;
        return superagent.get(`${API_URL}/api/categorys/123`);
      })
      .catch(err => {
        expect(err.status).toEqual(404);
      });
  });
});
