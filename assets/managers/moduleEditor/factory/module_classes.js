// managers/moduleEditor/factory/module_classes.js
import * as MFT from './module_functions.js';

class GetAncestor{
	#ancestor; #target_elem; #parent_elem; #tag_name;
	constructor(...args){
		const [target_elem, parent_elem, tag_name,log = false]= args;
		this.#target_elem = target_elem;
		this.#parent_elem = parent_elem;
		this.#tag_name = tag_name;
		(async ()=>{
			let present_ancestor;
			if((this.#target_elem !== null) && (this.#target_elem.tagName !== this.#tag_name)){
				if((this.#target_elem.firstElementChild !== null) && (this.#target_elem.firstElementChild.tagName !== this.#tag_name)){
					this.#ancestor = this.#target_elem.firstElementChild;
					present_ancestor = 'present_ancestor = 1';
				}else{
					this.#ancestor = this.#target_elem;
					present_ancestor = 'present_ancestor = 2';
				}				
			}else{
				this.#ancestor = this.#parent_elem;
				present_ancestor = 'present_ancestor = 3';
			}
			
			
			
			
			if(log === true){
				console.log('target_elem: ',this.#target_elem);
				console.log('parent_elem: ',this.#parent_elem);
				console.log('tag_name: ',this.#tag_name);
				console.log(`getAncestor (${this.#tag_name})`,this.#ancestor);
				console.log(present_ancestor);
			}

		})();
	}
}

export const getAncestor = async (...args)=>{
	return new GetAncestor(...args);
};






class BtnManipulator{
	#tb_btn;
	#callback;
	constructor(...args){
		const [btn = null,cb,options = false] = args;
		this.#tb_btn = btn;
		this.#callback = cb;
		//console.log('#tb_btn: ', this.#tb_btn);
		if(this.#tb_btn !== null){
			(async ()=>{
				//console.log('#callback: ', this.#callback);
				this.#tb_btn.addEventListener('click', await this.#callback,options);
			})();
		}
	}
}
export const btnManipulator = async(...args)=>{
	new BtnManipulator(...args);
}