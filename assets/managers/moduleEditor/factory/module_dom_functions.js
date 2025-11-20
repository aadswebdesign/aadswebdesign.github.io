//editorManager/factory/module_dom_functions.js.js
import * as MFT from './module_functions.js';
//Nodes
export const brNode = await MFT.createElem('br');
export const emptyNode = await MFT.createNode(' ');
export const nbspNode = await MFT.createNode('\u00A0'); 
export const newLineNode = await MFT.createNode('\n');
export const testNode1 = await MFT.createNode(' test1');
export const testNode2 = await MFT.createNode(' test2');
export const testNode3 = await MFT.createNode(' test3');
export const zeroNode = await MFT.createNode('');//temporary
export const zeroWithNoBreakNode = await MFT.createNode('\uFEFF');
export const zeroWithSpaceNode = await MFT.createNode('\u200B');

export const appendBr = (...args)=>{
	const [tag_parent,br_el,log = false] = args;
	(async ()=>{
		if(tag_parent.lastElementChild !== null && tag_parent.lastElementChild.tagName !== 'BR'){
			tag_parent.append(br_el);
			if(log === true){
				console.log(`appended  ${br_el} element too (${tag_parent})`);
			}
		}
	})();
}

export const appendFirstNode = (...args)=>{
	const [parent_el,create_el,log = false] = args;
	if(parent_el.firstChild === null){
		parent_el.append(create_el);
	}
	if(log === true){
		console.log(`appended FirstNode too (${parent_el.tagName}) : `,parent_el);
	}
}

export const appendFirstElem = (...args)=>{
	const [parent_el,create_el,log = false] = args;
	if(parent_el.firstElementChild === null){
		parent_el.append(create_el);
	}
	if(log === true){
		console.log(`appended FirstElem too (${parent_el.tagName}) : `,parent_el);
	}
}

export const appendLastNode = (...args)=>{
	const [parent_el,create_el,log = false] = args;
	//dept initial level;
	async function recursiveHandler(...args){}
	if(parent_el.lastChild !== null){
		parent_el.appendChild(create_el);
	}
	if(log === true){
		console.log(`appended LastNode(${parent_el.tagName})  too: `,parent_el);
	}
}

export const createEditorElem = async (...args)=>{
	const [create_el,added_classes = null, data_attribute = null] = args;
	const elem_create = create_el.cloneNode(true);
	if(added_classes !== null){
		await MFT.addClasses(elem_create, added_classes);
	}
	if(data_attribute !== null){
		if(!elem_create.hasAttribute(data_attribute)){
			elem_create.setAttribute(data_attribute,'');
		}
	}
	return elem_create;
};

export const initialBlockElemToEditor = (...args)=>{
	const [parent_elem,create_el, el_class,parent_tag_name,tag_name, data_attribute,pre_elems, log = false] = args;
	(async () =>{	
		const created_elem = await createEditorElem(create_el,el_class, data_attribute,log);
		const br_elem = brNode.cloneNode();
		const zero_node = zeroNode.cloneNode(true);
		const [pre_elem,pre_output,pre_outer] = pre_elems;
		if(parent_elem.firstElementChild === null){
			appendFirstElem(parent_elem,created_elem);
			if(log === true){
				console.log('initial first elem appended');
			}
		}
		if(parent_elem.lastElementChild !== null){
			const last_child = parent_elem.lastElementChild;
			if(!parent_elem.firstElementChild.hasAttribute('data-block_active')){
				console.log('last_child2',last_child);
				replaceAncestorWith(last_child,created_elem,'BR');
				if(log === true){
					console.log('initial last elem appended');
				}
			}
		}
		created_elem.appendChild(zero_node);
		MFT.writeSourceCode(pre_elem,parent_elem,pre_output,pre_outer);
	})();
};

export const insertBlockElemToParent = (...args)=>{
	const [parent_elem,create_el, el_class,parent_tag_name,tag_name, data_attribute,pre_elems,previous_elems, log = false] = args;
	(async () =>{	
		const created_elem = await createEditorElem(create_el,el_class, data_attribute,log);
		const br_elem = brNode.cloneNode();
		const zero_node = zeroNode.cloneNode(true);
		const [pre_elem,pre_output,pre_outer] = pre_elems;
		if(parent_elem.children.length > 0){
			const parents_children = parent_elem.children;
			for(const parents_child of parents_children){
				if((parents_child.tagName === parent_tag_name) && (parents_child.hasAttribute('data-block_active'))){
					const ancestor = await MFT.getAncestor(parents_child,parent_elem,tag_name);
					if(ancestor.firstElementChild === null){
						appendFirstElem(ancestor,created_elem,true);
						if(log === true){
							console.log('initial first elem appended to: ',ancestor);
						}
					}
					if(ancestor.lastElementChild !== null){
						replaceAncestorWith(ancestor,created_elem,'BR');
						if(log === true){
							console.log('initial last elem appended to: ',ancestor);
						}
					}
				}
				if(Array.isArray(previous_elems)){
					for(const prev_elem of previous_elems){
						isPreviousElem(parents_child,prev_elem,br_elem);
					}
				}
			}
		}
		created_elem.appendChild(zero_node);
		MFT.writeSourceCode(pre_elem,parent_elem,pre_output,pre_outer);
	})();
	
};

export const initialInlineElemToEditor = (...args)=>{
	const [editor_elem,create_el, el_class,tag_name, data_attribute,pre_elems, log = false] = args;
	(async()=>{
		const created_elem = await createEditorElem(create_el,el_class,data_attribute,log);
		const zero_node = zeroNode.cloneNode(true);
		const [pre_elem,pre_output,pre_outer] = pre_elems;
		if(editor_elem.firstChild === null){
			appendFirstNode(editor_elem,created_elem);
		}
		if(editor_elem.lastChild !== null){
			const last_child = editor_elem.lastChild;
			if(last_child.nodeType !== Node.ELEMENT_NODE){
				appendLastNode(editor_elem,created_elem);
			}
		}
		created_elem.appendChild(zero_node);
		MFT.writeSourceCode(pre_elem,editor_elem,pre_output,pre_outer);
	})();
};


export const insertInlineElemToParent = (...args)=>{
	const [parent_elem,create_el,el_class,parent_tag_name,tag_name, data_attribute,pre_elems, log = false] = args;
	(async()=>{
		const created_elem = await createEditorElem(create_el,el_class,data_attribute,log);
		const empty_node = emptyNode.cloneNode(true);
		const zero_node = zeroNode.cloneNode(true);
		const [pre_elem,pre_output,pre_outer] = pre_elems;
		const parent_tags = await MFT.getTagNames(parent_tag_name,parent_elem);
		if(parent_tags.length > 0){
			for(const block_elem of parent_tags){
				if(block_elem.firstChild === null){
					const first_child = block_elem;
					appendFirstNode(first_child,created_elem);
					console.log('first_child: ', first_child);
				}
				if(block_elem.lastChild !== null){
					const childs_parent = block_elem;
					const last_child = childs_parent.lastChild;
					if(last_child.nodeType !== Node.ELEMENT_NODE){
						console.log('inline to parent last_child: ', last_child);
						appendLastNode(childs_parent,created_elem);
					}
				}
				
			}
		}
		MFT.writeSourceCode(pre_elem,parent_elem,pre_output,pre_outer);
	})();
}

export const isPreviousElem = (...args)=>{
	const [parent_el, tag_name,replace_el,log = false] = args;
	let last_child;
	(async ()=>{
		if(parent_el !== null){
			if(parent_el.lastElementChild !== null && parent_el.lastElementChild.tagName !== 'BR'){
				last_child = parent_el.lastElementChild;
				if(last_child.previousElementSibling !== null && last_child.previousElementSibling.tagName === tag_name){
					last_child.replaceWith(replace_el);
				} 
			}
			if(last_child !== undefined){
				last_child = null;
				if(log === true){
					console.log(`isPreviousElem(${tag_name}): `,last_child);
				}
			}
		}
	})();
};

export const removeBlockActive = (...args)=>{
	const [tag_parent,data_attribute, log = null] = args;
	(async ()=>{
		let parent_children;
		if(tag_parent.children.length > 0){
		parent_children = tag_parent.children;
			for (const parent_child of parent_children){
				if(parent_child.tagName !== 'BR'){
					(async()=> await MFT.removeAttribute(parent_child,data_attribute))();					
					if(log === true){
						console.log(`${data_attribute} removed from block: `, parent_child);
					}					
				}
			}
		}		
	})();
}

export const removeLastBr = (...args)=>{
	const [tag_parent,br_el, log = null] = args;
	(async ()=>{
		let tag_children,old_child;
		if(tag_parent.children.length > 0){
			tag_children = tag_parent.children;
			for(const tag_child of tag_children){
				if(tag_child.firstElementChild !== null){
					if(tag_child.lastElementChild.tagName === 'BR'){
						old_child = tag_child.lastElementChild;
						old_child.replaceWith('');
					}
					if(log === true){
						console.log('tag_child: ', tag_child);
						console.log('old_child: ', old_child);
					}
				}
			}
		}
	})();
}

export const replaceAncestorWith = (...args)=>{
	const [ancestor_el,create_el,tag_elem,log = false] = args;
	let old_child;
	if(ancestor_el !== null && ancestor_el.tagName === tag_elem){
		old_child = ancestor_el;
		old_child.replaceWith(create_el);
		if(log === true){
			console.log(`replaceAncestorWith: `,old_child);
		}
	}
}
export const setInlineElemOff = async (...args)=>{
	const [parent_elem,tag_name,pre_elems,log = null] = args;
	const empty_node = emptyNode.cloneNode(true);
	const [pre_elem,pre_output,pre_outer] = pre_elems;
	const zero_node = zeroNode.cloneNode(true);
	const tags = await MFT.getTagNames(tag_name,parent_elem,true);
	if(tags !== null){
		for(const tag of tags){
			if(tag.hasAttribute('data-inline_active')){
				tag.removeAttribute('data-inline_active');
			}
			if(tag.classList.contains('parent')){
				tag.after(zero_node);
			}
			if(tag.classList.contains('sub')){
				tag.after(empty_node);
			}		
		}
	}
	MFT.writeSourceCode(pre_elem,parent_elem,pre_output,pre_outer);
}
