/** created 22-6-2023 */
import BasicObject from "./basic_object.js"
import UTF16String from "./utf16_string.js"
let id = 0
export default class TpObject extends BasicObject {
    static fromJSONString(jsonString) {
        return this.fromJSON(JSON.parse(jsonString))
    }
    constructor() {
        super(...arguments)
        this.id = ++id
    }
    hasSameConstructorAs(object) {
        return this.constructor === object?.constructor
    }
    isEqualTo(object) {
        return this === object
    }
    inspect() {
        const parts = []
        const contents = this.contentsForInspection() || {}
        for (const key in contents) {
            //noinspection JSUnfilteredForInLoop
            const value = contents[key]
            //noinspection JSUnfilteredForInLoop
            parts.push(`${key}=${value}`)
        }

        return `#<${this.constructor.name}:${this.id}${parts.length ? ` ${parts.join(", ")}` : ""}>`
    }
    contentsForInspection() {}
    toJSONString() {
        return JSON.stringify(this)
    }
    toUTF16String() {
        return UTF16String.box(this)
    }
    getCacheKey() {
        return this.id.toString()
    }
}