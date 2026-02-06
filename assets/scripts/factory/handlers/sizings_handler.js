/** assets/scripts/factory/classes/sizings_handler.js */
import * as FT from './../functions.js';

class SizingsHandler{
	constructor(...args){
		const [vvp,callback] = args;
		vvp.addEventListener('resize',()=>{
			callback();
		});
	}
	
}
export const sizingsHandler = async (...args)=>{
	return await new SizingsHandler(...args)
};