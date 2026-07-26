// moduleEditor/modules_editor.js
import * as MFT from './factory/module_functions.js';
import {layoutData} from './editor_layout/layout_data.js';
//from here
import * as ME from './editor_layout/toolbox_layout/tbx_mdls_export.js';
import {logicData} from './editor_logic/logic_data.js';
export async function moduleEditor(obj_args){
	const{editor_layout,logic_data} = obj_args;
	const{start_elem_id} = logic_data;
	(async()=> {
		await layoutData(editor_layout);
	})().then(async()=>{
		logic_data.start_elem = await MFT.getId(start_elem_id);
		logic_data.tbx_mdls ={
			tbx_open_mdl: ME.tbxOpenMdl,
			tbx_ol_mdl: ME.tbxOlMdl,
			tbx_ul_mdl: ME.tbxUlMdl,
		};
		await logicData(logic_data);
	});	
}