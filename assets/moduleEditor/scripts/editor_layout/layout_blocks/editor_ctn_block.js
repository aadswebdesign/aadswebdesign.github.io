//moduleEditor/editor_layout/layout_blocks/editor_ctn_block.js
import * as MFT from './../../factory/module_functions.js';
import * as EFE from './../elems_factory_export.js';
import * as LBE from "./../layout_blocks_export.js"; 
export class EditorCtnBlock{
	#created_elem;
	#edt_block;
	#elem_data;
	#incl_toolbox;
	#new_parent;
	#present_parent;
	#tbs_top;
	#tbs_bottom;
	toolbox_strip;
	constructor(obj_args){ 
		const {edt_ctn,tbs_top,edt_block,tbs_bottom}= obj_args;
		const {edt_ctn_cb,edt_ctn_id,edt_ctn_classes,edt_ctn_parent,edt_incl_toolbox_strip} = edt_ctn;
		this.#incl_toolbox = edt_incl_toolbox_strip;
		this.#elem_data = MFT.createObjectsNA('elem_obj',{});
		(async()=>{
			this.#present_parent = edt_ctn_parent ?? null;
			if(this.#present_parent !== null){
				this.#elem_data.elem_id = edt_ctn_id;
				this.#elem_data.elem_classes = edt_ctn_classes;
				this.#created_elem = edt_ctn_cb(this.#elem_data);
				if(this.#incl_toolbox === true){
					this.#elem_data.toolbox_data={
						elem_classes:['toolbox-strip','relative','display-flex'],
					};
					//todo and if needed appending an inner elem
					const {toolbox_data} = this.#elem_data;
					this.toolbox_strip = EFE.itemsCtnElem(toolbox_data);
					this.#created_elem.appendChild(this.toolbox_strip);
				}
				this.#new_parent = MFT.appendToParent(this.#present_parent,this.#created_elem);
			}
		})().then(()=>{
			this.#tbs_top = tbs_top ?? null;	
			(async()=> {
				if(this.#tbs_top !== null){
					this.#tbs_top.present_parent = this.#new_parent;
					await LBE.toolbarsTopBlock(this.#tbs_top);
				}
			})();	
		}).then(()=>{
			this.#edt_block = edt_block ?? null;
			(async()=> {	
				if(this.#edt_block !== null){
					this.#edt_block.present_parent = this.#new_parent;
					await LBE.editorMainBlock(this.#edt_block);
				}			
			})();
		}).then(()=>{
			this.#tbs_bottom = tbs_bottom ?? null;
			(async()=> {	
				if(this.#tbs_bottom !== null){
					this.#tbs_bottom.present_parent = this.#new_parent;
					await LBE.toolbarsBottomBlock(this.#tbs_bottom);
				}
			})();			
		});
	}
} 
export const editorCtnBlock = async (obj_args)=>{
	return new EditorCtnBlock(obj_args);
};