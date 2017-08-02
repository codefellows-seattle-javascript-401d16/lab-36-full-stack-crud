'use strict';

const jsonParser = require('body-parser').json();
const studentRouter = module.exports = new require('express').Router();
const Student = require('../model/student.js');

studentRouter.post('/api/students', jsonParser, (req, res, next) => {
  console.log('hit POST /api/students');

  new Student(req.body)
  .save()
  .then(student => res.json(student))
  .catch(next);
});

studentRouter.put('/api/students/:id', jsonParser, (req, res, next) => {
  console.log('hit PUT /api/students/:id');
  let options = {
    new: true,
    runValidators: true,
  };

  Student.findByIdAndUpdate(req.params.id, req.body, options)
  .then(student => res.json(student))
  .catch(next);
});
