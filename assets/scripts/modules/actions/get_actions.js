/**localhost  modules/actions/get_actions.js */
import {getExtendedObjects} from './../../factory/dom_objects.js';
import * as FT from './../../factory/functions.js';
import {sizings} from './../mdl_factory/sizings.js';
import {defaultInit} from './../defaults/default_init.js';
import {defaultAction} from './../defaults/default_action.js';
import {menubarOneAction} from './menubars/menubar_one_action.js';
import {menubarTwoAction} from './menubars/menubar_two_action.js';
import {menubarThreeAction} from './menubars/menubar_three_action.js';
import {menubarFourAction} from './menubars/menubar_four_action.js';
export const getActions = async(elems)=>{
	const ext_elems = await getExtendedObjects(elems);
	const {left_bar,menu_items,functions_test} = ext_elems;
	await Promise.all([
		sizings(ext_elems),
		defaultInit({left_bar,...menu_items}),
		defaultAction(menu_items),
		menubarOneAction(ext_elems),
		menubarTwoAction(ext_elems),
		menubarThreeAction(ext_elems),
		menubarFourAction(ext_elems),
	]);
};
