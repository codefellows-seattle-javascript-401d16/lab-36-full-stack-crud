'use strict';

const mongoose = require('mongoose');
const List = require('./school.js');

const studentSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  school: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'school'},
});

// hooks go here
studentSchema.pre('save', function(next) {
  console.log('pre save doc', this);
  List.findById(this.school)
  .then(school => {
    let studentIDSet = new Set(school.students);
    studentIDSet.add(this._id);
    school.students = Array.from(studentIDSet);
    return school.save();
  })
  .then(() => next())
  .catch(() =>
    next(new Error('validation failed to create student because school does not exist')));
});

//studentSchema.post('save', function(doc, next) {
  //console.log('post save doc', doc)
  //List.findById(doc.school)
  //.then(school => {
    //school.students.push(doc._id)
    //return school.save()
  //})
  //.then(() => next())
  //.catch(next)
//})

studentSchema.post('remove', function(doc, next){
  console.log('post remove doc', doc);
  List.findById(doc.school)
  .then(school => {
    school.students = school.students.filter(student => student._id !== doc._id);
    return school.save();
  })
  .then(() => next())
  .catch(next);
});


module.exports = mongoose.model('student', studentSchema);
