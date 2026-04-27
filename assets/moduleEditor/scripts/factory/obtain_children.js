//scripts/factory/obtain_children.js
import * as MFT from './module_functions.js';
import * as MHE from './module_handlers_export.js';
class ObtainChildren{
	#parent_el;
	first_child;
	last_child;
	constructor(...args){
		const [parent_el] = args;
		this.#parent_el = parent_el ?? null;
		if(this.#parent_el !== null){
			if(this.#parent_el.firstElementChild !== null){
				this.first_child = this.#parent_el.firstElementChild;
			}
			if(this.#parent_el.lastElementChild !== null){
				this.last_child = this.#parent_el.lastElementChild;
			}
		}
	}
	getFirstChild(){
		return this.first_child ?? null;
	}
	getLastChild(){
		return this.last_child ?? null;
	}
}
export const obtainChildren = async (...args)=>{
	return new ObtainChildren(...args);
}