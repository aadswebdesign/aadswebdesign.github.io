// actions/headings_on_action.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
import {insBlockElToEdt} from './partials/ins_block_el_to_edt.js';
import {insBlockElToParent} from './partials/ins_block_el_to_parent.js';
class HeadingsOnAction{
	#canvas_el;	#create_el;	#mdl_name;
	#pre_el; #pre_output;	#pre_outer;
	#tag_name; last_child; sub_art_block;
	no_prevs;	no_parent;action_block;
	constructor(obj_args){
		const {canvas_el,pre_el,pre_output,pre_outer,grp_name,mdl_name,tag_name,create_el} = obj_args;
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
				pre_el: this.#pre_el,
				pre_output: this.#pre_output,
				pre_outer: this.#pre_outer,
				tag_name: this.#tag_name,
				parent_el: this.#canvas_el,
			});
			(async()=> {
				switch(this.#mdl_name){
					case 'h1_mdl':{
						edt_data.no_prevs = ['P',...this.no_prevs];
						await insBlockElToEdt(edt_data);	
					}
					break; 
					case 'h2_mdl': case 'h3_mdl':
					case 'h4_mdl': case 'h5_mdl':
					case 'h6_mdl':{
						edt_data.no_prevs = this.no_prevs;
						await insBlockElToEdt(edt_data);	
					}
					break;
				}
				MFT.writeSourceCode(this.#pre_el,this.#canvas_el,this.#pre_output,this.#pre_outer);
			})();
			(async()=> {
				edt_data.no_parent = this.no_parent;
				switch(this.#mdl_name){
					case 'h1_mdl':{
						edt_data.no_prevs = this.no_prevs;
						await insBlockElToParent(edt_data);
					}
					break;
					case 'h2_mdl':{
						edt_data.no_prevs = this.no_prevs;
						await insBlockElToParent(edt_data);
					}
					break;
					case 'h3_mdl':{
						edt_data.no_prevs = this.no_prevs;
						await insBlockElToParent(edt_data);
					}
					break;
					case 'h4_mdl':{
						edt_data.no_prevs = this.no_prevs;
						await insBlockElToParent(edt_data);
					}
					break;
					case 'h5_mdl':{
						edt_data.no_prevs = this.no_prevs;
						await insBlockElToParent(edt_data);
					}	
					break;
					case 'h6_mdl':{
						edt_data.no_prevs = this.no_prevs;
						await insBlockElToParent(edt_data);
					}
					break;
				}
				MFT.writeSourceCode(this.#pre_el,this.#canvas_el,this.#pre_output,this.#pre_outer);
			})();
		})();
		//console.table({'HeadingsOnfAction': obj_args});
	}
}
export const headingsOnAction = async (obj_args)=>{
	return new HeadingsOnAction(obj_args);
}