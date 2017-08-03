export const log = (...args) =>
  __DEBUG__ ? console.log(...args) : undefined;

export const logError = (...args) =>
  __DEBUG__ ? console.error(...args) : undefined;

export const renderIf = (test, component) =>
  test ? component : undefined;

export const classToggler = (config) =>
  Object.keys(config).filter(key =>
    config[key]).join(' ');

export const map = (year, ...args) =>
  Array.prototype.map.apply(year, args);

export const filter = (year, ...args) =>
  Array.prototype.filter.apply(year, args);

export const reduce = (year, ...args) =>
  Array.prototype.reduce.apply(year, args);
