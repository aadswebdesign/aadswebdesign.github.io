//localhost managers/moduleEditor/factory/functions.js
//async functions
export const addAttributes = async (...args) =>{
	const [elem,attributes] = args;
	const object = new Map([['att_objects',attributes]]);
	const atts = object.get('att_objects');
	let el;
	if(elem){
		el = elem;
		if(atts){
			for (const [key, value] of Object.entries(atts)){
				//possible to add if key not exists?
				const modified_key = key.replace('data_', 'data-');
				el.setAttribute(modified_key,value);
			}
		}
	}
	return await el;
};

export const addClass = async (...args)=>{
	const [elem,add_class,log = false]= args;
	let el;
	if(null !== elem){
		el = elem;
		if(!el.classList.contains(add_class)){
			el.classList.add(add_class);
		}
		if(log === true) console.log(`class ${add_class} added to: ${el}`);		
	}
	return await el;
};
export const addClasses = async (...args)=>{
	const [elem,classes=[]]= args;
	let el
	if(null !== elem){
		for(const cl of classes){
			el = await addClass(elem,cl);
		}	
	}
	return el;
};

export async function createElem(elem = null){
	if(null !== elem){
		return await document.createElement(elem);
	}	
}

export const createNode = async node => document.createTextNode(node);

export const dataOnToggle = async (...args) =>{
	const [elem,on_off] = args
	if(!elem.hasAttribute('data-on')){
		elem.setAttribute('data-on','')
		if(on_off === true){
			setTimeout(()=>{
			elem.removeAttribute('data-on');
			},200);
		}
	}else{
		elem.removeAttribute('data-on')
	}
}

export async function elQuery(...args){
	const [elem,el_all=false,el_parent] = args;
    let el;
	if(true === el_all){
		if(el_parent) el = el_parent.querySelectorAll(elem);
    	else el = document.querySelectorAll(elem);
	}else{
		if(el_parent) el = el_parent.querySelector(elem);
		else el = document.querySelector(elem);
	}
    return await el;
}

export const getAncestor = async (...args)=>{
	const [elem, base_elem, tag_name]= args;
	let ancestor;
	if((elem !== null)&&(elem.tagName !== 'BR')&&(elem.tagName !== `${tag_name}`)){
		if((elem.firstElementChild !== null)&&(elem.firstElementChild.tagName !== tag_name)){
			let first_child = elem.firstElementChild;
			ancestor = first_child;
		}else{
			ancestor = elem;
		}
	}else{
		ancestor = base_elem
	}
	//console.log(`getAncestor (${tag_name})`,ancestor);
	return ancestor;
}

//?
export const getAllTagNames = async (parent = null) =>{
	return await getTagNames('*',parent);
}

export async function getClassHelper(...args){
	const [class_name,class_parent=null] = args;
	if(class_parent !== null){
		return await class_parent.getElementsByClassName(class_name);
	}
	return await document.getElementsByClassName(class_name);
}

export async function getIdHelper(id){
    if(id){
		return await document.getElementById(id);
	}
}

export const getRange = () => {
	const selection = document.getSelection();
	if (selection.rangeCount === 0) return
	return selection.getRangeAt(0)
};	

export const getSelection = async (...args)=>{
	const [clone = false,remove = false,add_range= false, range_val] = args;
	const selection = document.getSelection();
	if (selection.rangeCount === 0) return;
	let _selection = null;
	if(clone === true){
		_selection = selection.getRangeAt(0).cloneRange();
	}else{
		_selection = selection.getRangeAt(0);
	}
	if(remove === true){
		_selection = selection.removeAllRanges();
	}
	if(add_range === true){
		_selection = selection.addRange(range_val);
	}
	return _selection;
};

export const getTagNames = async (...args) => {
	const [tag, parent = null] = args
	let el;
	if(parent !== null){
		el = parent.getElementsByTagName(tag);
	}else{
		el = document.getElementsByTagName(tag);
	}
	return await el;
}

export const removeClass = async (...args)=>{
	const [elem,remove_class]= args;
	let el;
	if(null !== elem){
		el = elem;
		if(el.classList.contains(remove_class)){
			el.classList.remove(remove_class);
		}
		if(el.classList.length === 0){
				el.removeAttribute('class');
				console.log('el', el);
		}
	}
	return await el;
};

export const replaceClass = async (...args)=>{
	const [elem,remove_class,add_class] = args;
	let el;
	if(null !== elem){
		el = elem;
		if(remove_class && add_class){
			el.classList.replace(remove_class,add_class);
		}
	}
	return await el;
};

export const setContent = async function (...args) { 
	const [elem,content,add_str = false] = args;
	let el;
	if(elem){
		el = elem;
		if(add_str === true) {
			el.innerHTML += content;
		}else{
			el.innerHTML = content;
		}
	}
	return await el;
};

export function setCallbackParams(...args){
	const [callback, params] = args;
	if(callback){
		return callback(params);
	}
}

/**
 * Get the number of characters in an element
 *
 * @param {Element} element
 * @return {number}
 */
export function getTextLength(element) {
  const range = element.ownerDocument.createRange()
  range.selectNodeContents(element)
  return range.toString().length;
}

export function setCursor(...args) {
	const [parent_el] = args;
	(async()=>{
		//console.log('parent_el: ',parent_el);
        const selection = window.getSelection();
        const range = document.createRange();
		const child_nodes = parent_el.childNodes;		
		//console.log('child_nodes: ',child_nodes);
		const child_node = child_nodes[0];	
		//console.log('child_node: ',child_node.textContent);
		
		
		//const child_nodes2 = child_node.childNodes;		
		//console.log('child_nodes2: ',child_nodes2);

		
		
		//const child_idx = child_elem.indexOf(child_elem2);
		//console.log('child_idx: ',child_idx);
		
		//const child_idx = option1
		
		
		
		
		
		
		
	})()
}

export const setTriggerKey = (...args)=>{
	const [key_el, key_action, key_value,key_code] = args;
	//KeyboardEvent
	const event = new KeyboardEvent(key_action,{
		view: window,
		bubbles: true,
		cancelable: true,
		key: key_value,
		keyCode: key_code,
	});
	//console.log('trigger',event);
	key_el.dispatchEvent(event);
}


export const setForLoop = async (args) =>{
	const argMap = new Map([['loop_objects',args]]);
	const argObjects = argMap.get('loop_objects');
	const {limit,callback,backwards} = argObjects; 
	let i;
	if (backwards) {
		for (i = limit - 1; i >= 0; i--) callback(i)
	}else{
		for (i = 0; i < limit; i++) callback(i)
	}
}

export const setTagIds = async (...args) =>{
	const [tag_name,parent_elem] = args;
	const tags = await getTagNames(tag_name,parent_elem);
	let i = 0;
	for(const tag of uniqueArray(tags)){
		tag.setAttribute('data-mdl_id',`${tag_name.toLowerCase()}_${++i}`);
	}
};

export const setCounter = async (...args) =>{
	const [tag_name,parent_elem] = args;
	const tags = await getTagNames(tag_name,parent_elem);
	let i = 0;
	for(const tag of uniqueArray(tags)){
		tag.setAttribute('data-count',++i);
	}
};

export const setCountNode = async (...args) =>{
	const [tag_name,parent_elem,suffix] = args;	
	const tags = await getTagNames(tag_name,parent_elem);
	let i = 0;
	for(const tag of uniqueArray(tags)){
		return await createNode(`${++i} ${suffix}`)
	}
}

export const setWhileLoop = async (args) =>{
	const argMap = new Map([['while_objects',args]]);
	const argObjects = argMap.get('while_objects');
	const {condition,callback,limit=null} = argObjects; 
	let i = 0, max;
	const obj = { count: 0 }
	const increment = obj => {
		obj.count++
	}
	if(limit === null){
		max = 1000;
		while (condition(i)) {
			if (i++ >= max) {
				throw new Error('Infinite loop detected and prevented')
			}
			value = callback(i)
		}
		return value
	}else{
		max = limit;
		while (obj.count < max) {	
			callback()	
			increment(obj);
		}		
	}
} 

export const trigger_click = (...args) => {
	const [parent_el,btn_elem] = args;
	parent_el.addEventListener("keydown", async(event) => {
		if(event.key === 'Enter'){
			btn_elem.click();
			//console.log('triggered down: ',btn_elem);
		}
	})	
	parent_el.addEventListener("keyup", async(event) => {
		if(event.key === 'Enter'){
			btn_elem.click();
			setCursor(parent_el);
			//console.log('triggered up: ',btn_elem);
		}
	})	
} 

export const wrapSelection = async (...args)=>{
	const [elem] = args
	const selection = document.getSelection();
	if (selection.rangeCount > 0 && !selection.isCollapsed){
		const range = selection.getRangeAt(0).cloneRange();
		if(elem){
			try{
				range.surroundContents(elem);
				console.log('Selection saved!');
			}catch(log){
				console.log('node is not a text node but when you select again it will use the ancestor text node.');
			}
		}
	}else{
		console.log('No selection to save!');
	}
}

export function escapeHtml(str) {
	return str.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g, "\"").replace(/'/g, "'");
}

export const moduleMap = new Map();

export const uniqueArray = (array) => Array.from(new Set(array));

export function writeSourceCode (...args) {
	const [pre_elem,editor_elem,pre_output = false, outer = false] = args
	if(pre_output === true){
		if(outer === true){
			pre_elem.innerText = editor_elem.outerHTML;
		}else{
			pre_elem.innerText = editor_elem.innerHTML; 
		}
	}
}

export function writeToTextArea(...args){//todo testing
	const [textarea_elem,textarea_rows,textarea_cols,editor_elem,write_to_textarea = false,writing_raw = false ] = args;
	textarea_elem.cols = textarea_cols;
	textarea_elem.rows = textarea_rows;
	if(write_to_textarea === true){
		if(writing_raw === true){
			textarea_elem.innerText = editor_elem.outerHTML
		}else{
			textarea_elem.innerHTML = escapeHtml(editor_elem.innerHTML)
		}
	}
}
