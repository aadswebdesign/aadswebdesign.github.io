/** assets/scrips/factory/actions.js*/
import * as FT from './functions.js';
import * as HL from './handlers.js';
import {landingTemplate,landingTemplateActions} from './../modules/templates/landing_template.js';
import {templateOne,templateOneActions} from "./../modules/templates/template_1.js";
import {templateTwo,templateTwoActions} from "./../modules/templates/template_2.js";
import {templateThree,templateThreeActions} from "./../modules/templates/template_3.js";
import {templateFour,templateFourActions} from "./../modules/templates/template_4.js";
import {templateFive,templateFiveActions} from "./../modules/templates/template_5.js";
export const generals = async ()=> {
	await FT.setContent('small.my-details',`awd<time><i> &#169; </i>${await FT.getYear()}</time>`,false,true);
	const main = await FT.elQuery('main')
	//await FT.userAgentString();
	main.addEventListener('click',(event)=>{
		event.stopPropagation();
	});
};
export const pagingSetup = async ()=>{
	const PagingArgs = {
		objects:{
			target_id: '.wrap.container', 
			page: '.page',
		},
		hashes: [
			[' ','menu_item_0'],
			['#home','menu_item_1'],
			['#blog','menu_item_2'],
			['#about','menu_item_3'],
			['#projects','menu_item_4'],
			['#editor','menu_item_5']
		],
		data:[
			['menu_item_0',''],
			['menu_item_1',{url:"#home",content: await templateOne(),callback: await templateOneActions}],//let see or this is working
			['menu_item_2',{url:"#blog",content: await templateTwo(),callback: await templateTwoActions}],
			['menu_item_3',{url:"#about",content: await templateThree(),callback:await templateThreeActions}],
			['menu_item_4',{url:"#projects",content: await templateFour(),callback:await templateFourActions}],
			['menu_item_5',{url:"#editor",content: await templateFive(),callback:await templateFiveActions}]
		] 
	};

	const PA = PagingArgs;
	await HL.pagingHandler({...PA.objects},PA.hashes,PA.data);
};
