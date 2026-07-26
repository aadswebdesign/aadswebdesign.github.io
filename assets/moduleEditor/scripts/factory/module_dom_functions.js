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
export const zeroNode = await MFT.createNode('');
export const zeroWithNoBreakNode = await MFT.createNode('\uFEFF');
export const zeroWithSpaceNode = await MFT.createNode('\u200B');
export const addListLayer = async (...args) => {
	let [layer_ctn, list_block] = args;
	let last_child;
	if(layer_ctn !== undefined && layer_ctn.hasAttribute('data-list-indent') && layer_ctn.lastElementChild !==null)
		last_child = layer_ctn.lastElementChild;
	if(last_child !== undefined && last_child.hasAttribute('data-list-active'))
		layer_ctn.appendChild(list_block);
	//console.log('layer_ctn: ',layer_ctn);
	return await layer_ctn;
};

export const addSelectLayer = async (...args) => {
	let [layer_ctn, att_key,att_value,has_key,initial = false] = args;
	let last_child,li_el,target_el;
	if(initial === true){
		const layer_prt = layer_ctn.parentElement;
		if(!layer_prt.hasAttribute(has_key)){
			layer_ctn = layer_prt.lastElementChild;
			console.log('layer_prt: ',layer_prt);
			return layer_ctn.setAttribute(att_key,att_value);
		}
	} else{
		if(layer_ctn !== null && layer_ctn.lastElementChild !== null && layer_ctn.lastElementChild.hasAttribute(has_key)){
			last_child = layer_ctn.lastElementChild;
			target_el = last_child.lastElementChild;
			target_el.setAttribute(att_key,att_value);
			console.log('target_el: ',target_el);
			
		}		
		return target_el;
	}
  return;
};

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

export const appendAfterNode = (...args)=>{
	const [parent_el,create_el,br_el = null,log = false] = args;
	if(parent_el.lastChild !== null && parent_el.lastChild.nodeType === 3){
		if(br_el !== null){
			parent_el.append(create_el,br_el);
		}else{
			parent_el.append(create_el);
		}
	}
	if(log === true){
		console.log(`appended AfterNode too (${parent_el.tagName}) : `,parent_el);
	}
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


export const createModuleEl = async (...args)=>{
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

export const getNearestSelectElem = async (...args) =>{
	const [child_el,layer] = args;
	let last_child;
	if(layer === 1){
		if(child_el !== undefined && child_el.lastElementChild.lastElementChild !== null)
		last_child = child_el.lastElementChild.lastElementChild;
		console.log('layer: 1',last_child);
	}else
	if(layer === 2){
		if(last_child !== undefined && last_child.lastElementChild !== null){
			last_child = last_child.lastElementChild;
			console.log('layer: 2',last_child);
		}
	}	
	
	/*
	switch(layers){
		case 1:{
			if(child_el !== undefined && child_el.lastElementChild.lastElementChild !== null)
			last_child = child_el.lastElementChild.lastElementChild;
			console.log('layer: 1',last_child);
		}
		break;
		case 2:{
			if(last_child !== undefined && last_child.lastElementChild.lastElementChild !== null){
			last_child = last_child.lastElementChild.lastElementChild;
			console.log('layer: 2',last_child);
			}
		}
		break;
		case 3:{
			if(last_child !== undefined && last_child.lastElementChild.lastElementChild !== null)
			last_child = last_child.lastElementChild.lastElementChild;
			console.log('layer: 3',last_child);
		}
		break;
		default:{
			return;
		}
	}
	*/
	return last_child;
};

export const isParentElement = (...args)=>{
	const [parent_el, tag_name,replace_el,log = false] = args;
	(async ()=>{
		if(parent_el !== null){
			if(parent_el.tagName === tag_name){
				if(parent_el.lastElementChild !== null){
					const last_child = parent_el.lastElementChild;
					last_child.replaceWith(replace_el);
					if(log === true){
						console.log(`Not allowed parent(${tag_name}): `,last_child);
					}
				}
			}
		}
	})();
};

export const removeBlockActive = (...args)=>{
	const [parent_el,data_attribute, log = null] = args;
	(async ()=>{
		let parent_children;
		if(parent_el.children.length > 0){
			parent_children = MFT.uniqueArray(parent_el.children);
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