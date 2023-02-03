/** index.js */
import * as FT from "./factory/functions.js";
import {navigationView} from "./modules/views/navigation_view.js"; 
import {mainView} from './modules/views/main_view.js'; 
import {pagesSetup} from './factory/pages.js';
const generals = async ()=> {
	await FT.sanitizeHTMLHelper('small.my-details',`awd<time><i> &#169; </i>${await FT.setDate()}</time>`,false,true);
};

(async function(){
	await console.log('index.js');
	await navigationView();
	await mainView();
	await pagesSetup();
	await generals();
})();