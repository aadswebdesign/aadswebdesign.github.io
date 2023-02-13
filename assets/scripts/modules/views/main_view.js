/** modules/views/main_view.js */
import * as FT from './../../factory/functions.js';
import * as HE from './../../htmlManager/htmlElements.js';
import{landingTemplate,landingTemplateActions} from './../templates/landing_template.js';
export async function mainView(){
	await HE.div('block page relative', null, null, await landingTemplate(),true, 'main');
	const landing_template = await FT.elQuery('.landing-template');
	if(landing_template){
		await landingTemplateActions();
	}
}