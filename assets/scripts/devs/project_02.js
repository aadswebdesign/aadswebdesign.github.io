/**localhost  devs/project_02.js */
import * as FT from './../factory/functions.js';
//editor stuff
import {tooltip} from './../../tooltipModule/tooltip.js';

export const tooltipPanel = async ()=>{
	const tooltip_id = await FT.getId('placeholder3');
	await tooltip(tooltip_id);
};
