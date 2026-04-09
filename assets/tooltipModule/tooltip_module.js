//tooltipModule/tooltip_module.js
import * as MFT from './factory/mdl_functions.js';
import {tooltipCreate} from './tooltip_create.js';
class TooltipModule{
	#added_tags;
	get_tags;
	body;
	constructor(...args){
		const [added_tags] = args;
		this.#added_tags = added_tags ?? null;
		this.body = document.body;
		(async()=> {
			if(this.#added_tags !== null){
				this.get_tags = await MFT.getTagNames('*',this.#added_tags);
			}else
			this.get_tags = await MFT.getTagNames('*',this.body);
			if(this.get_tags.length > 0){
				for(const tag_elem of MFT.uniqueArray(this.get_tags)){
					await tooltipCreate(tag_elem,this.body);
				}
			}			
		})();
	}
}
export const tooltipModule = async (...args)=>{
	return new TooltipModule(...args);
}