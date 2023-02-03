/** templates/template_2.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: 	
 */
export async function templateTwo(){
	return await `templates/template_2.js`;
}
export const templateTwoActions = async ()=>{
	return await templateTwo().then(()=>{
			console.log('templateTwoActions');
	});

};