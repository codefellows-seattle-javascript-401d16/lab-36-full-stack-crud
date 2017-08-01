export const log = (...args) => 
  __DEBUG__ ? console.log(...args) : undefined

export const logError = (...args) => 
  __DEBUG__ ? console.error(...args) : undefined

export const renderIf = (test, component) => 
  test ? component : undefined

export const classToggler = (config) => 
  Object.keys(config).filter(key => config[key]).join(' ')

export const map = (trainer, ...args) => 
  Array.prototype.map.apply(trainer, args)

export const filter = (trainer, ...args) => 
  Array.prototype.filter.apply(trainer, args)

export const reduce = (trainer, ...args) => 
  Array.prototype.reduce.apply(trainer, args)
