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
//
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
	if(parent_el.lastChild !== null){
		parent_el.appendChild(create_el);
	}
	if(log === true){
		console.log(`appended LastNode too (${parent_el.tagName}) : `,parent_el);
	}
}


export const appendNode = (...args)=>{
	const [tag_parent,zero_node,empty_node,log = false] = args;
	(async ()=>{
		if(tag_parent.lastElementChild !== null){
			if(tag_parent.classList.contains('inliner')){
				tag_parent.append(empty_node);
				if(log === true){
					console.log('empty (',empty_node, ') too (',tag_parent,')');
				}
			}else{
				tag_parent.append(zero_node);
				if(log === true){
					console.log('zero (',zero_node, ') too (',tag_parent,')');
				}

			}
		}
	})();
}

export const createEditorElem = (...args)=>{
	const [create_el,added_classes = null, set_active = false] = args;
	const elem_create = create_el.cloneNode(true);
	(async ()=>{
		if(added_classes !== null){
			await MFT.addClasses(elem_create, added_classes);
		}
	})();
	(async ()=>{
		if(set_active === true){
			if(!elem_create.hasAttribute('data-active')){
				elem_create.setAttribute('data-active','')
			}
		}
	})();
	return elem_create;
};

export const initialBlockElemToEditor = (...args)=>{
	const [editor_elem,create_el, el_class,tag_name, data_attribute,pre_elems, log = false] = args;
	(async () =>{
		const created_elem = createEditorElem(create_el,el_class,true,log);
		const zero_with_space_node = zeroWithSpaceNode.cloneNode(true);
		const zero_node = zeroNode.cloneNode(true);
		const [pre_elem,pre_output,pre_outer] = pre_elems;
		if(editor_elem.firstElementChild === null){
			appendFirstElem(editor_elem,created_elem);
			created_elem.append(zero_node);
		}
		if(editor_elem.lastElementChild !== null){
			const child_elem = editor_elem.lastElementChild;
			const ancestor_elem = await MFT.getAncestor(child_elem,editor_elem,tag_name);
			replaceAncestorWith(ancestor_elem,created_elem,'BR');
		}		
		MFT.writeSourceCode(pre_elem,editor_elem,pre_output,pre_outer);
	})();	
};

export const insertBlockElemToParent = (...args)=>{
	const [editor_elem,create_el, el_class,parent_tag_name,tag_name, data_attribute,pre_elems,previous_elems, log = false] = args;
	//dept level 0
	async function insertElemInto(...insert_args){
		const[parent_elem,created_elem,br_elem,parent_tag_name,tag_name,previous_elems,log] = insert_args;
		if(parent_elem.lastElementChild !== null){
			const childs_parent = parent_elem.lastElementChild;
			if(childs_parent.tagName === parent_tag_name){
				if(childs_parent.firstElementChild === null){
					appendFirstElem(childs_parent,created_elem);
				}
				if(childs_parent.lastElementChild !== null){
					const child_elem = childs_parent.lastElementChild;
					const childs_ancestor = child_elem.parentElement;
					const ancestor_elem = await MFT.getAncestor(childs_ancestor,parent_elem,tag_name)
					if(ancestor_elem !== undefined || null){
						replaceAncestorWith(ancestor_elem,created_elem,'BR',true);
					}
				}
				if(Array.isArray(previous_elems)){
					for(const prev_elem of previous_elems){
						isPreviousElem(childs_parent,prev_elem,br_elem); 
					}
				}
			}
			//dept level 1
			if(childs_parent !== null){
				await insertElemInto(childs_parent,created_elem,br_elem,parent_tag_name,tag_name,previous_elems);
				//dept level 2
				if(childs_parent.lastElementChild !== null){
					const parent_level_2 = childs_parent.lastElementChild;
					await insertElemInto(parent_level_2,created_elem,br_elem,parent_tag_name,tag_name,previous_elems);
					//dept level 3
					if(parent_level_2.lastElementChild !== null){
						const parent_level_3 = parent_level_2.lastElementChild;
						await insertElemInto(parent_level_3,created_elem,br_elem,parent_tag_name,tag_name,previous_elems);
						//dept level 4
						if(parent_level_3.lastElementChild !== null){
							const parent_level_4 = parent_level_3.lastElementChild;
							await insertElemInto(parent_level_4,created_elem,br_elem,parent_tag_name,tag_name,previous_elems);
						}
					}
				}
			}
		}
	}
	(async () =>{
		const created_elem = createEditorElem(create_el,el_class,true,log);
		const br_elem = brNode.cloneNode();
		const zero_with_space_node = zeroWithSpaceNode.cloneNode(true);
		const zero_node = zeroNode.cloneNode(true);
		const [pre_elem,pre_output,pre_outer] = pre_elems;
		await insertElemInto(editor_elem,created_elem,br_elem,parent_tag_name,tag_name,previous_elems);	
		MFT.writeSourceCode(pre_elem,editor_elem,pre_output,pre_outer);
	})();	
};

export const initialInlineElemToEditor = (...args)=>{
	const [editor_elem,create_el, el_class,tag_name, data_attribute,pre_elems, log = false] = args;
	(async()=>{
		const created_elem = createEditorElem(create_el,el_class,true,log);
		const zero_node = zeroNode.cloneNode(true);
		const [pre_elem,pre_output,pre_outer] = pre_elems;
		if(editor_elem.firstElementChild === null){
			appendFirstNode(editor_elem,created_elem);
		}
		if(editor_elem.lastChild !== null){
			const last_child = editor_elem.lastChild;
			console.log('last_child: ', last_child);
			if(last_child.nodeType !== Node.ELEMENT_NODE){
				appendLastNode(editor_elem,created_elem);
			}
		}	
		created_elem.appendChild(zero_node);
		MFT.writeSourceCode(pre_elem,editor_elem,pre_output,pre_outer);
	})();
};


export const insertInlineElemToParent = (...args)=>{
	const [editor_elem,create_el,el_class,parent_tag_name,tag_name, data_attribute,pre_elems, log = false] = args;
	//dept level 0
	async function insertElemInto(...insert_args){
		const[parent_elem,created_elem,parent_tag_name,tag_name,previous_elems,log] = insert_args;
		const zero_node = zeroNode.cloneNode(true);
		if(parent_elem.lastElementChild !== null){
			const childs_parent = parent_elem.lastElementChild;
			if(childs_parent.tagName === parent_tag_name){
				if(childs_parent.firstChild === null){
					childs_parent.appendChild(created_elem);
				}				
				if(childs_parent.lastChild !== null){
					if(childs_parent.lastChild.nodeType !== Node.ELEMENT_NODE){
						appendLastNode(childs_parent,created_elem);
					}
				}
				created_elem.appendChild(zero_node);
			}
			//dept level 1
			if(childs_parent !== null){
				const level_1 = childs_parent; 
				await insertElemInto(level_1,created_elem,parent_tag_name,tag_name,data_attribute,log);
				//dept level 2
				if(level_1.lastElementChild !== null){
					const level_2 = level_1.lastElementChild; 
					await insertElemInto(level_2,created_elem,parent_tag_name,tag_name,data_attribute,log);
					//dept level 3
					if(level_2.lastElementChild !== null){
						const level_3 = level_2.lastElementChild; 
						await insertElemInto(level_3,created_elem,parent_tag_name,tag_name,data_attribute,log);
						//dept level 4
						if(level_3.lastElementChild !== null){
							const level_4 = level_3.lastElementChild; 
							await insertElemInto(level_4,created_elem,parent_tag_name,tag_name,data_attribute,log);
						}
					}
				}
			}
		}
	}
	(async()=>{
		const created_elem = createEditorElem(create_el,el_class,true,log);
		const zero_with_space_node = zeroWithSpaceNode.cloneNode(true);
		const zero_node = zeroNode.cloneNode(true);
		const [pre_elem,pre_output,pre_outer] = pre_elems;
		
		await insertElemInto(editor_elem,created_elem,parent_tag_name,tag_name,data_attribute,log);
		//if(log === true){
			//console.log(`ancestor_elem(${tag_name}): `,ancestor_elem);
			//console.log(`child_elem(${tag_name}): `,child_elem);
		//}

		MFT.writeSourceCode(pre_elem,editor_elem,pre_output,pre_outer);
	})();
}

export const isPreviousElem = (...args)=>{
	const [parent_el, tag_name,replace_el,log = false] = args;
	let last_child;
	(async ()=>{
		if(parent_el !== null){
			if(parent_el.lastElementChild !== null && parent_el.lastElementChild.tagName !== 'BR'){
				last_child = parent_el.lastElementChild;
				if(log === true) console.log(`last_child: `,last_child);
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

export const removeActive = (...args)=>{
	const [tag_parent, log = null] = args;
	(async ()=>{
		let parent_children, alter_child;
		if(tag_parent.children.length > 0){
		parent_children = tag_parent.children;
			for (const parent_child of parent_children){
				if(parent_child.tagName !== 'BR'){
					(async () => await MFT.removeAttribute(parent_child,'data-active'))();
					if(log === true){
						console.log('data-active removed from: ', parent_child);
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
