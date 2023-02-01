/** @description: main_view.js */
import * as HE from './../../htmlManager/htmlElements.js';
import{landingTemplate} from './../templates/landing_template.js';
export async function mainView(){
	//await HE.createElemHelper('main', 'relative', null,{role: 'presentation'}, null,false,'.wrap.container');
	await HE.createElemHelper('div', 'block page relative', null, null, await landingTemplate(),true, 'main');
	
}
