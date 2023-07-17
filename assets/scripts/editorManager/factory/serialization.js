/** created 22-6-2023 */
import { removeNode } from "./../helpers/helpers_index.js"
import DocumentView from "./../views/document_view.js"
import Document from "./../models/document.js"
import HTMLParser from "./../models/html_parser.js"
const unserializableElementSelector = "[data-tp-serialize=false]"
const unserializableAttributeNames = [
  "contenteditable",
  "data-tp-id",
  "data-tp-store-key",
  "data-tp-mutable",
  "data-tp-placeholder",
  "tabindex",
]
const serializedAttributesAttribute = "data-trix-serialized-attributes"
const serializedAttributesSelector = `[${serializedAttributesAttribute}]`
const blockCommentPattern = new RegExp("<!--block-->", "g")//might not be needed 
const serializers = {
  "application/json": function(serializable) {
    let document
    if (serializable instanceof Document) {
      document = serializable
    } else if (serializable instanceof HTMLElement) {
      document = HTMLParser.parse(serializable.innerHTML).getDocument()
    } else {
      throw new Error("unserializable object")
    }
    return document.toSerializableDocument().toJSONString()
  },
  "text/html": function(serializable) {
    let element
    if (serializable instanceof Document) {
      element = DocumentView.render(serializable)
    } else if (serializable instanceof HTMLElement) {
      element = serializable.cloneNode(true)
    } else {
      throw new Error("unserializable object")
    }
    // Remove unserializable elements
    Array.from(element.querySelectorAll(unserializableElementSelector)).forEach((el) => {
      removeNode(el)
    })
    // Remove unserializable attributes
    unserializableAttributeNames.forEach((attribute) => {
      Array.from(element.querySelectorAll(`[${attribute}]`)).forEach((el) => {
        el.removeAttribute(attribute)
      })
    })
    // Rewrite elements with serialized attribute overrides
    Array.from(element.querySelectorAll(serializedAttributesSelector)).forEach((el) => {
      try {
        const attributes = JSON.parse(el.getAttribute(serializedAttributesAttribute))
        el.removeAttribute(serializedAttributesAttribute)
        for (const name in attributes) {
            //noinspection JSUnfilteredForInLoop
            const value = attributes[name]
            //noinspection JSUnfilteredForInLoop
            el.setAttribute(name, value)
        }
      } catch (error) {}
    })
    return element.innerHTML.replace(blockCommentPattern, "")
  },
}
const deserializers = {
  "application/json": function(string) {
    return Document.fromJSONString(string)
  },
  "text/html": function(string) {
    return HTMLParser.parse(string).getDocument()
  },
}
export const serializeToContentType = function(serializable, contentType) {
  const serializer = serializers[contentType]
  if (serializer) {
    return serializer(serializable)
  } else {
    throw new Error(`unknown content type: ${contentType}`)
  }
}
export const deserializeFromContentType = function(string, contentType) {
  const deserializer = deserializers[contentType]
  if (deserializer) {
    return deserializer(string)
  } else {
    throw new Error(`unknown content type: ${contentType}`)
  }
}