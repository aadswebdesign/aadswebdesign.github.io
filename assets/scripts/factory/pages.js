/** pages.js*/
import * as HL from './handlers.js';

import {landingTemplate,landingTemplateActions} from './../modules/templates/landing_template.js';
import {templateOne,templateOneActions} from "./../modules/templates/template_1.js";
import {templateTwo,templateTwoActions} from "./../modules/templates/template_2.js";
import {templateThree,templateThreeActions} from "./../modules/templates/template_3.js";
import {templateFour,templateFourActions} from "./../modules/templates/template_4.js";
export const pagesSetup = async ()=>{
	const HandlerArgs = {
		parent: '.wrap.container', 
		page: '.page',
		hashes: [
			['','menu_item0'],
			['#home','menu_item1'],
			['#blog','menu_item2'],
			['#about','menu_item3'],
			['#projects','menu_item4']
		],
		data:[
			['menu_item1',{url: "#home",content: await templateOne()},await templateOneActions()],//let see or this is working
			['menu_item2',{url: "#blog",content: await templateTwo()},await templateTwoActions()],
			['menu_item3',{url: "#about",content: await templateThree()},await templateThreeActions()],
			['menu_item4',{url: "#projects",content: await templateFour()},await templateFourActions()]
		] 
	};
	await HL.pagesHandler(HandlerArgs.parent,HandlerArgs.page,HandlerArgs.hashes,HandlerArgs.data);
};
