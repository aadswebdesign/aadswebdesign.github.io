// actions/block_tf_on_action.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
import {insBlockElToEdt} from './partials/ins_block_el_to_edt.js';
import {insBlockElToParent} from './partials/ins_block_el_to_parent.js';
class BlockTfOnAction{
	#canvas_el;	#create_el;	#mdl_name;
	#pre_el; #pre_output;	#pre_outer;	#tag_name; 
	edt_data; last_child;	no_prevs;	no_parent;
	constructor(obj_args){
		const {canvas_el,pre_el,pre_output,pre_outer,grp_name,el_name,mdl_name,tag_name,create_el} = obj_args;
		this.#canvas_el = canvas_el ?? null;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#mdl_name = mdl_name;
		this.#tag_name = tag_name;
		this.#create_el = create_el;
		this.no_prevs = ['ARTICLE-HEADER','ARTICLE-MAIN','ARTICLE-FOOTER'];
		this.no_parent = ['H1','H2','H3','H4','H5','H6','P',];
		(async()=> {
			const edt_data = await MFT.createObjects('edt_obj',{
				mdl_el: await MDFT.createModuleEl(await this.#create_el,['relative'],'data-block_active'),
				parent_el: this.#canvas_el,
				pre_el: this.#pre_el,
				pre_output: this.#pre_output,
				pre_outer: this.#pre_outer,
				tag_name: this.#tag_name,
			});
			(async()=> {
				switch(this.#mdl_name){
					case 'h1_single_mdl':{
						edt_data.no_prevs = ['P',...this.no_prevs];
						await insBlockElToEdt(edt_data);	
					}
					break;
					case 'h2_single_mdl':case 'h3_single_mdl':
					case 'h4_single_mdl':case 'h5_single_mdl':
					case 'h6_single_mdl':case 'p_mdl':{
						edt_data.no_prevs = this.no_prevs;
						await insBlockElToEdt(edt_data);	
					}
					break;
				}
				MFT.writeSourceCode(this.#pre_el,this.#canvas_el,this.#pre_output,this.#pre_outer);
			})();
			(async()=> {
				switch(this.#mdl_name){
					case 'h1_single_mdl':{
						edt_data.no_parent = this.no_parent;
						edt_data.no_prevs = ['P',...this.no_prevs];
						await insBlockElToParent(edt_data);
					}
					break;
					case 'h2_single_mdl':case 'h3_single_mdl':
					case 'h4_single_mdl':case 'h5_single_mdl':
					case 'h6_single_mdl':case 'p_mdl':{
						edt_data.no_parent = this.no_parent;
						edt_data.no_prevs = this.no_prevs;
						await insBlockElToParent(edt_data);
					}
					break;
				}	
				MFT.writeSourceCode(this.#pre_el,this.#canvas_el,this.#pre_output,this.#pre_outer);
			})();
			
		})();
		//console.table({'BlockTfOnAction': obj_args});
	}
}
export const blockTfOnAction = async (obj_args)=>{
	return new BlockTfOnAction(obj_args);
}