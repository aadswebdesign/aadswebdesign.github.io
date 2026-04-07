//tooltipModule/tooltip_module.js
import * as MFT from './factory/mdl_functions.js';
import {tooltipCreate} from './tooltip_create.js';
class TooltipModule{
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
				for(const tag_elem of this.get_tags){
					await tooltipCreate(tag_elem);
				}
			}			
		})();
		//console.table({'TooltipModule': args});
	}
}
export const tooltipModule = async (...args)=>{
	return new TooltipModule(...args);
}