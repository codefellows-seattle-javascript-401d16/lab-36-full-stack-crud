'use strict';

const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
  categoryId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  timestamp: { type: Date, requires: true, default: Date.now }
});

module.exports = mongoose.model('expense', expenseSchema);
