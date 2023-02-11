/** templates/template_3.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: 	
 */
export async function templateThree(){
	return await `templates/template_3.js`;
}
export const templateThreeActions = async ()=>{
	return await templateThree().then(()=>{
		//console.log('templateThreeActions');
	});
};