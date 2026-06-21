// editor_logic/factory/undo_mdl.js
import * as MFT from './../../factory/module_functions.js';
//import {blockTfOffAction} from './../actions/block_tf_off_action.js';
//import {blockTfOnAction} from './../actions/block_tf_on_action.js';
import * as CEE from './../cb_events_export.js';
import * as CF from './../factory/create_functions.js';
class SetUndoMdl{
	#parent_el;
	constructor(...args){
		const [parent_el] = args;
		this.#parent_el = parent_el ?? null;
		(async()=> {
			if(this.#parent_el !== null){
				console.log('parent_el: ',this.#parent_el);
			}				
		})();		
		console.table({'SetUndoMdl': args});
	}
}
export const setUndoMdl = async (...args)=>{
	return new SetUndoMdl(...args);
};