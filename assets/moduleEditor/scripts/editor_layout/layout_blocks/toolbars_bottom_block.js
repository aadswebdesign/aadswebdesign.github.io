//moduleEditor/editor_layout/layout_blocks/toolbars_bottom_block.js
import * as MFT from './../../factory/module_functions.js';
import * as LBE from "./../layout_blocks_export.js";
import * as EFE from './../elems_factory_export.js';
class ToolbarsBottomBlock{
	#created_elem;#edt_tbs_btm;	#elem_data;
	#present_parent;#new_parent;#toolbox_strip;
	constructor(obj_args){
		const {tbs_ctn_btm_cb,tbs_ctn_id,tbs_ctn_classes,	editor_toolbars_bottom,present_parent,tbx_strip_btm	}= obj_args;
		this.#elem_data = MFT.createObjectsNA('elem_obj',{});
		this.#toolbox_strip = tbx_strip_btm	;
		(async()=> {
			this.#present_parent = present_parent ?? null;
			if(this.#present_parent !== null){
				this.#elem_data.elem_id = tbs_ctn_id;
				this.#elem_data.elem_classes = tbs_ctn_classes;
				this.#created_elem = tbs_ctn_btm_cb(this.#elem_data);
				this.#new_parent = MFT.appendToParent(this.#present_parent,this.#created_elem);
				if(this.#toolbox_strip === true){
					this.#elem_data.toolbox_data={
						elem_classes:['toolbox-strip','at-bottom','relative','display-flex'],
					};
					const {toolbox_data} = this.#elem_data;
					this.toolbox_strip = EFE.itemsCtnElem(toolbox_data);
					this.#created_elem.after(this.toolbox_strip);
				}
			}
		})().then(()=>{
			(async()=>{
				this.#edt_tbs_btm = editor_toolbars_bottom ?? null;
				if(this.#edt_tbs_btm !== null){
					this.#edt_tbs_btm.present_parent = this.#new_parent;
					await LBE.editorTbsBottomBlock(this.#edt_tbs_btm);
				}
			})();
		});
	}
}
export async function toolbarsBottomBlock(obj_args){
	return new ToolbarsBottomBlock(obj_args);
};