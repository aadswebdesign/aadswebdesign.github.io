//layout_blocks/toolbox_block.js
import {tbxInsertBlock} from './partials/tbx_insert_block.js';
import * as MFT from './../../factory/module_functions.js';
import * as EFE from './../elems_factory_export.js';
class ToolboxBlock{
	#tbx_ctn;#tbx_left_ctn;	#tbx_left_ctn_data;	
	#tbx_right_ctn;	#tbx_close;	#count;
	tbx_close_el; tbx_el;	tbx_left_el;	tbx_right_el;
	constructor(obj_args){
		const {left_ctn,left_ctn_title,right_ctn,tbx_ctn_data,count} = obj_args;
		const{tbx_ctn,tbx_left_ctn,tbx_left_ctn_data,tbx_right_ctn,tbx_close} = tbx_ctn_data;
		this.#count = count;
		this.#tbx_ctn = tbx_ctn;
		this.#tbx_left_ctn = tbx_left_ctn;
		this.#tbx_left_ctn_data = tbx_left_ctn_data;
		this.#tbx_right_ctn = tbx_right_ctn;
		this.#tbx_close = tbx_close;
		this.tbx_el = EFE.toolboxCtnElemNA(this.#tbx_ctn);
		(async()=> {
			this.tbx_left_el = await EFE.itemsCtnElem(this.#tbx_left_ctn);
			this.tbx_close_el = await EFE.commandBtnElem(this.#tbx_close);
			this.tbx_close_el.commandForElement = this.tbx_el;
			this.tbx_right_el = await EFE.itemsCtnElem(this.#tbx_right_ctn);
			this.tbx_right_el.appendChild(this.tbx_close_el);			
			this.tbx_el.append(this.tbx_left_el,this.tbx_right_el);
			if(this.tbx_el.children.length > 0){
				await tbxInsertBlock(this.tbx_left_el,tbx_left_ctn_data);						
			}
		})();
	}
	getBlock(){
		return this.tbx_el;
	}
}
export const toolboxBlock = async (obj_args)=>{
	return new ToolboxBlock(obj_args);
}