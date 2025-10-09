//editorManager/modules/base_module.js
import * as MFT from './../factory/module_functions.js';
class BaseModule{
	constructor(base_elems){
		const {editor_elem,pre_elem,pre_output,pre_outer,textarea_elem,textarea_rows,textarea_cols,writing_raw,write_to_textarea
		}= base_elems;
		(async ()=>{
			const selection_change = async()=>{
				MFT.writeSourceCode(pre_elem,editor_elem,pre_output,pre_outer);
				MFT.writeToTextArea(textarea_elem,textarea_rows,textarea_cols,editor_elem,write_to_textarea,writing_raw);
			};
			await selection_change();
			document.addEventListener('selectionchange', async()=>{
				await selection_change();
			});	
		})();
	}
}
export const baseModule = async(base_elems)=>{
	new BaseModule(base_elems);
}