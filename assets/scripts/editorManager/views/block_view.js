/** created 22-6-2023 */
import * as CI from "./../configs/configs_index.js"
import ObjectView from "./object_view.js"
import TextView from "./text_view.js"
import { getBlockConfig} from "./../helpers/helpers_index.js"
import * as HE from "./../toolbox/htmlElements.js"
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
            nodes.push(HE.br('block-view'))
        } else {
            const textConfig = getBlockConfig(this.block.getLastAttribute())?.text
            const textView = this.findOrCreateCachedChildView(TextView, this.block.text, { textConfig })
            nodes.push(...Array.from(textView.getNodes() || []))
            if (this.shouldAddExtraNewlineElement()) {
                nodes.push(HE.br('block-view'))
            }
        }
        if (this.attributes.length) {
            return nodes
        } else {
            let attributes
            const { tagName } = CI.blockAttributes.default
            if (this.block.isRTL()) {
                attributes = { dir: "rtl" }
            }
            const element = HE.elem(tagName,`${tagName}-tag`,null,attributes)
            nodes.forEach((node) => element.appendChild(node))
            return [ element ]
        }
		console.log('createNodes: ',element)
    }
    createContainerElement(depth) {
        let attributes
		let className = 'container-elem '
        const attributeName = this.attributes[depth]
        const { tagName } = getBlockConfig(attributeName)
        if (depth === 0 && this.block.isRTL()) {
            attributes = { dir: "rtl" }
        }
        if (attributeName === "attachmentGallery") {
            const size = this.block.getBlockBreakPosition()
            className = `attachment-gallery attachment-gallery--${size}`
        }
        return HE.elem(tagName, className,null, attributes)
    }
    // A single <br> at the end of a block element has no visual representation
    // so add an extra one.
    shouldAddExtraNewlineElement() {
        return /\n\n$/.test(this.block.toString())
    }
}