// moduleEditor/modules_editor.js
import * as MFT from './factory/module_functions.js';
import {layoutData} from './editor_layout/layout_data.js';
import {toolboxBlock} from './editor_layout/layout_blocks/toolbox_block.js';
import {logicData} from './editor_logic/logic_data.js';
export async function moduleEditor(obj_args){
	const{editor_layout,logic_data} = obj_args;
	const{start_elem_id,tooltip_id, tooltip} = logic_data;
	(async()=> {
		await layoutData(editor_layout);
	})().then(async()=>{
		const tooltip_ctn = await MFT.getId(tooltip_id);
		await tooltip(tooltip_ctn);
		logic_data.start_elem = await MFT.getId(start_elem_id);
		logic_data.tbx_block = toolboxBlock;
		await logicData(logic_data);
	});	
}