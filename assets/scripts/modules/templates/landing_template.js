/** templates/landing_template.js */
import * as FT from './../../factory/functions.js';
export async function landingTemplate(){
	return await `I'm from the landing template and have been created with 'createHtmlHelper'. That should become something cool!`;
}
export const landingTemplateActions = async ()=>{
	return await landingTemplate().then(()=>{
			console.log('landingTemplateActions');
	});
};
