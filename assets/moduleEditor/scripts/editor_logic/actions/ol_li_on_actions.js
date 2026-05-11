// scripts/editor_logic/actions/ol_li_on_actions.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
import * as HE from './handlers_exports.js';
class OlLiOnActions{
	#ancestor;
	#br_el;
	#create_elem;
	#editor_elem;
	#mdl_name;
	#parent_el;
	#pre_elem;
	#pre_elems;
	#pre_output;
	#pre_outer;
	#tag_name;
	#zero_node;
	first_child;
	last_child;
	constructor(obj_args){
		/*
		const {create_el,parent_el:editor_el,mdl_name,pre_el_block,tag_name}= obj_args;
		const {pre_elem,pre_output,pre_outer}= pre_el_block;
		this.#br_el = MDFT.brNode.cloneNode();
		this.#create_elem = create_el;
		this.#editor_elem = editor_el;
		this.#mdl_name = mdl_name;
		this.#pre_elem = pre_elem;
		this.#pre_elems = [pre_elem,pre_output,pre_outer];
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		const no_prev = ['H1','H2','H3','H4','H5','H6','P'];
		const no_prev1 = ['ARTICLE-HEADER'];
		const no_prev2 = ['ARTICLE-MAIN'];
		const no_prev3 = ['ARTICLE-FOOTER'];
		const no_prev4 = ['ARTICLE-HEADER','ARTICLE-MAIN','ARTICLE-FOOTER',...no_prev];
		const no_prt1 = ['ARTICLE-HEADER','ARTICLE-MAIN','ARTICLE-FOOTER','H1','H2','H3','H4','H5','H6','P'];
		const no_prt2 = ['H1','H2','H3','H4','H5','H6','P'];
		const no_prt_h1 = ['ARTICLE-MAIN','ARTICLE-FOOTER',...no_prt2];
		*/
		(async()=> {
			/*
			switch(this.#mdl_name){
				case 'li_ol_1_mdl':{
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active',no_prev1,no_prt1);
					console.log('on: ',this.#mdl_name);
				}
				break;	
			}	
			*/
		})();
		//console.table({'olLiOnActions': obj_args});
	}
}
export const olLiOnActions = async (obj_args)=>{
	return new OlLiOnActions(obj_args);
}
