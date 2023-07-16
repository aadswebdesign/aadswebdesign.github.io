/** created 29-6-2023 */
export const extend = function(properties) {
  for (const key in properties) {
	  //noinspection JSUnfilteredForInLoop
      this[key] = properties[key]
  }
  return this
}
export const copyObject = function(object = {}) {
  const result = {}
  for (const key in object) {
    result[key] = object[key]
  }
  return result
}
export const objectsAreEqual = function(a = {}, b = {}) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false
  }
  for (const key in a) {
    const value = a[key]
    if (value !== b[key]) {
      return false
    }
  }
  return true
}
export const arraysAreEqual = function(a = [], b = []) {
  if (a.length !== b.length) {
    return false
  }
  for (let index = 0; index < a.length; index++) {
    const value = a[index]
    if (value !== b[index]) {
      return false
    }
  }
  return true
}
export const arrayStartsWith = (a = [], b = []) => arraysAreEqual(a.slice(0, b.length), b)
export const spliceArray = function(array, ...args) {
  const result = array.slice(0)
  result.splice(...args)
  return result
}
export const summarizeArrayChange = function(oldArray = [], newArray = []) {
  const added = []
  const removed = []
  const existingValues = new Set()
  oldArray.forEach((value) => {
    existingValues.add(value)
  })
  const currentValues = new Set()
  newArray.forEach((value) => {
    currentValues.add(value)
    if (!existingValues.has(value)) {
      added.push(value)
    }
  })
  oldArray.forEach((value) => {
    if (!currentValues.has(value)) {
      removed.push(value)
    }
  })
  return { added, removed }
}
export const defer = (fn) => setTimeout(fn, 1)
import { getDOMRange, getDOMSelection, setDOMRange } from "../observers/selection_change_observer.js"
export { getDOMSelection, getDOMRange, setDOMRange }
