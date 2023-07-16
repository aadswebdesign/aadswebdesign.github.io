/** created 22-6-2023 */
import * as config from "./../configs/configs_index.js"
import { ZERO_WIDTH_SPACE } from "./../factory/constants.js"
import { copyObject} from "./../helpers/helpers_index.js"
import * as HE from "./../toolbox/htmlElements.js"
import ObjectView from "./object_view.js"
const { css } = config //todo make this right
export default class AttachmentView extends ObjectView {
    constructor() {
        super(...arguments)
        this.attachment = this.object
        this.attachment.uploadProgressDelegate = this
        this.attachmentPiece = this.options.piece
    }
    createContentNodes() {
        return []
    }
    createNodes() {
        let innerElement
        const figure = innerElement = HE.figure(this.getClassName(),null,{contenteditable: 'false'})
        figure.data = this.getData()
		const href = this.getHref()
        if (href) {
            innerElement = HE.anchor('attachment-link',null,{ contenteditable: 'false', href: '', tabindex: '-1'})
            figure.appendChild(innerElement)
        }
        if (this.attachment.hasContent()) {
            innerElement.innerHTML = this.attachment.getContent()
        } else {
            this.createContentNodes().forEach((node) => {
                innerElement.appendChild(node)
            })
        }
        innerElement.appendChild(this.createCaptionElement())
        if (this.attachment.isPending()) {
            this.progressElement = HE.progress('attachment progress',null,{value: this.attachment.getUploadProgress(), max: 100})
            this.progressElement.data = {tpMutable: true,
                    tpStoreKey: [ "progressElement", this.attachment.id ].join("/"),
                },
            figure.appendChild(this.progressElement)
        }
        return [ createCursorTarget("left"), figure, createCursorTarget("right") ]
    }
    createCaptionElement() {
        const figcaption = HE.figcaption('attachment__caption')
        const caption = this.attachmentPiece.getCaption()
        if (caption) {
            figcaption.classList.add('attachment__caption--edited')
            figcaption.textContent = caption
        } else {
            let name, size
            const captionConfig = this.getCaptionConfig()
            if (captionConfig.name) {
                name = this.attachment.getFilename()
            }
            if (captionConfig.size) {
                size = this.attachment.getFormattedFilesize()
            }
            if (name) {
                const nameElement = HE.span(`attachment ${name}`,null,null,name)
                figcaption.appendChild(nameElement)
            }
            if (size) {
                if (name) {
                    figcaption.appendChild(document.createTextNode(" "))
                }
                const sizeElement = HE.span(`attachment ${size}`,null,null,size) 
                figcaption.appendChild(sizeElement)
            }
        }
        return figcaption
    }
    getClassName() {
        const names = [ 'attachment', `attachment--${this.attachment.getType()}` ]
        const extension = this.attachment.getExtension()
        if (extension) {
            names.push(`attachment--${extension}`)
        }
        return names.join(" ")
    }
    getData() {
        const data = {
            tpAttachment: JSON.stringify(this.attachment),
            tpContentType: this.attachment.getContentType(),
            tpId: this.attachment.id,
        }
        const { attributes } = this.attachmentPiece
        if (!attributes.isEmpty()) {
            data.tpAttributes = JSON.stringify(attributes)
        }
        if (this.attachment.isPending()) {
            data.tpSerialize = false
        }
        return data
    }
    getHref() {
        if (!htmlContainsTagName(this.attachment.getContent(), "a")) {
            return this.attachment.getHref()
        }
    }
    getCaptionConfig() {
        const type = this.attachment.getType()
        const captionConfig = copyObject(config.attachments[type]?.caption)
        if (type === "file") {
            captionConfig.name = true
        }
        return captionConfig
    }
    findProgressElement() {
        return this.findElement()?.querySelector("progress")
    }
    // Attachment delegate
    attachmentDidChangeUploadProgress() {
        const value = this.attachment.getUploadProgress()
        const progressElement = this.findProgressElement()
        if (progressElement) {
            progressElement.value = value
        }
    }
}
const createCursorTarget = (name) =>{
	const cursor_target = HE.span('cursor-target', null,null,ZERO_WIDTH_SPACE)
	cursor_target.data = {
		tpCursorTarget: name,
		tpSerialize: false,
    }
	return cursor_target
}  
const htmlContainsTagName = function(html, tagName) {
  const div = HE.div(`tag-name tag-${tagName}`)
  div.innerHTML = html || ""
  return div.querySelector(tagName)
}