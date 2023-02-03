/** index.js */
import {navigationView} from "./modules/views/navigation_view.js"; 
import {mainView} from './modules/views/main_view.js'; 

import {pagesSetup} from './factory/pages.js';

(async function(){
	await console.log('index.js');
	await navigationView();
	await mainView();
	await pagesSetup();
})();