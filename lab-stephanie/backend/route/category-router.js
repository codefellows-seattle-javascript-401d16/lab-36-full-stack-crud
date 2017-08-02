'use strict';

const jsonParser = require('body-parser').json();
const categoryRouter = (module.exports = new require('express').Router());

const ExpenseCategory = require('../model/category.js');

categoryRouter.post('/api/categories', jsonParser, (req, res, next) => {
  console.log(req.body);
  console.log('hit POST /api/categories');
  new ExpenseCategory(req.body)
    .save()
    .then(category => res.json(category))
    .catch(next);
});

categoryRouter.get('/api/categories/:id', (req, res, next) => {
  console.log('hit GET /api/categories/:id');
  ExpenseCategory.findById(req.params.id)
    .then(category => res.json(category))
    .catch(next);
});

categoryRouter.get('/api/categories', (req, res, next) => {
  console.log('hit /api/categories');

  let pageNumber = Number(req.query.page);
  if (!pageNumber || pageNumber < 1) pageNumber = 1;
  pageNumber--;

  ExpenseCategory.find({})
    .sort({ title: 'asc' })
    .skip(pageNumber * 50)
    .limit(50)
    .then(categories => res.json(categories))
    .catch(next);
});

categoryRouter.put('/api/categories/:id', jsonParser, (req, res, next) => {
  console.log('hit PUT /api/categories/:id', req.params);
  ExpenseCategory.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(category => {
      res.json(category);
    })
    .catch(next);
});

categoryRouter.delete('/api/categories/:id', (req, res, next) => {
  console.log('hit DELETE /api/categories/:id');

  ExpenseCategory.findByIdAndRemove(req.params.id)
    .then(res.sendStatus(204))
    .catch(next);
});
