//factory/insert_layer.js
import * as MFT from './module_functions.js';
import * as MDFT from './module_dom_functions.js';
class InsertLayer{
	#new_layer;
	constructor(...args){
		const [new_layer,layer_no,prt_li] = args;
		this.#new_layer = new_layer ?? null;
		this.prt_li = prt_li;
		if(this.#new_layer !== null && this.#new_layer !== undefined){
			if(this.#new_layer.lastElementChild !== null){
				this.#new_layer = this.#new_layer.lastElementChild;
				if(this.#new_layer.lastElementChild !== null){
					this.#new_layer = this.#new_layer.lastElementChild;
					this.#new_layer.dataset.layer = layer_no;
				}
			}
		}	
	}
	getLayer(){
		if(this.#new_layer !== undefined){
			return MDFT.addListLayerNA(this.#new_layer,this.prt_li);
		}		
	}
}
export const insertLayer = async (...args)=>{
	const layer = new InsertLayer(...args);
	return layer.getLayer();
};