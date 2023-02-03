/** templates/template_4.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: 	
 */
export async function templateFour(){
	return await `templates/template_4.js`;
}
export const templateFourActions = async ()=>{
	return await templateFour().then(()=>{
		console.log('templateFourActions');
	});
};