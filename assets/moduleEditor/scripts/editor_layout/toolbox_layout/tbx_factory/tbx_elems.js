// tbx_layout/tbx_factory/tbx_elems.js
import * as MFT from './../../../factory/module_functions.js';
export const tbxBtnEl = async()=>{
	const create_elem = await MFT.createElem('button');
	create_elem.cloneNode(true);
	return await create_elem;
}
export const tbxBtnBlockEl = async()=>{
	const create_elem = await MFT.createElem('btn-block');
	create_elem.cloneNode(true);
	return await create_elem;
}

export const tbxCtnEl = async()=>{
	const create_elem = await MFT.createElem('toolbox-ctn');
	create_elem.cloneNode(true);
	return await create_elem;
}
export const tbxDdEl = async()=>{
	const create_elem = await MFT.createElem('dd');	
	create_elem.cloneNode(true);
	return create_elem;
};

export const tbxDivEl = async()=>{
	const create_elem = await MFT.createElem('div');	
	create_elem.cloneNode(true);
	return create_elem;
};
export const tbxDtEl = async()=>{
	const create_elem = await MFT.createElem('dt');	
	create_elem.cloneNode(true);
	return create_elem;
};

export const tbxLabelEl = async()=>{
	const create_elem = await MFT.createElem('label');	
	create_elem.cloneNode(true);
	return create_elem;
};
export const tbxInputEl = async()=>{
	const create_elem = await MFT.createElem('input');	
	create_elem.cloneNode(true);
	return create_elem;
};
export const tbxItemsCtnEl = async()=>{
	const create_elem = await MFT.createElem('items-ctn');
	create_elem.cloneNode(true);
	return create_elem;
};
export const tbxOptionEl = async()=>{
	const create_elem = await MFT.createElem('option');
	create_elem.cloneNode(true);
	return create_elem;
};
export const tbxSelectEl = async()=>{
	const create_elem = await MFT.createElem('select');
	create_elem.cloneNode(true);
	return create_elem;
};
export const tbxWrapperEl = async()=>{
	const create_elem = await MFT.createElem('items-wrapper');
	create_elem.cloneNode(true);
	return create_elem;
};