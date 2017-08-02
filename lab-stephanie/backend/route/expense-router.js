'use strict';

const jsonParser = require('body-parser').json();
const expenseRouter = (module.exports = new require('express').Router());

const Expense = require('../model/expense.js');

expenseRouter.post('/api/expenses', jsonParser, (req, res, next) => {
  new Expense(req.body).save().then(expense => res.json(expense)).catch(next);
});

expenseRouter.put('/api/expenses/:id', jsonParser, (req, res, next) => {
  Expense.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(expense => res.json(expense))
    .catch(next);
});

expenseRouter.get('/api/expenses/:id', (req, res, next) => {
  Expense.findById(req.params.id).then(expense => res.json(expense)).catch(next);
});

expenseRouter.delete('/api/expenses/:id', (req, res, next) => {
  Expense.findByIdAndRemove(req.params.id).then(res.sendStatus(204)).catch(next);
});
