/** @description: main_view.js */
import * as FT from './../../factory/functions.js';
import{landingTemplate} from './../templates/landing_template.js';
async function mainView(){
	//await FT.createElemHelper('main', 'relative', null,{role: 'presentation'}, null,false,'.wrap.container');
	await FT.createElemHelper('div', 'block page relative', null, null, await landingTemplate(),true, 'main');
	
}
export{mainView};