//tooltipModule/tooltip_module.js
import * as MFT from './factory/mdl_functions.js';
import {tooltipCreate} from './tooltip_create.js';
class TooltipModule{
	get_tags;
	body;
	constructor(){
		this.body = document.body;
		(async()=> {
			this.get_tags = await MFT.getTagNames('*',this.body);
			if(this.get_tags.length > 0){
				for(const tag_elem of this.get_tags){
					await tooltipCreate(tag_elem);
				}
			}			
		})();
	}
}
export const tooltipModule = async ()=>{
	return new TooltipModule();
}