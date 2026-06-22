//editor_logic/data/base_data.js
import * as EE from './../events_export.js';
import * as MFT from './../../factory/module_functions.js';
class BaseData{
	#edt_block;#flags;	canvas_el;
	hidden_el;	pre_el;	textarea_el;
	constructor(...args){
		const [edt_block,flags] = args;
		this.#edt_block = edt_block ?? null;
		(async()=> {
			if(this.#edt_block !== null){
				const edt_block = this.#edt_block;
				const base_data = await MFT.createObjects('base_obj',{
					flags,
				});
				this.canvas_el = await MFT.getTagNames('EDITOR-CANVAS',edt_block) ?? null;
				if(this.canvas_el !== null){
					base_data.canvas_el = this.canvas_el[0];
				}
				this.pre_el = await MFT.getTagNames('PRE',edt_block) ?? null;
				if(this.pre_el !== null){
					base_data.pre_el = this.pre_el[0];
				}
				this.hidden_el = await MFT.getTagNames('INPUT',edt_block) ?? null;
				if(this.hidden_el !== null && this.hidden_el[0].type === 'hidden'){
					base_data.hidden_el = this.hidden_el[0];
				}
				this.textarea_el = await MFT.getTagNames('TEXTAREA',edt_block) ?? null;
				if(this.textarea_el !== null){
					base_data.textarea_el = this.textarea_el[0];
				}
				await EE.baseEvent(base_data);
			}	
		})();
	}
}
export const baseData = async (...args)=>{
	return new BaseData(...args);
}