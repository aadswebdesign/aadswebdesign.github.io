//editor_logic/data/toolbox_data.js
import * as EE from './../../events_export.js';
import * as MFT from './../../../factory/module_functions.js';
class ToolboxData{
	#btn_block;	#comm_elem;	#strip_ctn;	#tooltip;	#tbx_el;
	constructor(obj_args){
		const {command_data,tbx_strip_ctn}= obj_args;
		const {btn_block,command_elem,tooltip,tbx_el} = command_data;
		this.#btn_block = btn_block ?? null;
		this.#strip_ctn = tbx_strip_ctn;
		this.#tbx_el = tbx_el;
		this.#tooltip = tooltip;
		this.#comm_elem = command_elem;
		(async()=> {		
				const btn_block_evt = async(...args)=>{
					const [evt,click_btn,tbx_el] = args;
					evt.preventDefault();
					if(click_btn.hasAttribute('data-on')){
						this.#strip_ctn.appendChild(tbx_el);
						this.#comm_elem.title = `open ${click_btn.title} for more options!`;
						await this.#tooltip(tbx_el);
						(async()=> {
							const btn_block_evt2 = async(...args)=>{
								await MFT.replaceClass(tbx_el,'display-none','display-flex');
							}
							await EE.tbxClickEvent(this.#comm_elem,this.#tbx_el,btn_block_evt2);
						})();	
					}else{
						await MFT.replaceClass(tbx_el,'display-flex','display-none');
						this.#tbx_el.replaceWith('');
						this.#comm_elem.title = 'Activate the left button first for more options!';
					}
				};
				await EE.tbxClickEvent(this.#btn_block,this.#tbx_el,btn_block_evt);
				const tbx_el_evt = async(...args)=>{
					const [evt,tbx_el] = args;
					evt.preventDefault();
					if(evt.command === '--close-toolbox'){
						await MFT.replaceClass(tbx_el,'display-flex','display-none');
					}
				};			
				await EE.tbxCommandEvent(this.#tbx_el,tbx_el_evt);
			//console.table({'toolboxData': obj_args});
		})();
	}	
}
export const toolboxData = async (obj_args)=>{
	return new ToolboxData(obj_args);
};			