//editor_layout/layout_blocks/toolbox_block.js
import * as MFT from './../../factory/module_functions.js';
import * as EFE from './../elems_factory_export.js';
class ToolboxBlock{
	#tbx_ctn;#tbx_options;#tbx_content;
	#tbx_ctrls;#tbx_close;
	toolbox_close; toolbox_content;
	toolbox_ctn;toolbox_ctrls;
	constructor(obj_args){
		const {tbx_ctn,tbx_options,tbx_content,tbx_ctrls,tbx_close} = obj_args;
			this.#tbx_ctn = tbx_ctn;
			this.#tbx_options = tbx_options;
			this.#tbx_content = tbx_content;
			this.#tbx_ctrls = tbx_ctrls;
			this.#tbx_close = tbx_close;
			this.toolbox_ctn = EFE.toolboxCtnElemNA(this.#tbx_ctn);
			(async()=> {
				this.#tbx_close.command_for = this.toolbox_ctn; 
				this.toolbox_content = await EFE.toolboxContentElem(this.#tbx_content);
				//temporary
				this.toolbox_content.textContent = this.#tbx_content.elem_id;
				this.toolbox_close = await EFE.commandBtnElem(this.#tbx_close);
				this.toolbox_ctrls = await EFE.toolboxCtrlElem(this.#tbx_ctrls);
				this.toolbox_ctrls.appendChild(this.toolbox_close);
				this.toolbox_ctn.append(this.toolbox_content,this.toolbox_ctrls);
			})();	
			//console.log('toolbox_ctn2: ',this.toolbox_ctn);
		//console.table({'ToolboxBlock': obj_args});
	}
	getBlock(){
		return this.toolbox_ctn;
	}
}
export const toolboxBlock = async (obj_args)=>{
	return new ToolboxBlock(obj_args);
}