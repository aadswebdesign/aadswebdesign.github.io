/** templates/landing_template.js */
import * as FT from './../../factory/functions.js';
import {mediaHandler} from './../../factory/handlers.js'; 
import {svgLandingPagePortrait,svgLandingPageLandscape} from './../../svgCreations/landingpage_svg.js';
export async function landingTemplate(){
	return await `<div class='svg-placeholder landing-template relative'></div>`;
}
export const landingTemplateActions = async (_obj)=>{
	const obj = _obj;
	return await landingTemplate().then(()=>{
			console.table({'landing_page: ':obj});
			mediaHandler('(orientation: portrait)',svgLandingPagePortrait,svgLandingPageLandscape,true);
	});
};