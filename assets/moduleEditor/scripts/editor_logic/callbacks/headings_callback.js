//editor_logic/callbacks/headings_callback.js
import * as MHE from './../../factory/module_handlers_export.js';
import * as MFT from './../../factory/module_functions.js';
import {headerOnCallback} from './partials/header_on_callback.js';
import {headerOffCallback} from './partials/header_off_callback.js';
class HeadingsCallback{
	#headings_ctn;
	#cb_on;
	#cb_off;
	#constructs;
	left_ctn;
	right_ctn;
	constructor(obj_args){
		const {headings_ctn,callback_on,callback_off,mdl_constructs} = obj_args;
		this.#headings_ctn = headings_ctn ?? null;
		this.#cb_on = callback_on;
		this.#cb_off = callback_off;
		this.#constructs = mdl_constructs;
		(async()=> {
			if(this.#headings_ctn !== null){
				this.left_ctn = this.#headings_ctn.firstElementChild;
				this.right_ctn = this.#headings_ctn.lastElementChild;
				await headerOffCallback(this.left_ctn,this.#cb_off,this.#constructs,this.right_ctn);
				await headerOnCallback(this.left_ctn,this.#cb_on,this.#constructs);
			}
		})();		
	}
}
export const headingsCallback = async (obj_args)=>{
	return new HeadingsCallback(obj_args);
};