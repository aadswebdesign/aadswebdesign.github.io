//tooltipModule/tooltip_collect.js
import * as MFT from './factory/mdl_functions.js';
import {tooltipActions} from './tooltip_actions.js';
class TooltipCollect{
	#parent_el;
	get_tags;
	body;
	create_elem;
	constructor(...args){
		const[parent_el] = args;
		this.#parent_el = parent_el ?? null;
		this.body = document.body;
		(async(parent_el)=> {
			if(this.#parent_el !== null){
				this.get_tags = await MFT.getTagNames('*',this.#parent_el);
			}else{
				this.get_tags = await MFT.getTagNames('*',this.body);
			}
			this.create_elem = await MFT.createElem('tooltip-ctn');
			this.create_elem.cloneNode(true);
			await MFT.addClasses(this.create_elem,['tooltip-ctn','absolute','display-inline']);
			if(this.get_tags.length > 0){
				for(const tag_elem of this.get_tags){
					await tooltipActions(tag_elem,this.create_elem);
				}
			}
		})();
	}
}
export const tooltipCollect = async (...args)=>{
	return new TooltipCollect(...args);
}