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
			const tb_item_ctn = wrapper.lastElementChild;
			const tb_item_btn = tb_item_ctn.previousElementSibling;
			console.log('wrapper: ',wrapper);
			//console.log('tb_item_ctn: ',tb_item_ctn);
			tb_item_btn.addEventListener('click',async(event)=>{
				await FT.dataTbOpenToggle(tb_item_btn);	
				if(tb_item_btn.hasAttribute('data-tb_open')){
					await FT.replaceClass(tb_item_btn, 'to-right-caret','to-left-caret');		
					await FT.replaceClass(tb_item_ctn, 'display-none','display-flex');
					tb_item_btn.title = 'close this';
					//console.log('tb_item_btn1: ',tb_item_btn);
				}else{
					await FT.replaceClass(tb_item_btn, 'to-left-caret','to-right-caret');
					await FT.replaceClass(tb_item_ctn, 'display-flex','display-none');
					tb_item_btn.title = 'open this';
					//console.log('tb_item_btn2: ',tb_item_btn);
				}				
				
				
				
				
				
				
			});
			
			
			
			
			
			
			
		}
		
		
		
		
		
	})();
	
	
	
	
};