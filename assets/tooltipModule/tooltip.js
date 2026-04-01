//tooltipModule/tooltip.js
import {tooltipCollect} from './tooltip_collect.js';
//tooltip_actions.js
export const tooltip = async(...args)=>{
	await tooltipCollect(...args);
};