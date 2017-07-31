'use strict';

const faker = require('faker');

const mockAlbum = require('./mock-album.js');
const Photo = require('../../model/photo.js');

const mockPhoto = (module.exports = {});

mockPhoto.createOne = () => {
  let result = {};
  return mockAlbum
    .createOne()
    .then(album => {
      result.album = album;
      return new Photo({
        name: faker.random.words(1),
        date: Date.now(),
        album: album._id.toString()
      }).save();
    })
    .then(photo => {
      result.photo = photo;
      return result;
    });
};

mockPhoto.createMany = n => {
  let result = {};
  return mockAlbum
    .createOne()
    .then(album => {
      result.album = album;
      let photoSavePromises = new Array(n).fill(0).map(() =>
        new Photo({
          name: faker.random.words(1),
          date: Date.now(),
          album: album._id.toString()
        }).save()
      );
      return Promise.all(photoSavePromises);
    })
    .then(photos => {
      result.photos = photos;
      return result;
    });
};
