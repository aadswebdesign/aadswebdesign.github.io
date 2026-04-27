//scripts/editor_logic/events/factory/create_data.js
import * as MFT from './../../../factory/module_functions.js';
class CreateData{
	#parent_el;	
	#classes;
	get_classes;
	set_unique;
	unique_group;
	constructor(...args){
		const [parent_el,classes] = args;
		this.#parent_el = parent_el ?? null;
		this.#classes = classes ?? null;
		if(this.#parent_el !== null){
			if(this.#classes !== null){
				this.get_classes = MFT.getClassesNA(this.#classes,this.#parent_el);
			}
		}	
	}
	getData(){
		return this.get_classes;
	};
}
export const createData = async (...args)=>{
	return new CreateData(...args);
}