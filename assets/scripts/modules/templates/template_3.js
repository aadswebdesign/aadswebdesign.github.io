/** templates/template_3.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: 	
 */
export async function templateThree(){
	return await `templates/template_3.js`;
}
export const templateThreeActions = async (_obj,page_id)=>{
	const obj = _obj;
	console.table({[page_id]: obj});
	console.log('templateThreeActions',page_id);
};