const isArray = Array.isArray
const isString = (value: any): value is string => typeof value?.valueOf() === 'string'
const isNumber = (value: any): value is number  => typeof value?.valueOf() === 'number'
const isFunction = (value: any): value is (...args: any[]) => any => typeof value?.valueOf() === 'function'
const isBoolean = (value: any): value is boolean => typeof value?.valueOf() === 'boolean'

const TypeChecker = {
  isArray,
  isString,
  isNumber,
  isFunction,
  isBoolean
}

export default TypeChecker
