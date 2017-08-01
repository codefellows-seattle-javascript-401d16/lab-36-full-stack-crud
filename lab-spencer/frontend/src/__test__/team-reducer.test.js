import React from 'react';
import teamReducer from '../reducer/team.js';

describe('Testing team reducer', () => {
  describe('TEAM_SET', () => {

  });

  describe('TEAM_CREATE', () => {
    test('It should fail validation', () => {
      let action = {
        type: 'TEAM_CREATE',
        payload: {
          _id: 4124124,
          city: 'Seattle',
          state: 'Washington',
        },
      };
      expect(() => teamReducer(undefined, action)).toThrow();
    });

    test('It should return the payload as element 0', () => {
      let action = {
        type: 'TEAM_CREATE',
        payload: {
          _id: 4124124,
          name: 'Silvertips',
          city: 'Everett',
          state: 'Washington',
        },
      };
      expect(teamReducer(undefined, action)[0]).toEqual(action.payload);
    });

    test('It should return the payload as element 1', () => {
      let action = {
        type: 'TEAM_CREATE',
        payload: {
          _id: 4124124,
          name: 'Thunderbirds',
          city: 'Kent',
          state: 'Washington',
        },
      };
      expect(teamReducer(['random'], action)[1]).toEqual(action.payload);
    });
  });

  describe('TEAM_UPDATE', () => {
    test('It should return the updated payload as element 0', () => {
      let action = {
        type: 'TEAM_CREATE',
        payload: {
          _id: 4124124,
          name: 'Silvertips',
          city: 'Everett',
          state: 'Washington',
        },
      };
      let original = teamReducer(undefined, action);
      action.type = 'TEAM_UPDATE';
      action.payload.name = 'new name';
      expect(teamReducer(original, action)[0].name).toEqual(action.payload.name);
    });

    test('It should return an empty array', () => {
      let action = {
        type: 'TEAM_UPDATE',
        payload: {
          _id: 4124124,
          name: 'Silvertips',
          city: 'Everett',
          state: 'Washington',
        },
      };
      expect(teamReducer(undefined, action)).toEqual([]);
    });
  });

  describe('TEAM_DELETE', () => {
    test('It should return an empty array', () => {
      let action = {
        type: 'TEAM_CREATE',
        payload: {
          _id: 4124124,
          name: 'Thunderbirds',
          city: 'Kent',
          state: 'Washington',
        },
      };
      let original = expect(teamReducer(undefined, action).length).toEqual(1);
      action.type = 'TEAM_DELETE';
      expect(teamReducer(original, action).length).toEqual(0);
    });
  });
});
