// /partials/header_off__callback.js
import * as MHE from './../../../factory/module_handlers_export.js';
import * as MFT from './../../../factory/module_functions.js';
class HeaderOffCallback{
	#left_ctn;
	#cb_off;
	#constructs;
	#right_ctn;
	right_ctn_evt;
	btn_blocks;
	constructor(...args){
		const [left_ctn,cb_off,constructs,right_ctn] = args;
		this.#left_ctn = left_ctn;
		this.#right_ctn = right_ctn;
		this.#cb_off = cb_off;
		this.#constructs = constructs;
		(async()=> {
			if(this.#left_ctn.children.length > 0){
				this.btn_blocks = this.#left_ctn.children;
				const [h1_block,h2_block,h3_block,h4_block,h5_block,h6_block] = this.btn_blocks;
				const [cs_1,cs_2,cs_3,cs_4,cs_5,cs_6] = this.#constructs;
				(async()=> {
					const evt_manipulator= async(evt)=>{
						if(h1_block.hasAttribute('data-on')){
							await Promise.all([this.#cb_off(cs_2),this.#cb_off(cs_3),this.#cb_off(cs_4),this.#cb_off(cs_5),this.#cb_off(cs_6)]);
							await this.right_ctn_evt(this.#right_ctn,this.#cb_off,cs_1);
						}
					};
					await MHE.clickEventHandler(h1_block,evt_manipulator);
				})();				
				(async()=> {
					const evt_manipulator= async(evt)=>{
						if(h2_block.hasAttribute('data-on')){
							await Promise.all([this.#cb_off(cs_1),this.#cb_off(cs_3),this.#cb_off(cs_4),this.#cb_off(cs_5),this.#cb_off(cs_6)]);	
							await this.right_ctn_evt(this.#right_ctn,this.#cb_off,cs_2);
						}
					};
					await MHE.clickEventHandler(h2_block,evt_manipulator);
				})();				
				(async()=> {
					const evt_manipulator= async(evt)=>{
						if(h3_block.hasAttribute('data-on')){
							await Promise.all([this.#cb_off(cs_1),this.#cb_off(cs_2),this.#cb_off(cs_4),this.#cb_off(cs_5),this.#cb_off(cs_6)]);
							await this.right_ctn_evt(this.#right_ctn,this.#cb_off,cs_3);
						}
					};
					await MHE.clickEventHandler(h3_block,evt_manipulator);
				})();				
				(async()=> {
					const evt_manipulator= async(evt)=>{
						if(h4_block.hasAttribute('data-on')){
							await Promise.all([this.#cb_off(cs_1),this.#cb_off(cs_2),this.#cb_off(cs_3),this.#cb_off(cs_5),this.#cb_off(cs_6)]);
							await this.right_ctn_evt(this.#right_ctn,this.#cb_off,cs_4);
						}
					};
					await MHE.clickEventHandler(h4_block,evt_manipulator);
				})();				
				(async()=> {
					const evt_manipulator= async(evt)=>{
						if(h5_block.hasAttribute('data-on')){
							await Promise.all([this.#cb_off(cs_1),this.#cb_off(cs_2),this.#cb_off(cs_3),this.#cb_off(cs_4),this.#cb_off(cs_6)]);
							await this.right_ctn_evt(this.#right_ctn,this.#cb_off,cs_5);
						}
					};
					await MHE.clickEventHandler(h5_block,evt_manipulator);
				})();				
				(async()=> {
					const evt_manipulator= async(evt)=>{
						if(h6_block.hasAttribute('data-on')){
							await Promise.all([cb_off(cs_1),cb_off(cs_2),cb_off(cs_3),cb_off(cs_4),cb_off(cs_5)]);
							await this.right_ctn_evt(this.#right_ctn,this.#cb_off,cs_6);
						}
					};
					await MHE.clickEventHandler(h6_block,evt_manipulator);
				})();				
 	    }
		})();
	}
	right_ctn_evt = async(...args)=>{
		const [right_ctn,cb_off,cs_off] = args;
		(async()=> {
			const events_manipulator = async (evt)=>{
				evt.preventDefault();
				await cb_off(cs_off);		
			};
			await MHE.clickEventHandler(right_ctn,events_manipulator);
		})();	
	};
}
export const headerOffCallback = async (...args)=>{
	return new HeaderOffCallback(...args);
}