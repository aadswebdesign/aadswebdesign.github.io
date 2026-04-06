//tooltipModule/tooltip_create.js
import * as MFT from './factory/mdl_functions.js';
import {tooltipActions} from './tooltip_actions.js';
import {tooltipDetailsActions} from './tooltip_details_actions.js';
class TooltipCreate{
	#parent_el;
	create_elem;	
	constructor(...args){
		const[parent_el,count] = args;
		this.#parent_el = parent_el ?? null;
		(async()=> {
			this.create_elem = await MFT.createElem('tooltip-ctn');
			this.create_elem.cloneNode(true);
			this.create_elem.role = 'tooltip';
			this.create_elem.dataset.tooltipId = `tooltip_${count}`;
			await MFT.addClasses(this.create_elem,['tooltip-ctn','fixed','display-inline']);
			if(this.#parent_el !== null && this.#parent_el.hasAttribute('title')){//this.#parent_el.tagName !== 'DETAILS'
				this.#parent_el.dataset.parentId = `parent_${count}`;
				await tooltipActions(this.#parent_el,this.create_elem);
			}	
			
			if(this.#parent_el !== null && this.#parent_el.tagName === 'DETAILS'){
				this.#parent_el.dataset.parentId = `parent_${count}`;
				await tooltipDetailsActions(this.#parent_el,this.create_elem)
				//console.log('parent_el: ',this.#parent_el);
			}
			
		})();
		//console.table({'TooltipCreate': args});
	}
}
export const tooltipCreate = async (...args)=>{
	return new TooltipCreate(...args);
}