/** created 22-6-2023 */
import ObjectView from "./object_view.js"
import ObjectGroup from "./../collections/object_group.js"
import PieceView from "./piece_view.js"
export default class TextView extends ObjectView {
    constructor() {
        super(...arguments)
        this.text = this.object
        this.textConfig = this.options.textConfig
    }
    createNodes() {
        const nodes = []
        const pieces = ObjectGroup.groupObjects(this.getPieces())
        const lastIndex = pieces.length - 1
        for (let index = 0; index < pieces.length; index++) {
            const piece = pieces[index]
            const context = {}
            if (index === 0) {
                context.isFirst = true
            }
            if (index === lastIndex) {
                context.isLast = true
            }
            if (endsWithWhitespace(previousPiece)) {
                context.followsWhitespace = true
            }
            const view = this.findOrCreateCachedChildView(PieceView, piece, { textConfig: this.textConfig, context })
            nodes.push(...Array.from(view.getNodes() || []))
            var previousPiece = piece
        }
        return nodes
    }
    getPieces() {
        return Array.from(this.text.getPieces()).filter((piece) => !piece.hasAttribute("blockBreak"))
    }
}
const endsWithWhitespace = (piece) => /\s$/.test(piece?.toString())