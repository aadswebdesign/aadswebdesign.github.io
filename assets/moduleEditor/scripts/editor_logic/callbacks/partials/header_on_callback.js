// /partials/header_on_callback.js
import * as MHE from './../../../factory/module_handlers_export.js';
import * as MFT from './../../../factory/module_functions.js';
class HeaderOnCallback{
	#left_ctn;
	#cb_on;
	#constructs;
	btn_blocks;
	constructor(...args){
		const [left_ctn,cb_on,constructs] = args;
		this.#left_ctn = left_ctn;
		this.#cb_on = cb_on;
		this.#constructs = constructs;
		(async()=> {
			if(this.#left_ctn.children.length > 0){
				this.btn_blocks = this.#left_ctn.children;
				const [h1_block,h2_block,h3_block,h4_block,h5_block,h6_block] = this.btn_blocks;
				const [cs_1,cs_2,cs_3,cs_4,cs_5,cs_6] = this.#constructs;
				(async()=> {
					const events_manipulator = async (evt) =>{
						if(h1_block.hasAttribute('data-on')){
							await this.#cb_on(cs_1);
						}
					};
					await MHE.clickEventHandler(h1_block,events_manipulator);
				})();					
				(async()=> {
					const events_manipulator = async (evt) =>{
						if(h2_block.hasAttribute('data-on')){
							await this.#cb_on(cs_2);
						}
					};
					await MHE.clickEventHandler(h2_block,events_manipulator);
				})();					
				(async()=> {
					const events_manipulator = async (evt) =>{
						if(h3_block.hasAttribute('data-on')){
							await this.#cb_on(cs_3);
						}
					};
					await MHE.clickEventHandler(h3_block,events_manipulator);
				})();					
				(async()=> {
					const events_manipulator = async (evt) =>{
						if(h4_block.hasAttribute('data-on')){
							await this.#cb_on(cs_4);
						}
					};
					await MHE.clickEventHandler(h4_block,events_manipulator);
				})();					
				(async()=> {
					const events_manipulator = async (evt) =>{
						if(h5_block.hasAttribute('data-on')){
							await this.#cb_on(cs_5);
						}
					};
					await MHE.clickEventHandler(h5_block,events_manipulator);
				})();					
				(async()=> {
					const events_manipulator = async (evt) =>{
						if(h6_block.hasAttribute('data-on')){
							await this.#cb_on(cs_6);
						}
					};
					await MHE.clickEventHandler(h6_block,events_manipulator);
				})();					
			}
		})();
	}
}
export const headerOnCallback = async (...args)=>{
	return new HeaderOnCallback(...args);
}