//editor_logic/data/group_3_sub_data.js
import * as EE from './../../events_export.js';
import * as MFT from './../../../factory/module_functions.js';
class Group3SubData{
	#blocks;
	constructor(...args){
		const [blocks] = args;
		this.#blocks = blocks;
		const [block1,block2,block3,block4,block5,block6] = this.#blocks;
		(async()=> {
			const block_data = await MFT.createObjects('block_obj',{});
			block_data.block_set_1 = {
				active_el: block1,
				non_actives: [block2,block3,block4,block5,block6],
			};
			block_data.block_set_2 = {
				active_el: block2,
				non_actives: [block1,block3,block4,block5,block6],
			};
			block_data.block_set_3 = {
				active_el: block3,
				non_actives: [block1,block2,block4,block5,block6],
			};
			block_data.block_set_4 = {
				active_el: block4,
				non_actives: [block1,block2,block3,block5,block6],
			};
			block_data.block_set_5 = {
				active_el: block5,
				non_actives: [block1,block2,block3,block4,block6],
			};
			block_data.block_set_6 = {
				active_el: block6,
				non_actives: [block1,block2,block3,block4,block5],
			};
			const {block_set_1,block_set_2,block_set_3,block_set_4,block_set_5,block_set_6} = block_data;
			await Promise.all([
				EE.toggleOffEvent(block_set_1),
				EE.toggleOffEvent(block_set_2),
				EE.toggleOffEvent(block_set_3),
				EE.toggleOffEvent(block_set_4),
				EE.toggleOffEvent(block_set_5),
				EE.toggleOffEvent(block_set_6),
			]);
		})();
	}
}
export const group3SubData = async (...args)=>{
	return new Group3SubData(...args);
};			