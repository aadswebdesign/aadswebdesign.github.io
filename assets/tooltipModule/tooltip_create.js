//tooltipModule/tooltip_create.js
import * as MFT from './factory/mdl_functions.js';
import {tooltipActions} from './tooltip_actions.js';
class TooltipCreate{
	#parent_el;
	create_elem;	
	constructor(...args){
		const[parent_el] = args;
		this.#parent_el = parent_el ?? null;
		(async()=> {
			this.create_elem = await MFT.createElem('tooltip-ctn');
			this.create_elem.cloneNode(true);
			this.create_elem.role = 'tooltip';
			await MFT.addClasses(this.create_elem,['tooltip-ctn','absolute','display-inline']);
			if(this.#parent_el !== null && this.#parent_el.hasAttribute('title')){
				await tooltipActions(this.#parent_el,this.create_elem);
			}			
		})();
		//console.table({'TooltipCreate': args});
	}
}
export const tooltipCreate = async (...args)=>{
	return new TooltipCreate(...args);
}