/**localhost  modules/actions/set_actions.js */
import * as FT from './../../factory/functions.js';
import * as EE from './../events/exp_events.js';
import * as ET from './../templates/exp_templates.js';
import * as EC from './../callbacks/exp_callbacks.js';
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
		const cb_1001 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_1001();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const cb_1002 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				//console.log('cb_1002');
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_1002();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const cb_1003 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				console.log('cb_1003');
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_1003();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const cb_1004 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				console.log('cb_1004');
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_1004();
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
			cb_collection:[cb_1001,cb_1002,cb_1003,cb_1004],
			cb_args: cb_args,
		});
		await EE.menuBlockItemsEvt(set_block);
	})();			
	(async()=> {
		const cb_2001 = (obj_args)=>{
			const{vvp,body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				console.log('cb_2001');
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_2001();
				await EE.setContentEvt(wb_content,tpl_content);
				await EC.myWorksCb_001({vvp});

			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const cb_2002 = (obj_args)=>{
			const{vvp,body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_2002();
				await EE.setContentEvt(wb_content,tpl_content);
				await EC.myWorksCb_002({vvp});

			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const cb_2003 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_2003();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const cb_2004 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_2004();
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
			cb_collection:[cb_2001,cb_2002,cb_2003,cb_2004],
			cb_args: cb_args,
		});
		await EE.menuBlockItemsEvt(set_block);
	})();			
	(async()=> {
		const cb_3001 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_3001();
				await EE.setContentEvt(wb_content,tpl_content);
				await detailsToggles_09();
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const cb_3002 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_3002();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const cb_3003 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content = ET.template_3003();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const cb_3004 = (obj_args)=>{
			const{body,controlls_ctn} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content =  ET.template_3004();
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
			cb_collection:[cb_3001,cb_3002,cb_3003,cb_3004],
			cb_args: cb_args,
		});
		await EE.menuBlockItemsEvt(set_block);
	})();			
	(async()=> {
		const cb_4001 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content =  ET.template_4001();
				await EE.setContentEvt(wb_content,tpl_content);
				await editorPanel(obj_args);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const cb_4002 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content =  ET.template_4002();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const cb_4003 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content =  ET.template_4003();
				await EE.setContentEvt(wb_content,tpl_content);
			})();
			//console.table({'obj_args: ':obj_args});
		}; 
		const cb_4004 = (obj_args)=>{
			const{body,controlls_ctn,wb_content} = obj_args;
			(async()=> {
				await EE.activeTogglesEvt(body,controlls_ctn);
				const tpl_content =  ET.template_4004();
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
			cb_collection:[cb_4001,cb_4002,cb_4003,cb_4004],
			cb_args: cb_args,
		});
		await EE.menuBlockItemsEvt(set_block);
	})();			
};