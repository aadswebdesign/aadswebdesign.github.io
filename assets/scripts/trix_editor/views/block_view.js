import * as config from "./../config/index.js"
import ObjectView from "./object_view.js"
import TextView from "./text_view.js"

import { getBlockConfig, makeElement } from "./../core/helpers/index.js"
const { css } = config

export default class BlockView extends ObjectView {
  constructor() {
    super(...arguments)
    this.block = this.object
    this.attributes = this.block.getAttributes()
  }

  createNodes() {
    const comment = document.createComment("block")
    const nodes = [ comment ]
    if (this.block.isEmpty()) {
      nodes.push(makeElement("br"))
    } else {
      const textConfig = getBlockConfig(this.block.getLastAttribute())?.text
      const textView = this.findOrCreateCachedChildView(TextView, this.block.text, { textConfig })
      nodes.push(...Array.from(textView.getNodes() || []))
      if (this.shouldAddExtraNewlineElement()) {
        nodes.push(makeElement("br"))
      }
    }
    if (this.attributes.length) {
		return nodes
    } else {
		let attributes
		const { tagName } = config.blockAttributes.default
		if (this.block.isRTL()) {
			attributes = { dir: "rtl" }
		}
		attributes = {
			class:`trix-${tagName}-block-view`,
			contenteditable: true
		}
		const element = makeElement({ tagName, attributes})
		//element.classList.add()
		nodes.forEach((node) => {
			element.tabIndex = '-1'
			element.appendChild(node)
		})
		return [ element ]
    }
  }

  createContainerElement(depth) {
    let attributes, className
    const attributeName = this.attributes[depth]

    const { tagName } = getBlockConfig(attributeName)
    if (depth === 0 && this.block.isRTL()) {
      attributes = { dir: "rtl" }
    }

    if (attributeName === "attachmentGallery") {
      const size = this.block.getBlockBreakPosition()
      className = `${css.attachmentGallery} ${css.attachmentGallery}--${size}`
    }

    return makeElement({ tagName, className, attributes })
  }

  // A single <br> at the end of a block element has no visual representation
  // so add an extra one.
  shouldAddExtraNewlineElement() {
    return /\n\n$/.test(this.block.toString())
  }
}
