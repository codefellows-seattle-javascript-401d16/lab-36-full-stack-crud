'use strict';

const Album = require('../../model/album.js');
const Photo = require('../../model/photo.js');

module.exports = () => {
  return Promise.all([Album.remove({}), Photo.remove({})]);
};
