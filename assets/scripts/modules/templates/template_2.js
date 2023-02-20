/** templates/template_2.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: 	
 */
export async function templateTwo(){
	return await `<p>For now I will leave this for what it is, because I've to figure out or having a blog is possible on github.pages.</p>
	<p>Is for when I have time for it.</p>
	`;
}
export const templateTwoActions = async (_obj,page_id)=>{
	const obj = _obj;
	console.table({[page_id]: obj});
	console.log('templateTwoActions',page_id);

};