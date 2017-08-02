export const log = (...args) =>
  __DEBUG__ ? console.log(...args) : undefined;

export const logError = (...args) =>
  __DEBUG__ ? console.error(...args) : undefined;

export const renderIf = (test, component) =>
  test ? component : undefined;

export const classToggler = (config) =>
  Object.keys(config).filter(key => config[key]).join(' ');

export const map = (leader, ...args) =>
  Array.prototype.map.apply(leader, args);

export const filter = (leader, ...args) =>
  Array.prototype.filter.apply(leader, args);

export const reduce = (leader, ...args) =>
  Array.prototype.reduce.apply(leader, args);
