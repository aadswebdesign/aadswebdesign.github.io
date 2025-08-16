/* 
 module_classes/depedencies/node_boundaries.js
 based on Azmisov/node-boundary
 renamed some objects to make them more clear;
*/
const nodeFlags = async ()=>{
	const flagMap = new Map([['flagObjects',{
		INSIDE_BEGIN: 0b10, //AFTER_OPEN
		INSIDE_END: 0b1000, //BEFORE_CLOSE
		OUTSIDE_BEGIN: 0b1, //BEFORE_OPEN
		OUTSIDE_END: 0b10000, //AFTER_CLOSE
		FILTER_ALL: 0b11011,
		FILTER_OPEN: 0b11,
		FILTER_CLOSE: 0b11000,
		FILTER_BEFORE: 0b1001,
		FILTER_AFTER: 0b10010,
		FILTER_INSIDE: 0b1010,
		FILTER_OUTSIDE: 0b10001,
		POSITION_BEFORE: 0b0,
		POSITION_INSIDE: 0b100,
		POSITION_AFTER: 0b100000	
	}]]);
	return flagMap.get('flagObjects');	
}
const {
	INSIDE_BEGIN,INSIDE_END,OUTSIDE_BEGIN,OUTSIDE_END,FILTER_ALL,
	FILTER_OPEN,FILTER_CLOSE,FILTER_BEFORE,FILTER_AFTER,FILTER_INSIDE,
	FILTER_OUTSIDE,POSITION_BEFORE,POSITION_INSIDE,POSITION_AFTER
} = await nodeFlags();
export const EditorBoundaryFlags = Object.freeze(nodeFlags);


//todo
//class BoundaryBase{}

export class EditorBoundary{
	#node;
	#side;
	/** validate side flag
	 * @private
	 */
	static #valid_side(b){
		return b == OUTSIDE_BEGIN || b == INSIDE_BEGIN ||
			b == INSIDE_END || b == OUTSIDE_END;
	}
	/** set node and side together
	 * @private
	 */
	#set(node, side){
		this.#node = node;
		this.#side = side;
	}
	constructor(...args){
		this.set(...args);
	}
	set(...args){
		switch (args.length){
			case 1:
				const o = args[0];
				if (!(o instanceof EditorBoundary))
					throw TypeError("expected EditorBoundary for first arg");
				this.#set(o.#node, o.#side);
				break;
			case 2:{
				const [node, side] = args;
				if (!(node instanceof Node || node === null))
					throw TypeError("expected Node or null for first arg");
				if (!EditorBoundary.#valid_side(side))
					throw TypeError("expected a side bit flag for second arg")
				this.#set(node, side);
				break;
			}
			case 3:{
				let [node, offset, position] = args;
				if (!(node instanceof Node))
					throw TypeError("expected Node for first arg");
				if (!Number.isInteger(offset))
					throw TypeError("expected integer for second arg")
				if (position != POSITION_BEFORE && position != POSITION_AFTER) //perhaps more strict !==
					throw TypeError("expected a position bit flag for third arg")
				const istxt = node instanceof CharacterData;
				if (istxt)
					this.#side = position ? OUTSIDE_END : OUTSIDE_BEGIN;
				else{
					// left/right side; edges switch to INSIDE_BEGIN/INSIDE_END
					if (position)
						this.#side = offset >= node.childNodes.length ? INSIDE_END : OUTSIDE_BEGIN;
					else this.#side = offset <= 0 ? INSIDE_BEGIN : OUTSIDE_END;
					// if we are referencing a child node
					if (this.#side & FILTER_OUTSIDE)
						node = node.childNodes[offset - !position];
				}
				this.#node = node;
				if (istxt)
					position ? this.next() : this.previous();
			} break;
			default:
				this.#set(null, OUTSIDE_BEGIN);
				break;
		}
	}
	// Property access
	/** node whose boundary we reference
	 * @type {Node}
	 */
	get node(){ return this.#node; }
	set node(node){
		if (!(node instanceof Node || node === null))
			throw TypeError("node must be a Node or null");
		this.#node = node;
	}
	/** bit flag giving which side of the node our boundary is for; this is one of
	 * {@link BoundaryFlags}
	 * @type {Number}
	 */
	get side(){ return this.#side; }
	set side(side){
		if (!EditorBoundary.#valid_side(side))
			throw TypeError("invalid side bit flag");
		this.#side = side;
	}
	/** Copy this EditorBoundary object
	 * @returns {EditorBoundary} cloned boundary
	 */
	clone(){
		return new EditorBoundary(this);
	}
	//Convert to an anchor, in the manner of the builtin Range/StaticRange interface.
	toAnchor(text=true){
		if (!this.#node)
			throw Error("cannot convert null EditorBoundary to anchor");
		let node = this.#node, offset = 0;
		// calculate offset by finding node's index in parent's child nodes
		if (this.#side & FILTER_OUTSIDE || (text && node instanceof CharacterData)){
			let child = node;
			node = node.parentNode;
			// Range offset indexes the previous side (so open boundaries are exclusive)
			if (this.#side & FILTER_OPEN)
				child = child.previousSibling;
			while (child !== null){
				child = child.previousSibling
				offset++;
			}
		}
		else if (this.#side == INSIDE_END)
			offset = node.childNodes.length;
		return {node, offset};
	}
	//Compare relative position of two boundaries
	compare(other){
		if (this.#node && other.#node){
			if (this.#node === other.#node)
				return Math.sign(this.#side - other.#side);
			const p = this.#node.compareDocumentPosition(other.#node);
			// handle contained/contains before preceding/following, since they can combine
			if (p & Node.DOCUMENT_POSITION_CONTAINED_BY)
				return Math.sign(this.#side - POSITION_INSIDE);
			if (p & Node.DOCUMENT_POSITION_CONTAINS)
				return Math.sign(POSITION_INSIDE - other.#side);
			if (p & Node.DOCUMENT_POSITION_PRECEDING)
				return 1;
			if (p & Node.DOCUMENT_POSITION_FOLLOWING)
				return -1;
		}
		// null boundary, disconnected, or implementation specific
		return null;
	}
	//See where the boundary sits relative to a Node. This just tells if the boundary is inside
	compareNode(node){
		if (this.#node){
			if (node === this.#node){
				if (this.#side & FILTER_INSIDE)
					return POSITION_INSIDE;
				return this.#side > POSITION_INSIDE ? POSITION_AFTER : POSITION_BEFORE;
			}
			const p = this.#node.compareDocumentPosition(node);
			// handle contained/contains before preceding/following, since they can combine
			if (p & Node.DOCUMENT_POSITION_CONTAINED_BY)
				return this.#side & FILTER_CLOSE ? POSITION_AFTER : POSITION_BEFORE;
			if (p & Node.DOCUMENT_POSITION_CONTAINS)
				return POSITION_INSIDE;
			if (p & Node.DOCUMENT_POSITION_PRECEDING)
				return POSITION_AFTER;
			if (p & Node.DOCUMENT_POSITION_FOLLOWING)
				return POSITION_BEFORE;
		}
		// null boundary, disconnected, or implementation specific
		return null;
	}
	//Check if boundary equals another
	isEqual(other){
		return this.#node === other.#node && this.#side === other.#side;
	}
	//todo make this more flexible or remove it?
	isAdjacent(other){
		// OUTSIDE_BEGIN <-> INSIDE_BEGIN are not adjacent since one is outside the node and the other inside
		if (!this.#node || !other.#node || this.#side & FILTER_BEFORE || other.#side & FILTER_AFTER){
			console.log('isAdjacent1: ',other)
			return false;
		}
		console.log('isAdjacent2 other: ',other);	
		return this.clone().next().isEqual(other);
	}
	
	// Check if the boundary node is not set (e.g. null)
	isNull(){ return !this.#node; }
	//Traverses to the nearest boundary point inside the node. 
	inside(){
		switch (this.side){
			case OUTSIDE_END:
				this.side = INSIDE_END;
				break;
			case OUTSIDE_BEGIN:
				this.side = INSIDE_BEGIN;
				break;
		}
		console.log('inside(): ',this);
		return this;
	}
	// Traverses to the nearest boundary point outside the node.
	outside(){
		switch (this.side){
			case INSIDE_END:
				this.side = OUTSIDE_END;
				break;
			case INSIDE_BEGIN:
				this.side = OUTSIDE_BEGIN;
				break;
		}
		console.log('outside(): ',this);
		return this;
	}	
	//let see what happens, when I remove next
	next(){
		if (!this.#node) return;
		switch (this.#side){
			case INSIDE_BEGIN:
				const c = this.#node.firstChild;
				if (c)
					this.#set(c, OUTSIDE_BEGIN);
				else this.#side = INSIDE_END;
				break;
			case OUTSIDE_END:
				const s = this.#node.nextSibling;
				if (s)
					this.#set(s, OUTSIDE_BEGIN);
				else this.#set(this.#node.parentNode, INSIDE_END);
				break;
			// before -> after
			default:
				this.#side >>= 1;
				break;
		}
		return this;
	}
	previous(){
		if (!this.#node) return;
		switch (this.#side){
			case INSIDE_END:
				const c = this.#node.lastChild;
				if (c)
					this.#set(c, OUTSIDE_END);
				else this.#side = INSIDE_BEGIN;
				break;
			case OUTSIDE_BEGIN:
				const s = this.#node.previousSibling;
				if (s)
					this.#set(s, OUTSIDE_END);
				else this.#set(this.#node.parentNode, INSIDE_BEGIN);
				break;
			// after -> before
			default:
				this.#side <<= 1;
				break;
		}
		return this;
	}
	*nextNodes(include_start=true){
		const after = this.#side & FILTER_AFTER;
		if (after || !include_start){
			this.next();
			if (!after)
				this.next();
		}
		if (!this.#node) return;
		yield this;
		let depth = 0, n;
		while (true){
			if (this.#side == OUTSIDE_BEGIN && (n = this.#node.firstChild)){
				this.#node = n;
				depth++;
				yield this;
			}
			else if (n = this.#node.nextSibling){
				this.#set(n, OUTSIDE_BEGIN);
				yield this;
			}
			else if (n = this.#node.parentNode){
				this.#set(n, INSIDE_END);
				if (!depth)
					yield this;
				else --depth;
			}
			else return;
		}
	}
	*previousNodes(include_start=true){
		const before = this.#side & FILTER_BEFORE;
		if (before || !include_start){
			this.previous();
			if (!before)
				this.previous();
		}
		if (!this.#node) return;
		yield this;
		let depth = 0, n;
		while (true){
			if (this.#side == OUTSIDE_END && (n = this.#node.lastChild)){
				this.#node = n;
				depth++;
				yield this;
			}
			else if (n = this.#node.previousSibling){
				this.#set(n, OUTSIDE_END);
				yield this;
			}
			else if (n = this.#node.parentNode){
				this.#set(n, INSIDE_BEGIN);
				if (!depth)
					yield this;
				else --depth;
			}
			else return;
		}
	}
	insert(...nodes){
		if (!this.#node)
			throw Error("inserting at null Boundary");
		switch (this.#side){
			case OUTSIDE_BEGIN:
				this.#node.before(...nodes);
				break;
			case INSIDE_BEGIN:
				this.#node.prepend(...nodes);
				break;
			case INSIDE_END:
				this.#node.append(...nodes);
				break;
			case OUTSIDE_END:
				this.#node.after(...nodes);
				break;
		}
	}
	//added1
	//added2 addNext, *addNodes
	addNext(){
		if (!this.#node) return;
		switch (this.#side){
			case INSIDE_BEGIN:
				const c = this.#node.firstChild;
				if (c)
					this.#set(c, OUTSIDE_BEGIN);
				else this.#side = INSIDE_END;
				break;
			case OUTSIDE_END:
				const s = this.#node.nextSibling;
				if (s)
					this.#set(s, OUTSIDE_BEGIN);
				else this.#set(this.#node.parentNode, INSIDE_END);
				break;
			// before -> after
			default:
				this.#side >>= 1;
				break;
		}
		return this;
	}
	
	*addNodes(...args){
		const [limit,include_start=true] = args;
		// always OUTSIDE_BEGIN or INSIDE_END; need to convert start bounds to this
		const after = this.#side & FILTER_AFTER;
		if (after || !include_start){
			this.addNext();
			if (!after)
				this.addNext();
		}
		if (!this.#node) return;
		yield this;
		let depth = 0, n;
		const max = limit ? limit : 100
		const obj = { count: 0 }
		const increment = obj => {
			obj.count++
		}		
		while (obj.count < max){
			// if INSIDE_END, we've already passed all the children
			if (this.#side == OUTSIDE_BEGIN && (n = this.#node.firstChild)){
				this.#node = n;
				depth++;
				yield this;
			}
			else if (n = this.#node.nextSibling){
				this.#set(n, OUTSIDE_BEGIN);
				yield this;
			}
			else if (n = this.#node.parentNode){
				this.#set(n, INSIDE_END);
				yield this;
				increment(obj);
			}
			else return;
		}
	}
	//added2
	getAncestor(...args){
		const [parent_elem] = args;
		if (this.#node){
			let ancestor;
			if(this.#node.parentElement === null){
				ancestor = parent_elem;
			}else{
				ancestor = this.#node.parentElement;
			}
			console.log('getAncestor:',ancestor)
			return ancestor;
		}

	}
}
//end of EditorBoundary


export class EditorBoundaryRange{
	#start;
	#end;
	//Create a new range; takes up to two arguments.
	constructor(...args){		
		this.#start = new EditorBoundary();
		this.#end = new EditorBoundary();
		// optional init
		switch (args.length){
			case 1:
				const o = args[0];
				if (o instanceof EditorBoundaryRange){
					this.#start.set(o.start);
					this.#end.set(o.end);
				}
				// Range/StaticRange
				else{
					this.#start.set(o.startContainer, o.startOffset, POSITION_BEFORE);
					this.#end.set(o.endContainer, o.endOffset, POSITION_AFTER);
				}
				break;
			case 2:
				const [s, e] = args;
				this.#start.set(s);
				this.#end.set(e);
				break;
		}
	}
	//Starting anchor of the range. You can access or assign this directly as needed
	get start(){ return this.#start; }
	set start(b){
		if (!(b instanceof Boundary))
			throw Error("expected Boundary for start");
	}
	//Update {@link EditorBoundaryRange#start|start} anchor; equivalent to `this.start.set()`
	setStart(...args){
		this.#start.set(...args);
		return this;
	}
	//Ending anchor of the range. You can access or assign this directly as needed
	get end(){ return this.#end; }
	set end(b){
		if (!(b instanceof EditorBoundary))
			throw Error("expected Boundary for end");
	}
	//Update {@link BoundaryRange#end|end} anchor; equivalent to `this.end.set()`
	setEnd(...args){
		this.#end.set(...args);
		return this;
	}
	//Make a copy of this range object
	cloneRange(){
		return new EditorBoundaryRange(this);
	}
	//Convert to `Range` interface. Range's end is set last, so if the resulting range's
	toRange(){
		const r = new Range();
		if (this.isNull())
			throw Error("cannot create Range from null EditorBoundaryRange")
		// start anchor
		const sn = this.#start.node;
		let sb = this.#start.side;
		if (sn instanceof CharacterData)
			sb = sb == INSIDE_BEGIN ? OUTSIDE_BEGIN : OUTSIDE_END;
		switch (sb){
			case OUTSIDE_BEGIN:
				r.setStartBefore(sn);
				break;
			case INSIDE_BEGIN:
				r.setStart(sn, 0);
				break;
			case INSIDE_END:
				r.setStart(sn, sn.childNodes.length);
				break;
			case OUTSIDE_END:
				r.setStartAfter(sn);
				break;
		}
		// end anchor
		const en = this.#end.node;
		let eb = this.#end.side;
		if (en instanceof CharacterData)
			eb = eb == INSIDE_BEGIN ? OUTSIDE_BEGIN : OUTSIDE_END;
		switch (eb){
			case OUTSIDE_BEGIN:
				r.setEndBefore(en);
				break;
			case INSIDE_BEGIN:
				r.setEnd(en, 0);
				break;
			case INSIDE_END:
				r.setEnd(en, en.childNodes.length);
				break;
			case OUTSIDE_END:
				r.setEndAfter(en);
				break;
		}
		return r;
	}
	//Convert to `StaticRange` interface. 
	toStaticRange(){
		if (this.isNull())
			throw Error("cannot create StaticRange from null BoundaryRange")
		// Range may have side effects from being unordered, so can't reuse toRange for this
		const sa = this.#start.toAnchor();
		const ea = this.#end.toAnchor();
		return new StaticRange({
			startContainer: sa.node,
			startOffset: sa.offset,
			endContainer: ea.node,
			endOffset: ea.offset
		});
	}
	//Check if the range has been fully set, e.g. neither boundary is null;
	isNull(){
		return this.#start.isNull() || this.#end.isNull();
	}
	//Check if range exactly matches another
	isEqual(other){
		return this.#start.isEqual(other.start) && this.#end.isEqual(other.end);
	}
	//Check if the range is collapsed in the current DOM.
	get collapsed(){
		return this.#start.isEqual(this.#end) || this.#start.isAdjacent(this.#end);
	}
	// Collapse the range to one of the boundary points.
	collapse(toStart=false){
		if (toStart)
			this.#end = this.#start.clone();
		else this.#start = this.#end.clone();
		return this;
	}
	//Extend this range to include the bounds of another BoundaryRange.
	extend(other){ //perhaps more strict here?
		if (this.#start.isNull())
			this.#start = other.start.clone();
		else if (this.#start.compare(other.start) == 1)
			this.#start.set(other.start);
		if (this.#end.isNull())
			this.#end = other.end.clone();
		else if (this.#end.compare(other.end) == -1)
			this.#end.set(other.end);
		return this;
	}
	//Set range to surround a single node
	selectNode(node, exclusive=false){
		this.#start.set(node, OUTSIDE_BEGIN);
		this.#end.set(node, OUTSIDE_END);
		if (exclusive){
			this.#start.previous();
			this.#end.next();
		}
		return this;
	}
	//Set range to surround the contents of a node.
	selectNodeContents(node, exclusive=true){
		this.#start.set(node, INSIDE_BEGIN);
		this.#end.set(node, INSIDE_END);
		if (!exclusive){
			this.#start.next();
			this.#end.previous();
		}
		return this;
	}
	//Every boundary has one adjacent boundary at the same position.
	normalize(exclusive=true){
		if (exclusive){
			if (this.#start.side & FILTER_BEFORE)
				this.#start.previous();
			if (this.#end.side & FILTER_AFTER)
				this.#end.next();
		}
		else{
			if (this.#start.side & FILTER_AFTER)
				this.#start.next();
			if (this.#end.side & FILTER_BEFORE)
				this.#end.previous();
		}
		return this;
	}
	// -Comparison helper methods-
	//Check if this range intersects with another
	intersects(other, inclusive=false){
		return (
			this.start.compare(other.end) <= (inclusive-1) &&
			this.end.compare(other.start) >= (1-inclusive)
		);
	}
	//Check if this range fully contains `other`
	contains(other, inclusive=true){
		return (
			this.start.compare(other.start) <= (inclusive-1) &&
			this.end.compare(other.end) >= (1-inclusive)
		);
	}
}
