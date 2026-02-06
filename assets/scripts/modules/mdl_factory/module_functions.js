/**localhost  modules/modules_functions.js */
import * as FT from './../../factory/functions.js';
export const createAnchorElem = (...args)=>{
	const [el_class=null, el_id=null, el_href=null] = args;
	const created = FT.createElemNA('a');
	created.cloneNode(true);
	if(el_class !== null)
		FT.addClassesNA(created, el_class);
	if(el_id !== null)created.id = el_id;
	if(el_href !== null)created.href = el_href;
	return created;
}; 

export const createBlockItem = (...args)=>{
	const [el_class=null, el_id=null, block_id=null] = args;
		const created = FT.createElemNA('block-item');
		created.cloneNode(true);
		if(el_class !== null)
			FT.addClassesNA(created, el_class);
		if(el_id !== null)created.id = el_id;
		if(block_id !== null)
			created.dataset.blockItemId = block_id;
		return created;
};
export const createContentItem = (...args)=>{
	const [el_class=null, el_id=null,el_title = null] = args;
		const created = FT.createElemNA('content-item');
		created.cloneNode(true);
		if(el_class !== null){
			FT.addClassesNA(created, el_class);
		}
		if(el_id !== null){
			created.id = el_id;
		}
		if(el_title !== null){
			created.title = el_title;
		}
		return created;
};
export const createDetailsElem = (...args)=>{
	const [el_class=null, el_id=null, el_name=null, el_open= false] = args;
		const created = FT.createElemNA('details');
		created.cloneNode(true);
		if(el_class !== null)
			FT.addClassesNA(created, el_class);
		if(el_id !== null)created.id = el_id;
		if(el_name !== null) created.name = el_name;
		if(el_open === true) created.open = true;
		return created;
};

export const createDetailsContentElem = (...args)=>{
	const [el_class=null, el_id=null] = args;
		const created = FT.createElemNA('details-content');
		created.cloneNode(true);
		if(el_class !== null)
			FT.addClassesNA(created, el_class);
		if(el_id !== null)	created.id = el_id;
		return created;
};






export const createSummaryElem = (...args)=>{
	const [el_class=null, el_id=null, el_content = null, title=null] = args;
		
		const created = FT.createElemNA('summary');
		created.cloneNode(true);
		if(el_class !== null)
			FT.addClassesNA(created, el_class);
		if(el_id !== null) created.id = el_id;
		if(el_content !== null){
			const text_node = FT.createNodeNA(el_content);
			created.appendChild(text_node);
		} 
		if(title !== null) created.title = title;
		return created;
};





export const getSiteDetails = async (...args)=>{
	const [parent_elem] = args;
	//console.log(': ',);
	const last_child = parent_elem.lastElementChild ?? null;
	const year = await FT.getYear();
	if(last_child !== null && last_child.dataset.blockId === 'site_details'){
		const small = last_child.firstElementChild;
		const time = small.firstElementChild;
		time.append(year);
		//console.log(': ',);
	}
};
