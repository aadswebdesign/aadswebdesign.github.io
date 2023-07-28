import browser from "./browser.js"
import { makeElement, removeNode } from "./../core/helpers/dom.js"

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
    const input = makeElement("input", { type: "file", multiple: true, hidden: true, id: this.fileInputId })

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
