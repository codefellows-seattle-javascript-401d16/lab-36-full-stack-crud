'use strict';

const faker = require('faker');

const mockCategory = require('./mock-category.js');
const Expense = require('../../model/expense.js');

const mockExpense = (module.exports = {});

mockExpense.createOne = () => {
  let result = {};
  return mockCategory
    .createOne()
    .then(category => {
      result.category = category;
      return new Expense({
        name: faker.random.words(1),
        date: Date.now(),
        category: category._id.toString()
      }).save();
    })
    .then(expense => {
      result.expense = expense;
      return result;
    });
};

mockExpense.createMany = n => {
  let result = {};
  return mockCategory
    .createOne()
    .then(category => {
      result.category = category;
      let expenseSavePromises = new Array(n).fill(0).map(() =>
        new Expense({
          name: faker.random.words(1),
          date: Date.now(),
          category: category._id.toString()
        }).save()
      );
      return Promise.all(expenseSavePromises);
    })
    .then(expenses => {
      result.expenses = expenses;
      return result;
    });
};
