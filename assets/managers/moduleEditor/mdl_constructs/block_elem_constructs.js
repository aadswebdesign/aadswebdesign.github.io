//editorManager/mdl_constructs/block_elem_constructs.js
//import * as MC from './../factory/module_classes.js';
import * as MFT from './../factory/module_functions.js';
import * as DN from './../factory/dom_nodes.js';

const appendFirstElem = (...args)=>{
	const [parent_el,create_el] = args;
	if(parent_el.firstElementChild === null){
		parent_el.append(create_el);
	}
}
const excludeParents = (...args)=>{
	const [parent_el,tag_elems] = args;
	let return_elem;
	if(Array.isArray(tag_elems)){
		for (const tag_elem of tag_elems){
			if(parent_el.tagName === tag_elem) return_elem = false;
		}
		return return_elem;
	}
}

const isParent = (...args)=>{
	const [parent_el, tag_name] = args;
	if(parent_el.tagName !== tag_name) return false;
}

const isPreviousElem = (...args)=>{
	const [parent_el, tag_name] = args;
	let last_child;
	if(parent_el !== null){
		if(parent_el.lastElementChild !== null && parent_el.lastElementChild.tagName !== 'BR'){
			last_child = parent_el.lastElementChild;
			if(last_child.previousElementSibling !== null && last_child.previousElementSibling.tagName === tag_name) last_child.replaceWith('');
		}
	}
};

const parentFamily = (...args)=>{
	const [editor_el] = args;
	let editor_children, child_siblings,sibling,return_tag;
	if(editor_el.children.length > 0){
		editor_children = editor_el.children;
		for (const editor_child of editor_children){
			if(editor_child.children.length > 0){
				child_siblings = editor_child.children;
				for(const child_sibling of child_siblings){
					sibling = child_sibling;
				}
				return_tag = sibling.tagName;
			}else{
				return_tag = editor_child.tagName;
			}
		}
	}else{
		return_tag = 'EDITOR-CANVAS';
	}
	return return_tag;
};

const parentInit = (...args)=>{
	const [parent_elems] = args;
	let return_parent;
	for(const parent_elem of parent_elems){
		return_parent = parent_elem;
	}	
	return return_parent;
}

const tagInit = (...args)=>{
	const [tag] = args;
	if(tag !== null){
		return tag.parentElement;
	}
}

const replaceWithElem = (...args)=>{
	const [tag_parent,create_el,tag_elem] = args;
	let old_child;
	if(tag_parent !== null && tag_parent.lastElementChild.tagName === tag_elem){
		old_child = tag_parent.lastElementChild;
		old_child.replaceWith(create_el);
	}
}

/**
 * class where new elements are created and processed
 */
class BlockElemOnConstruct{
	#mdl_name;
	#editor_el;
	#create_el;
	#parent_el;
	#tag_name;
	#pre_elem;
	#pre_output;
	#pre_outer;
	constructor(obj_args){
		const{mdl_name,tag_name,editor_el,create_el,pre_els}= obj_args;
		this.#mdl_name = mdl_name;
		this.#editor_el = editor_el;
		this.#pre_elem = pre_els[0];
		this.#pre_output = pre_els[1];
		this.#pre_outer = pre_els[2];
		//this.#tag_name = tag_name;
		//BlockElemOnConstruct
		(async ()=>{
			this.#create_el = async () => {
				const elem = create_el.cloneNode(true);
				await MFT.addClasses(elem, ['relative','active-el']);
				return await elem;
			};

			//lets
			let old_child,tag_parent;
			switch(this.#mdl_name){
				case 'article_mdl':{
					//step1
					appendFirstElem(this.#editor_el,await this.#create_el())
					//step2
					const tag = await MFT.get_tags(this.#editor_el)
					tag_parent = tagInit(tag);
					//step3
					if(tag_parent !== null){
						//step3a
						replaceWithElem(tag_parent,await this.#create_el(),'BR');
						//step 3b
						if(tag_parent.tagName !== 'EDITOR-CANVAS')tag.replaceWith('');
					}
				}
				break;
				case 'art_header_mdl':{
					//step1
					const parent_elems = await MFT.getTagNames('ARTICLE',this.#editor_el);
					this.#parent_el = parentInit(parent_elems);
					//step2
					excludeParents(this.#parent_el,['ARTICLE-MAIN','ARTICLE-FOOTER']);
					//step3
					const is_parent = isParent(this.#parent_el,'ARTICLE');
					//step4
					if(is_parent !== null){
						//step4a
						appendFirstElem(this.#parent_el,await this.#create_el());
						//step4b
						const tag = await MFT.get_tags(this.#parent_el);
						tag_parent = tagInit(tag);
						//step4c
						replaceWithElem(tag_parent,await this.#create_el(),'BR');
					}
					//step5
					isPreviousElem(this.#parent_el,'ARTICLE-HEADER');
				}
				break;
				case 'art_main_mdl':{
					//step1
					const parent_elems = await MFT.getTagNames('ARTICLE',this.#editor_el);
					this.#parent_el = parentInit(parent_elems);
					//step2
					excludeParents(this.#parent_el,['ARTICLE-HEADER','ARTICLE-FOOTER']);
					//step3
					const is_parent = isParent(this.#parent_el,'ARTICLE');
					//step4
					if(is_parent !== null){
						//step4a
						appendFirstElem(this.#parent_el,await this.#create_el());
						//step4b
						const tag = await MFT.get_tags(this.#parent_el);
						tag_parent = tagInit(tag);
						//step4c
						replaceWithElem(tag_parent,await this.#create_el(),'BR');
					}
					//step5
					isPreviousElem(this.#parent_el,'ARTICLE-MAIN');
				}
				break;
				case 'art_footer_mdl':{
					//step1
					const parent_elems = await MFT.getTagNames('ARTICLE',this.#editor_el);
					this.#parent_el = parentInit(parent_elems);
					//step2
					excludeParents(this.#parent_el,['ARTICLE-HEADER','ARTICLE-MAIN']);
					//step3
					const is_parent = isParent(this.#parent_el,'ARTICLE');
					//step4
					if(is_parent !== null){
						//step4a
						appendFirstElem(this.#parent_el,await this.#create_el());
						//step4b
						const tag = await MFT.get_tags(this.#parent_el);
						tag_parent = tagInit(tag);
						//step4c
						replaceWithElem(tag_parent,await this.#create_el(),'BR');
					}
					//step5
					isPreviousElem(this.#parent_el,'ARTICLE-FOOTER');
				}
				break;
				case 'hr_mdl':{
					
				}
				break;
				case 'paragraph_mdl':{
					//step1
					this.#tag_name = parentFamily(this.#editor_el);
					console.log('tag_name: ',this.#tag_name);
					const parent_elems = await MFT.getTagNames(this.#tag_name,this.#editor_el);
					this.#parent_el = parentInit(parent_elems);
					//step2
					appendFirstElem(this.#parent_el,await this.#create_el());
					//console.log('parent_el: ',this.#parent_el);
					//step3
					const tag = await MFT.get_tags(this.#parent_el);
					tag_parent = tagInit(tag);
					//step4
					replaceWithElem(tag_parent,await this.#create_el(),'BR');
					//step5
					
				}
				break;
				
			}
			MFT.writeSourceCode(this.#pre_elem,this.#editor_el,this.#pre_output,this.#pre_outer);
		})();
	}
}
export const blockElemOnConstruct = async (obj_args)=>{
	return new BlockElemOnConstruct(obj_args);//
};


const tagParentAppendBr = (...args)=>{
	const [tag_parent,br_el] = args;
	(async ()=>{
		if(tag_parent.lastElementChild.tagName !== 'BR'){
			tag_parent.append(br_el);
		}
	})();
}

const tagParentChildrenOff = (...args)=>{
	const [tag_parent] = args;
	(async ()=>{
		let parent_children;
		if(tag_parent.children.length > 0){
		parent_children = tag_parent.children;
			for(const parent_child of parent_children){
				//console.log('parent_child: ',parent_child);
				await MFT.removeClass(parent_child, 'active-el');
			}
		}		
	})();
}

const tagLastChildRemoveBr = (...args)=>{
	const [tag_parent,br_el] = args;
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
				}
			}
		}
	
	})();
}

/**
 * class where present elements are manipulated
 */
class BlockElemOffConstruct{
	#mdl_name;
	#ancestor;
	#br_el;
	#editor_el;
	#create_el;
	#parent_el;
	#tag_name;
	#pre_elem;
	#pre_output;
	#pre_outer;
	//off
	constructor(obj_args){
		const{mdl_name,tag_name,editor_el,create_el,pre_els}= obj_args;
		this.#mdl_name = mdl_name;
		this.#br_el = DN.brNode.cloneNode();
		this.#editor_el = editor_el;
		this.#pre_elem = pre_els[0];
		this.#pre_output = pre_els[1];
		this.#pre_outer = pre_els[2];
		//BlockElemOffConstruct 
		(async ()=>{
			//lets
			let parent_children,parent_first_child,parent_old_child,old_child,tag_parent,tag_children;
			switch(this.#mdl_name){
				case 'article_mdl':{
					//console.log('article_mdl off');
					const tag = await MFT.get_tags(this.#editor_el);
					tag_parent = tagInit(tag);
					if(tag_parent.tagName !== 'EDITOR-CANVAS')tag.remove();
					tagParentChildrenOff(tag_parent);
					tagParentAppendBr(tag_parent,this.#br_el);
					//tag_parents
					tagLastChildRemoveBr(tag_parent,this.#br_el);
				}
				break;
				case 'art_header_mdl':{
					const parent_elems = await MFT.getTagNames('ARTICLE',this.#editor_el);
					this.#parent_el = parentInit(parent_elems);
					const tag = await MFT.get_tags(this.#parent_el);
					tag_parent = tagInit(tag);
					if(tag_parent.tagName !== 'ARTICLE')tag.replaceWith('');
					tagParentChildrenOff(tag_parent);
					tagParentAppendBr(tag_parent,this.#br_el);

					//tag_parents
					tagLastChildRemoveBr(tag_parent,this.#br_el);
				}
				break;
				case 'art_main_mdl':{
					const parent_elems = await MFT.getTagNames('ARTICLE',this.#editor_el);
					this.#parent_el = parentInit(parent_elems);
					const tag = await MFT.get_tags(this.#parent_el);
					tag_parent = tagInit(tag);
					if(tag_parent.tagName !== 'ARTICLE')tag.replaceWith('');
					tagParentChildrenOff(tag_parent);
					tagParentAppendBr(tag_parent,this.#br_el);
					//tag_parents
					tagLastChildRemoveBr(tag_parent,this.#br_el);
				}
				break;
				case 'art_footer_mdl':{
					const parent_elems = await MFT.getTagNames('ARTICLE',this.#editor_el);
					this.#parent_el = parentInit(parent_elems);
					const tag = await MFT.get_tags(this.#parent_el);
					tag_parent = tagInit(tag);
					if(tag_parent.tagName !== 'ARTICLE')tag.replaceWith('');
					tagParentChildrenOff(tag_parent);
					tagParentAppendBr(tag_parent,this.#br_el);
					//tag_parents
					tagLastChildRemoveBr(tag_parent,this.#br_el);
				}
				break;
				case 'hr_mdl':{
					
				}
				break;
				case 'paragraph_mdl':{
					//step1					
					this.#tag_name = parentFamily(this.#editor_el);
					const parent_elems = await MFT.getTagNames(this.#tag_name,this.#editor_el);
					this.#parent_el = parentInit(parent_elems);
					//step2
					const tag = await MFT.get_tags(this.#parent_el);
					tag_parent = tagInit(tag);
					//step3
					tagParentChildrenOff(tag_parent);
					//step4
					tagParentAppendBr(tag_parent,this.#br_el);
					//step5 todo & if needed, should become tagLastSiblingRemoveBr
					//tagLastChildRemoveBr(tag_parent,this.#br_el);
				}
				break;
			}
			MFT.writeSourceCode(this.#pre_elem,this.#editor_el,this.#pre_output,this.#pre_outer);
			
		})();
		//console.log(': ',);
	}
}
export const blockElemOffConstruct = async (args)=>{
	return new BlockElemOffConstruct(args);//
};
