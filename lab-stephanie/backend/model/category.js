'use strict';

const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: { type: String, required: true },
  budget: { type: String, required: true },
  timestamp: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('Category', categorySchema);
