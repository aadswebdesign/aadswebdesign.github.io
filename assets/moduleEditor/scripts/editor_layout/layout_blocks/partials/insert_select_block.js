//layout_blocks/partials/insert_select_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as LIE from './../../layout_internals_export.js';
class InsertSelectBlock{
	#parent_el;	#obj_args;select_data;
	select_el;set_select;
	constructor(...args){
		const [parent_el, obj_args] = args;
		this.#parent_el = parent_el ?? null;
		this.#obj_args = obj_args;
		const {dataset_name,elem_classes,elem_id,elem_title,size,option_names,option_values,default_option} = this.#obj_args;
		(async()=> {
			if(this.#parent_el !== null){
				switch(dataset_name){
					case 'position':{
						this.select_data = await MFT.createObjects('select_obj',{
							elem_id,elem_classes,elem_title,size
						});
						this.set_select = await LIE.selectBlock(this.select_data);
						this.select_el = this.set_select.getSelect();
						this.#parent_el.appendChild(this.select_el);
						this.option_data = await MFT.createObjects('option_obj',{
							option_names,	option_values,
							default_option,
						});
						await LIE.insertOptionBlock(this.select_el,this.option_data);
					}
					break;
					case 'indent':{
						this.select_data = await MFT.createObjects('select_obj',{
							elem_id,elem_classes,elem_title,size
						});
						this.set_select = await LIE.selectBlock(this.select_data);
						this.select_el = this.set_select.getSelect();
						this.#parent_el.appendChild(this.select_el);
						this.option_data = await MFT.createObjects('option_obj',{
							option_names,option_values,
							default_option,
						});
						await LIE.insertOptionBlock(this.select_el,this.option_data);
					}
					break;
					case 'type':{
						this.select_data = await MFT.createObjects('select_obj',{
							elem_id,elem_classes,elem_title,size
						});
						this.set_select = await LIE.selectBlock(this.select_data);
						this.select_el = this.set_select.getSelect();
						this.#parent_el.appendChild(this.select_el);
						this.option_data = await MFT.createObjects('option_obj',{
							option_names,	option_values,
							default_option,
						});
						await LIE.insertOptionBlock(this.select_el,this.option_data);
					}
					break;
				}
			}
		})();
	}
}
export const insertSelectBlock = async (...args)=>{
	return new InsertSelectBlock(...args);
};