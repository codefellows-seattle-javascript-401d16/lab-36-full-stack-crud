import React from 'react';
import {renderIf, log, logError, classToggler} from '../lib/util.js';
describe('Testing util functions', () => {
  describe('Testing log functions', () => {
    let debugCache;

    beforeAll(() => {
      if(global.__DEBUG__)
        debugCache = global.__DEBUG__;
    });
    afterAll(() => {
      global.__DEBUG__ = debugCache;
    });

    test('Should invoke console.log', () => {
      global.__DEBUG__ = true;
      const spy = jest.spyOn(console, 'log');
      log('testing', 'log');
      expect(spy).toHaveBeenCalledWith('testing', 'log');
      spy.mockClear();
    });

    test('Should invoke console.error', () => {
      global.__DEBUG__ = true;
      const spy = jest.spyOn(console, 'error');
      logError('testing', 'error');
      expect(spy).toHaveBeenCalledWith('testing', 'error');
      spy.mockClear();
    });
  });

  describe('Testing renderIf', () => {
    test('Should pass and return the component', () => {
      let result = renderIf(true, <div></div>);
      expect(result).toEqual(<div></div>);
    });
    test('Should fail and return undefined', () => {
      let result = renderIf(false, <div></div>);
      expect(result).toBeUndefined();
    });
  });

  describe('Testing classToggler', () => {
    test('Should return a string with 2 classes', () => {
      let result = classToggler({ test: true, fail: false, yes: true });
      expect(result).toEqual('test yes');
    });
    test('Should return an empty string', () => {
      let result = classToggler({ test: false, fail: false, yes: false });
      expect(result).toEqual('');
    });
  });
});
