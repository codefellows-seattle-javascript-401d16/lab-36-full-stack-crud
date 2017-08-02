'use strict';

const uuid = require('uuid/v1');
const faker = require('faker');
const ExpenseCategory = require('../../model/category.js');

const mockExpenseCategory = (module.exports = {});

mockExpenseCategory.createOne = () => {
  return new ExpenseCategory({
    categoryId: uuid(),
    id: uuid(),
    name: faker.random.word(1),
    budget: 500,
    timeStamp: Date.now()
  }).save();
};

mockExpenseCategory.createMany = n => {
  let mockExpenseCategoryArray = new Array(n)
    .fill(0)
    .map(() => mockExpenseCategory.createOne());
  return Promise.all(mockExpenseCategoryArray);
};
