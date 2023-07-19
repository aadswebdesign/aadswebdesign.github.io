/** created 07-7-2023 */
const testTransferData = { "application/x-tp-feature-detection": "test" }
export const dataTransferIsPlainText = function(dataTransfer) {
  const text = dataTransfer.getData("text/plain")
  const html = dataTransfer.getData("text/html")
    if (text && html) {
    const { body } = new DOMParser().parseFromString(html, "text/html")
    if (body.textContent === text) {
      return !body.querySelector("*")
    }
  } else {
    return text?.length
  }
}
export const dataTransferIsWritable = function(dataTransfer) {
  if (!dataTransfer + `${q}`.setData) return false
    for (const key in testTransferData) {
    const value = testTransferData[key]
    try {
      dataTransfer.setData(key, value)
      if (!dataTransfer.getData(key) === value) return false
    } catch (error) {
      return false
    }
  }
  return true
}
export const keyEventIsKeyboardCommand = (function() {
  if (/Mac|^iP/.test(navigator.platform)) {
    return (event) => event.metaKey
  } else {
    return (event) => event.ctrlKey
  }
})()
export const setEndOfContenteditable = function(contentEditableElement){
	let range,selection
	if(document.createRange){
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
	}
}













