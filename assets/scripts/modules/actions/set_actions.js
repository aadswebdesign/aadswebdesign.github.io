/**localhost  modules/actions/set_actions.js */
import * as FT from './../../factory/functions.js';
import * as EE from './../events/exp_events.js';
import * as ET from './../templates/exp_templates.js';
import {detailsToggles_09} from './../mdl_factory/details_toggles.js';

import {editorPanel} from './../../devs/project_01.js';

export const setActions = async (...args)=>{
	//console.table({'setActions': args});
	const [parent_el = null,content_el,obj_args_ext] = args;
	let aside_block,menu_block;
	if(parent_el !== null){
		aside_block = parent_el.firstElementChild ?? null;
		if(aside_block !== null && aside_block.dataset.blockId === 'menu_bar'){
			menu_block = await FT.getTagNames('BLOCK-ITEM',aside_block);
		}
	}
	(async()=> {
		const callback_001 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_001();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const callback_002 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				//console.log('cb_002');
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_002();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const callback_003 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				console.log('cb_003');
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_003();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const callback_004 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				console.log('cb_004');
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_004();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const cb_args = await FT.createObjects('cb_obj',{
			menu_block: menu_block[0],
			...obj_args_ext,
		});
		const set_block = await FT.createObjects('set_obj',{
			menu_block: menu_block[0],
			cb_collection:[callback_001,callback_002,callback_003,callback_004],
			cb_args: cb_args,
		});
		await EE.menuBlockItemsEvt(set_block);
	})();			
	(async()=> {
		const callback_005 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				console.log('cb_005');
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_005();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const callback_006 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_006();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const callback_007 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_007();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const callback_008 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_008();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const cb_args = await FT.createObjects('cb_obj',{
			menu_block: menu_block[1],
			...obj_args_ext,
		});
		const set_block = await FT.createObjects('set_obj',{
			menu_block: menu_block[1],
			cb_collection:[callback_005,callback_006,callback_007,callback_008],
			cb_args: cb_args,
		});
		await EE.menuBlockItemsEvt(set_block);
	})();			
	(async()=> {
		const callback_009 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_009();
				await EE.setContentEvt(wb_content,tpl_content);
				await detailsToggles_09();
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const callback_010 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_010();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const callback_011 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_011();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const callback_012 = (obj_args)=>{
			const{body,controlls_ctn} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content =  ET.template_012();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const cb_args = await FT.createObjects('cb_obj',{
			menu_block: menu_block[2],
			...obj_args_ext,
		});
		const set_block = await FT.createObjects('set_obj',{
			menu_block: menu_block[2],
			cb_collection:[callback_009,callback_010,callback_011,callback_012],
			cb_args: cb_args,
		});
		await EE.menuBlockItemsEvt(set_block);
	})();			
	(async()=> {
		const callback_013 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content =  ET.template_013();
				await EE.setContentEvt(wb_content,tpl_content);
				await editorPanel(obj_args);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const callback_014 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content =  ET.template_014();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const callback_015 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content =  ET.template_015();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const callback_016 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content =  ET.template_016();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const cb_args = await FT.createObjects('cb_obj',{
			menu_block: menu_block[3],
			...obj_args_ext,
		});
		const set_block = await FT.createObjects('set_obj',{
			menu_block: menu_block[3],
			cb_collection:[callback_013,callback_014,callback_015,callback_016],
			cb_args: cb_args,
		});
		await EE.menuBlockItemsEvt(set_block);
	})();			
};