/** created 22-6-2023 */
import * as config from "./../configs/configs_index.js"
let allAttributeNames = null
let blockAttributeNames = null
let textAttributeNames = null
let listAttributeNames = null
export const getAllAttributeNames = () => {
  if (!allAttributeNames) {
    allAttributeNames = getTextAttributeNames().concat(getBlockAttributeNames())
  }
  return allAttributeNames
}
export const getBlockConfig = (attributeName) => config.blockAttributes[attributeName]
export const getBlockAttributeNames = () => {
  if (!blockAttributeNames) {
    blockAttributeNames = Object.keys(config.blockAttributes)
  }
  return blockAttributeNames
}
export const getTextConfig = (attributeName) => config.textAttributes[attributeName]
export const getTextAttributeNames = () => {
  if (!textAttributeNames) {
    textAttributeNames = Object.keys(config.textAttributes)
  }
  return textAttributeNames
}
export const getListAttributeNames = () => {
  if (!listAttributeNames) {
    listAttributeNames = []
    for (const key in config.blockAttributes) {
      //noinspection JSUnfilteredForInLoop
        const { listAttribute } = config.blockAttributes[key]
      if (listAttribute != null) {
        listAttributeNames.push(listAttribute)
      }
    }
  }
  return listAttributeNames
}