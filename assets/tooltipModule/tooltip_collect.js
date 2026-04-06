//tooltipModule/tooltip_collect.js
import * as MFT from './factory/mdl_functions.js';
import {tooltipCreate} from './tooltip_create.js';
class TooltipCollect{
	#parent_el;
	get_tags;
	body;
	constructor(...args){
		const[parent_el] = args;
		this.#parent_el = parent_el ?? null;
		this.body = document.body;
		(async()=> {
			if(this.#parent_el !== null){
				this.get_tags = await MFT.getTagNames('*',this.#parent_el);
			}else{
				this.get_tags = await MFT.getTagNames('*',this.body);
			}
			if(this.get_tags.length > 0){
				let i = 0;
				for(const tag_elem of this.get_tags){
					const count = ++i;
					await tooltipCreate(tag_elem,count);
				}
			}			
		})();
		//console.table({'TooltipCollect': args});
	}
}
export const tooltipCollect = async (...args)=>{
	return new TooltipCollect(...args);
}