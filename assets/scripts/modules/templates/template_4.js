/** templates/template_4.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: 	
 */
export async function templateFour(){
	return await `templates/template_4.js`;
}
export const templateFourActions = async (_obj,page_id)=>{
	const obj = _obj;
	console.table({[page_id]: obj});
	console.log('templateFourActions',`#${page_id}`);
};