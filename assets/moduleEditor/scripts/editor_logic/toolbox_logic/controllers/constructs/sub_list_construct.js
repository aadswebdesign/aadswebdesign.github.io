//controllers/constructs/sub_list_construct.js
import * as MFT from './../../../../factory/module_functions.js';
import * as TEE from './../../tbx_evt_export.js';
import * as TME from './../../tbx_mdls_export.js';
class SubListConstruct{
	#canvas_el;#prt_ctn;ancestor;
	block_btn;add_li;
	indent;position;start;
	constructor(obj_args){
		const {canvas_el,parent_ctn,tag_name} = obj_args;
		this.#canvas_el = canvas_el;
		this.#prt_ctn = parent_ctn ?? null;
		(async()=> {
			this.ctn_data = await MFT.createObjects('ctn_obj',{...obj_args,});
			await MFT.removeObjects(['add_li','main_ctn','sub_ctn'],this.ctn_data);
			if(this.#canvas_el.lastElementChild !==null){
				this.last_child = this.#canvas_el.lastElementChild;
				this.ancestor = await MFT.getAncestor(this.last_child,this.#canvas_el,'LI');
				if(this.#prt_ctn !== null && this.#prt_ctn.children.length > 0){
					const prt_items = MFT.uniqueArray(this.#prt_ctn.children);
					for(const item of prt_items){
						switch(item.dataset.name){
							case 'ol-ctn':{
								this.ctn_data.el_name ='ol';
								this.ctn_data.prefix = 'ol-list';
								if(item.children.length > 0){
									const ic = MFT.uniqueArray(item.children);
									this.block_btn = ic[0];
									this.add_li = ic[1];
									this.start = ic[2]; 
									this.indent = ic[3]; 
									this.position = ic[4]; 
								}
							}break;	
							case 'ul-ctn':{
								this.ctn_data.el_name ='ul';
								this.ctn_data.prefix = 'ul-list';
								if(item.children.length > 0){
									const ic = MFT.uniqueArray(item.children);
									this.block_btn = ic[0];
									this.add_li = ic[1]; 
									this.indent = ic[2]; 
									this.position = ic[3]; 
								}
							}break;	
						}
						this.sel_data = await MFT.createObjects('sel_obj',{...this.ctn_data,});
						await MFT.removeObjects(['tbx_data','btn_block','el_name','parent_ctn','target_btn','tbx_mdl'],this.sel_data);
						if(this.ancestor.tagName === 'OL' || this.ancestor.tagName === 'UL'){
							this.sel_data.list_el = this.ancestor;
						}
						if(this.block_btn !== undefined){
							this.list_type = this.block_btn.dataset.listType;
							this.elems = [];
							if(this.indent !== undefined){
								this.indent.dataset.listType = this.list_type;
								this.indent.dataset.att = 'data-list-indent';
								this.indent.name = 'sub-indent';
							}
							if(this.position !== undefined){
								this.position.dataset.listType = this.list_type;
								this.position.dataset.att = 'data-list-position';
								this.position.name = 'sub-position';
							}
							if(this.start !== undefined){
								this.start.dataset.listType = this.list_type;
								this.start.dataset.att = 'start';
								this.start.name = 'sub-start';
							}
							if(this.start !== undefined)
								this.elems.push(this.indent,this.position,this.start);
							else
								this.elems.push(this.indent,this.position);
							await TEE.tbxOnOffToggleEvt(this.block_btn);
							this.ctn_data.btn_block = this.block_btn;
							this.sel_data.sel_elems = this.elems;
							this.ctn_data.sel_data = this.sel_data;
							await TME.setListMdl(this.ctn_data);
						}
						if(this.add_li !== undefined){
							await TEE.tbxOnOffToggleEvt(this.add_li);
							this.ctn_data.target_btn = this.add_li;
							await TME.setLiSubMdl(this.ctn_data);
						}
					}
				}
			}
		})();
	}
}
export const subListConstruct = async (obj_args)=>{
	return new SubListConstruct(obj_args);
}