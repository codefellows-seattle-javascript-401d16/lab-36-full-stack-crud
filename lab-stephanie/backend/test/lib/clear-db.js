'use strict';

const Category = require('../../model/category.js');
const Expense = require('../../model/expense.js');

module.exports = () => {
  return Promise.all([Category.remove({}), Expense.remove({})]);
};
