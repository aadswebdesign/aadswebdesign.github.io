//moduleEditor/scripts/editor_logic/editor_logic.js
import * as MFT from './../factory/module_functions.js';
import {modulesCollect} from './modules/modules_collect.js';
import {baseEvents} from './events/base_events.js';
import * as EE from './events_export.js';
class EditorLogic{//toolbarEvents
	#edt_ctn;
	#edt_block;
	#edt_tbs;
	#tbs_ctn;
	#tbs_ctns;
	constructor(obj_args){
		const {base_settings,editor_ctn,editor_block} =obj_args;
		const {edt_ctn_parent,edt_incl_toolbox_strip} = editor_ctn;
		this.#edt_ctn = edt_ctn_parent.lastElementChild ?? null;
		(async()=> {
			if(this.#edt_ctn !== null){
				await MFT.getTagNames('*',this.#edt_ctn);
				const edt_objects = await MFT.createObjects('edt_obj',{
					toolbars_ctn: await MFT.getTagNames('TOOLBARS-CTN',this.#edt_ctn),//base_settings
					base_events:{
						base_settings,
						block_elem: await MFT.getTagNames('EDITOR-BLOCK',this.#edt_ctn),
					},
				});
				this.#tbs_ctns = MFT.uniqueArray(edt_objects.toolbars_ctn);
				for(const tbs_ctn of this.#tbs_ctns){
					this.#tbs_ctn =  tbs_ctn ?? null;
					if(this.#tbs_ctn !== null){
						const edt_ctn = this.#edt_ctn;
						await EE.toolbarEvents(this.#tbs_ctn,edt_ctn,edt_incl_toolbox_strip);
					}
				}

				
				
				//baseEvents
				const {base_events} = edt_objects;
				const module_collect = await MFT.createObjects('btns_objects',{
					base_data: base_events,
					btn_blocks:	await MFT.getTagNames('BTN-BLOCK',this.#edt_ctn),
				});
				await modulesCollect(module_collect);
				await baseEvents(base_events);
			}
		})();
	}
}
export const editorLogic = async (obj_args)=>{
	return new EditorLogic(obj_args);
};