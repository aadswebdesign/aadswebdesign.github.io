//editorManager/mdl_classes/module_construct.js
import * as MFT from './../factory/module_functions.js';
import * as Range from './depedencies/module_range.js';
import {EditorBoundary,EditorBoundaryFlags} from './depedencies/node_boundaries.js';
class ModuleConstruct{
	constructor(mdl_elems){
		//console.table({'mdl_elems': mdl_elems});
		const {btn_blocks} = mdl_elems;
		(async ()=>{
			for(const btn_block of btn_blocks){
				const mdl_btn = btn_block.firstElementChild;
				//console.log('mdl_btn: ',mdl_btn);
				btn_block.addEventListener('click',async (event) =>{
					await MFT.dataOnToggle(btn_block);
					if(btn_block.hasAttribute('data-on')){
						await MFT.addClass(btn_block,'btn-active');
						console.log('btn_block1: ',btn_block);
					}else{
						await MFT.removeClass(btn_block,'btn-active');
						console.log('btn_block2: ',btn_block);
					}
				});
			}
			
			
			
			
		})();

	}
}
export const moduleConstruct = async(mdl_elems)=>{
	new ModuleConstruct(mdl_elems);
}