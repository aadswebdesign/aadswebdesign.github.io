//editorManager/mdl_constructs/dom_functions.js
import * as MFT from './../factory/module_functions.js';

export const appendBr = (...args)=>{
	const [tag_parent,br_el] = args;
	(async ()=>{
		if(tag_parent.lastElementChild !== null && tag_parent.lastElementChild.tagName !== 'BR'){
			tag_parent.append(br_el);
		}
	})();
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

export const brNode = await MFT.createElem('br');


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

export const isPreviousElem = (...args)=>{
	const [parent_el, tag_name,replace_el,log = false] = args;
	let last_child;
	(async ()=>{
		if(parent_el !== null){
			if(parent_el.lastElementChild !== null && parent_el.lastElementChild.tagName !== 'BR'){
				last_child = parent_el.lastElementChild;
				if(last_child.previousElementSibling !== null && last_child.previousElementSibling.tagName === tag_name) last_child.replaceWith(replace_el);
			}
			if(log === true){
				console.log(`isPreviousElem(${tag_name}): `,last_child);
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
				(async () => await MFT.removeAttribute(parent_child,'data-active'))();
				if(log === true){
					console.log('parent_child: ', parent_child);
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
