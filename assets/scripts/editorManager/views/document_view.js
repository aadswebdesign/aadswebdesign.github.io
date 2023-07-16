/** created 22-6-2023 */
import {defer } from "./../helpers/helpers_index.js"
import * as HE from "./../toolbox/htmlElements.js"
import ElementStore from "./../collections/element_store.js"
import ObjectGroup from "./../collections/object_group.js"
import ObjectView from "./object_view.js"
import BlockView from "./block_view.js"
export default class DocumentView extends ObjectView {
  static render(document) {
    const element = HE.div("document-view")
	console.log('DocumentView: ',element)//.previousElementSibling
    const view = new this(document, { element })
    view.render()
    view.sync()
    return element
  }
  constructor() {
    super(...arguments)
    this.element = this.options.element
    this.elementStore = new ElementStore()
    this.setDocument(this.object)
  }
  setDocument(document) {
    if (!document.isEqualTo(this.document)) {
      this.document = this.object = document
    }
  }
  render() {
    this.childViews = []
    this.shadowElement =  HE.div("shadow-el")
    if (!this.document.isEmpty()) {
		const objects = ObjectGroup.groupObjects(this.document.getBlocks(), { asTree: true })
		Array.from(objects).forEach((object) => {
		const view = this.findOrCreateCachedChildView(BlockView, object)
        Array.from(view.getNodes()).map((node) => this.shadowElement.appendChild(node))
      })
    }
  }//might not need this
  isSynced() {
    return elementsHaveEqualHTML(this.shadowElement, this.element)
  }
  sync() {
    const fragment = this.createDocumentFragmentForSync()
    while (this.element.lastChild) {
      this.element.removeChild(this.element.lastChild)
    }
    this.element.appendChild(fragment)
    return this.didSync()
  }
  // Private
  didSync() {
    this.elementStore.reset(findStoredElements(this.element))
    return defer(() => this.garbageCollectCachedViews())
  }
  createDocumentFragmentForSync() {
    const fragment = document.createDocumentFragment()
    Array.from(this.shadowElement.childNodes).forEach((node) => {
      fragment.appendChild(node.cloneNode(true))
    })
    Array.from(findStoredElements(fragment)).forEach((element) => {
      const storedElement = this.elementStore.remove(element)
      if (storedElement) {
        element.parentNode.replaceChild(storedElement, element)
      }
    })
    return fragment
  }
}
const findStoredElements = (element) => element.querySelectorAll("[data-tp-store-key]")
const elementsHaveEqualHTML = (element, otherElement) =>
  ignoreSpaces(element.innerHTML) === ignoreSpaces(otherElement.innerHTML)
const ignoreSpaces = (html) => html.replace(/&nbsp;/g, " ")