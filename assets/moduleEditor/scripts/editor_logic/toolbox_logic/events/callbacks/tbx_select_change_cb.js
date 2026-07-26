//toolbox_logic/events/callbacks/tbx_select_change_cb_evt.js
import * as MFT from './../../../../factory/module_functions.js';
class TbxSelectChangeCbEvt{
	constructor(obj_args){
		(async()=> {})();
		console.table({'TbxSelectChangeCbEvt': obj_args});
	}
}
export const tbxSelectChangeCbEvt = async (obj_args)=>{
	return new TbxSelectChangeCbEvt(obj_args);
}