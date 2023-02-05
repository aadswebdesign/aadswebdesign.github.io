/** templates/landing_template.js */
import * as FT from './../../factory/functions.js';
import {mediaHandler} from './../../factory/handlers.js'; 
import {svgLandingPage,svgLandingPage360,svgLandingPage360non} from './../../svgCreations/landingpage_svg.js';
export async function landingTemplate(){
	return await `<div class='svg-placeholder landing-template relative'></div>`;
}
export const landingTemplateActions = async ()=>{
	return await landingTemplate().then(()=>{
		return svgLandingPage().then(()=>{
			mediaHandler('(max-width: 360px)',svgLandingPage360,svgLandingPage360non,true);
		});
	});
};
