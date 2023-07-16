import browser from "./browser.js"
import {removeNode } from "./../helpers/dom_helper.js"
import * as HE from "./../toolbox/htmlElements.js"
const input = {
  level2Enabled: true,
  getLevel() {
    if (this.level2Enabled && browser.supportsInputEvents) {
      return 2
    } else {
      return 0
    }
  },
  pickFiles(callback) {
    const input = HE.input('file-input',this.fileInputId,{ type: "file", multiple: true, hidden: true,})
    input.addEventListener("change", () => {
      callback(input.files)
      removeNode(input)
    })
    removeNode(document.getElementById(this.fileInputId))
    document.body.appendChild(input)
    input.click()
  }
}
export default input