//localhost /scripts/development/editor_panel_cb
import * as FT from './../factory/functions.js';
export const editorPanelCb =  async (toolbar_items)=>{
	const {toolbars_ctn,editor_toolbars,tb_items_wrapper,btn_group_wrapper} = toolbar_items;
	//console.log('btn_group_wrapper:',btn_group_wrapper);
	(async ()=>{
		for(const wrapper of FT.uniqueArray(tb_items_wrapper)){
			const tb_item_btn = wrapper.firstElementChild;
			const tb_item_ctn = wrapper.lastElementChild;
			tb_item_btn.addEventListener('click',async(event)=>{
				await FT.dataTbOpenToggle(tb_item_btn);
				event.preventDefault();
				if(!tb_item_btn.hasAttribute('data-tb_open')){
					await FT.replaceClass(tb_item_btn, 'to-left-caret','to-right-caret');			
					await FT.replaceClass(tb_item_ctn, 'display-flex','display-none');
					tb_item_btn.title = 'open this';
				}else{
					await FT.replaceClass(tb_item_btn, 'to-right-caret','to-left-caret');
					await FT.replaceClass(tb_item_ctn, 'display-none','display-flex');
					tb_item_btn.title = 'close this';
				}
			});
		}
	})();
	(async ()=>{
		for(const wrapper of FT.uniqueArray(btn_group_wrapper)){
			//console.log('group wrapper:', wrapper);		
			const leading_elem = wrapper.firstElementChild;
			//console.log('leading_elem:', leading_elem);
			const outer_ctn = wrapper.lastElementChild;
			//console.log('outer_ctn:', outer_ctn);
			const group_btn = outer_ctn.firstElementChild;
			//console.log('group_btn:', group_btn);
			const inner_ctn = outer_ctn.lastElementChild;
			//console.log('inner_ctn:', inner_ctn);
			group_btn.addEventListener('click', async ()=>{
				await FT.dataTbOpenToggle(group_btn);	
				if(group_btn.hasAttribute('data-tb_open')){
					await FT.replaceClass(group_btn, 'to-right-caret','to-left-caret');
					await FT.replaceClass(inner_ctn, 'display-none','display-flex');
					group_btn.title = 'close this';
				}else{
					await FT.replaceClass(group_btn, 'to-left-caret','to-right-caret');
					await FT.replaceClass(inner_ctn, 'display-flex','display-none');
					group_btn.title = 'open this';
				}
			});
		}
	})();
};