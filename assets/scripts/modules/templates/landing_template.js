/** templates/landing_template.js */
import * as FT from './../../factory/functions.js';
import {mediaHandler} from './../../factory/handlers.js'; 
import {svgLandingPage,svgLandingPage720,svgLandingPage720non} from './../../svgCreations/landingpage_svg.js';
export async function landingTemplate(){
	return await `<div class='svg-placeholder landing-template relative'></div>`;
}
export const landingTemplateActions = async ()=>{
	return await landingTemplate().then(()=>{
		return svgLandingPage().then(()=>{//ori 360, temporary on 720
			mediaHandler('(orientation: portrait) and (max-width: 720px)',svgLandingPage720,svgLandingPage720non,true);
		});
	});
};
