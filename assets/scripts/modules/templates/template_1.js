/** templates/template_1.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: 	
 */
export async function templateOne(){
	const template = `<div id='templateOne' class='template-one relative'>templateOne</div>`;
	return await template;
}
export const templateOneActions = async (_obj,page_id)=>{
	const obj = _obj
	console.table({[page_id]: obj})
	console.log('templateOneActions',page_id)
	const templateOne = await FT.getIdHelper('templateOne')
	console.log('templateOne',templateOne)
};