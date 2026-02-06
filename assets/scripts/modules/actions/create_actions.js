/**localhost  modules/actions/create_actions.js */
import * as FT from './../../factory/functions.js';
import {addMenuBlock} from './../mdl_factory/add_menu_block.js';
export const createActions = async (...args)=>{
	const [parent_el,location_data] = args;
	const {loc_path}= location_data;
	console.log('loc_path: ',loc_path);

	//console.table({'createActions': args});
	(async()=>{
		const create_block = await FT.createObjects('create_obj_1',{
			parent_el: parent_el,
			menu_block:{
				el_class1: ['menu-block','relative'],
				el_id1: null,
				data_id: 'block_one'
			},
			details_elem:{
				el_class2: ['mb-block','relative'],
				el_id2: 'sidebarOne',
				el_name: null,
				el_open: true,
			},
			summary_elem:{
				el_class3: ['triangle-up-uc','relative'],
				el_id3: null,
				el_content: 'My Things:',
				el_title: 'close',
			},
			details_content:{
				el_class4: ['relative', 'display-flex'],
				el_id4: null,
			},
			items_ctn:{
				el_class5: ['text-overflow','clickable-layout','relative'],
				item_ids: ['menu_item_01','menu_item_02','menu_item_03','menu_item_04'],
				item_titles: ['About this update:','License/Disclaimer:','todo_03','todo_04'],
			},
			anchors_ctn:{
				el_class6: ['menu-item-a', 'absolute'],
				//fictief
				el_hrefs:[`/#article_01`,`/#article_02`,`/#todo_03`,`/#todo_04`],
			},
		});
		await addMenuBlock(create_block);
	})();
	(async() =>{
		const create_block = await FT.createObjects('create_obj_2',{
			parent_el: parent_el,
			menu_block:{
				el_class1: ['menu-block','relative'],
				el_id1: null,
				data_id: 'block_two',
			},
			details_elem:{
				el_class2: ['mb-block','relative'],
				el_id2: 'sidebarTwo',
				el_name: null,
				el_open: '',
			},
			summary_elem:{
				el_class3: ['triangle-down-uc','relative'],
				el_id3: null,
				el_content: 'Learnings:',
				el_title: 'open',
			},
			details_content:{
				el_class4: ['relative', 'display-flex'],
				el_id4: null,
			},
			items_ctn:{
				el_class5: ['text-overflow','clickable-layout','relative'],
				item_ids: ['menu_item_05','menu_item_06','menu_item_07','menu_item_08'],
				item_titles: ['todo_05','todo_06','todo_07','todo_08'],
			},
			anchors_ctn:{
				el_class6: ['menu-item-a', 'absolute'],
				//fictief
				el_hrefs:[`/#todo_05`,`/#todo_06`,`/#todo_07`,`/#todo_08`],
			},
		});
		await addMenuBlock(create_block);
	})();
	(async() =>{
		const create_block = await FT.createObjects('create_obj_3',{
			parent_el: parent_el,
			menu_block:{
				el_class1: ['menu-block','relative'],
				el_id1: null,
				data_id: 'block_three'
			},
			details_elem:{
				el_class2: ['mb-block','relative'],
				el_id2: 'sidebarThree',
				el_name: null,
				el_open: '',
			},
			summary_elem:{
				el_class3: ['triangle-down-uc','relative'],
				el_id3: null,
				el_content: 'Proj Docs:',
				el_title: 'open',
			},
			details_content:{
				el_class4: ['relative', 'display-flex'],
				el_id4: null,
			},
			items_ctn:{
				el_class5: ['text-overflow','clickable-layout','relative'],
				item_ids: ['menu_item_09','menu_item_10','menu_item_11','menu_item_12'],
				item_titles: ['ModuleEditor Docs:','todo_10','todo_11','todo_12'],
			},
			anchors_ctn:{
				el_class6: ['menu-item-a', 'absolute'],
				//fictief
				el_hrefs:[`/#docs_01`,`/#todo_10`,`/#todo_11`,`/#todo_12`],
			},
		});
		await addMenuBlock(create_block);
	})();
	(async() =>{
		const create_block = await FT.createObjects('create_obj_4',{
			parent_el: parent_el,
			menu_block:{
				el_class1: ['menu-block','relative'],
				el_id1: null,
				data_id: 'block_four'
			},
			details_elem:{
				el_class2: ['mb-block','relative'],
				el_id2: 'sidebarFour',
				el_name: null,
				el_open: '',
			},
			summary_elem:{
				el_class3: ['triangle-down-uc','relative'],
				el_id3: null,
				el_content: 'Projects:',
				el_title: 'open',
			},
			details_content:{
				el_class4: ['relative', 'display-flex'],
				el_id4: null,
			},
			items_ctn:{
				el_class5: ['text-overflow','clickable-layout','relative'],
				item_ids: ['menu_item_13','menu_item_14','menu_item_15','menu_item_16'],
				item_titles: ['ModuleEditor:','todo_14','todo_15','todo_16'],
			},
			anchors_ctn:{
				el_class6: ['menu-item-a', 'absolute'],
				//fictief
				el_hrefs:[`/#project_01`,`/#todo_14`,`/#todo_15`,`/#todo_16`],
			},
		});
		await addMenuBlock(create_block);
	})();	
};