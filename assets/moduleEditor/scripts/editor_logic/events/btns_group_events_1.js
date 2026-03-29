//moduleEditor/scripts/editor_logic/events/btns_group_events_1.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
class BtnsGroupEvents_1{
	#parent_el;
	block_inner;
	block_outer;
	constructor(...args){
		const [parent_el,group_value] = args;
		(async()=> {
			//console.log(`parent of '${group_value}': `,parent_el);
			if(parent_el.dataset.group === group_value){
				this.#parent_el = parent_el;
				const children = MFT.uniqueArray(this.#parent_el.children);
				const first_child = children[0];
				const last_child = children[1];
				this.block_outer(first_child,last_child);
				this.block_inner(last_child);
			}
		})();
		//console.table({'group_data 1': args});
	}
	block_outer = (...args) =>{
		const [btn_block,outer_ctn] = args;
		(async()=> {
			const events_manipulator = async (event)=>{
				event.preventDefault();
				await MFT.dataOnToggle(btn_block);
				if(btn_block.hasAttribute('data-on')){
					await MFT.replaceClass(outer_ctn,'display-none','display-flex');
				}else{
					await MFT.replaceClass(outer_ctn,'display-flex','display-none');
				}					
			};
			await MHE.clickEventHandler(btn_block,await events_manipulator,true);
		})();	
	};
	block_inner = (...args) =>{
		const [outer_ctn] = args;
		(async()=> {
			const ctn_btn = outer_ctn.firstElementChild;
			const inner_ctn = outer_ctn.lastElementChild; 
			const events_manipulator = async (event)=>{
				event.preventDefault();
				await MFT.dataTbOpenToggle(ctn_btn);
				if(ctn_btn.hasAttribute('data-tb_open')){
					await MFT.replaceClass(ctn_btn, 'caret-right-uc','caret-left-uc');
					await MFT.replaceClass(inner_ctn, 'display-none','display-flex');
					ctn_btn.title = 'close this';
				}else{
					await MFT.replaceClass(ctn_btn, 'caret-left-uc','caret-right-uc');
					await MFT.replaceClass(inner_ctn, 'display-flex','display-none');
					ctn_btn.title = 'open this for the sub elements';
				}
			};
			await MHE.clickEventHandler(ctn_btn,await events_manipulator,true);
		})();	
	};
}
export const btnsGroupEvents_1 = async(...args)=>{
	new BtnsGroupEvents_1(...args);
}