/** templates/template_1.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: 	
 */
export async function templateOne(){
	const template = `templates/template_1.js`;
	return await template;
}
export const templateOneActions = async ()=>{
	return await templateOne().then(()=>{
		//console.log('templateOneActions');
	});
};