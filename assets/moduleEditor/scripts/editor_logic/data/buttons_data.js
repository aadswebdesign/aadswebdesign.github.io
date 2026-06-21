//editor_logic/data/buttons_data.js
import * as DE from './../data_export.js';
import * as EE from './../events_export.js';
import * as ME from './../modules_export.js';
import * as CF from './../factory/create_functions.js';
import * as MFT from './../../factory/module_functions.js';
class ButtonsData{
	#parent_ctn;#parent_el;
	#pre_output;#pre_outer;
	constructor(...args){
		const[parent_el,parent_ctn,pre_output,pre_outer] = args;
		this.#parent_ctn = parent_ctn;
		this.#parent_el = parent_el ?? null;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		(async()=> {
			if(this.#parent_el !== null){
				const btn_blocks = await MFT.getTagNames('BTN-BLOCK',this.#parent_el);
				const canvas_el = await CF.getCanvasElem(this.#parent_ctn);
				const pre_el = await CF.getPreElem(this.#parent_ctn);
				const groups = [];
				let i= 0;
				for(const btn_block of MFT.uniqueArray(btn_blocks)){
					const count = i++;
					await EE.onOffToggleEvent(btn_block);
					if(btn_block.dataset.type === 'block'){
						if(btn_block.dataset.subType === 'structural'){
							if(btn_block.dataset.grpName === 'article-grp'){
								await ME.setBlockStructereMdl(btn_block,canvas_el,pre_el,this.#pre_output,this.#pre_outer);
							}
							if(btn_block.dataset.grpName === 'self-closing'){
								await ME.setBlockSelfclosingMdl(btn_block,canvas_el,pre_el,this.#pre_output,this.#pre_outer);
							}
						}
						if(btn_block.dataset.subType === 'textformat'){
							if(btn_block.dataset.grpName === 'textformats-grp'){
								await ME.setBlockTextformatMdl(btn_block,canvas_el,pre_el,this.#pre_output,this.#pre_outer);
							}
						}
					}
					//from here
					if(btn_block.dataset.type === 'inline'){
						if(btn_block.dataset.grpName === 'inline-grp'){
							await ME.setInlineMdl(btn_block,canvas_el,pre_el,this.#pre_output,this.#pre_outer);
						}
						if(btn_block.dataset.grpName === 'select-grp'){
							await ME.setSelectMdl(btn_block,canvas_el,pre_el,this.#pre_output,this.#pre_outer);
						}
					}
				}
			}
		})();
		//console.table({'ButtonsData': args});
	}
}
export const buttonsData = async (...args)=>{
	return new ButtonsData(...args);
};