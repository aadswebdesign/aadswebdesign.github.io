/** templates/landing_template.js */
import * as FT from './../../factory/functions.js';
import {mediaHandler} from './../../factory/handlers.js'; 
import {svgLandingPagePortrait,svgLandingPageLandscape} from './../../svgCreations/landingpage_svg.js';
export async function landingTemplate(){
	return await `<div class='svg-placeholder landing-template relative'></div>`;
}
export const landingTemplateActions = async ()=>{
	const landing_template = await FT.elQuery('.landing-template');
	if(landing_template){
		return await landingTemplate().then(()=>{
			mediaHandler('(orientation: portrait)',svgLandingPagePortrait,svgLandingPageLandscape,true);
		});
	}
};