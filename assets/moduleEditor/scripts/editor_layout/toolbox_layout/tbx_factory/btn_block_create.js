// tbx_factory/btn_block_create.js
import * as TE from './tbx_elems.js';
export const btnBlockCreate = async (...args)=>{
	const [id=null,icon,block_class = null, block_title= null] = args;
	const tbx_btn = await TE.tbxBtnEl();
	const tbx_block_btn = await TE.tbxBtnBlockEl();
	if(id !== null){
		tbx_btn.id = `tbx_${id}_btn`;
		tbx_block_btn.id = `tbx_${id}_block_btn`;
	}
	tbx_btn.classList = `btn-style tb-item ${icon} relative`;
	if(block_class !== null)
		tbx_block_btn.classList = `${block_class} btn-block relative`;
	if(block_title !== null)
	 tbx_block_btn.title = block_title;
	tbx_block_btn.appendChild(tbx_btn);
	return tbx_block_btn;
}