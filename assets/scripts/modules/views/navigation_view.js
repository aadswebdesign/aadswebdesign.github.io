/** modules/views/navigation_view.js */
import * as HE from './../../htmlManager/htmlElements.js';
//main-menu realtive
export async function navigationView(){
	await HE.div('display-none active', 'menu_item0', null,null,false, 'nav.main-menu');
	await HE.div('block menu-item relative', 'menu_item1', null,'Home',false, 'nav.main-menu');
	await HE.div('block menu-item relative', 'menu_item2', null,'Blog',false, 'nav.main-menu');
	await HE.div('block menu-item relative', 'menu_item3', null,'About',false, 'nav.main-menu');
	await HE.div('block menu-item relative', 'menu_item4', null,'Learning',false, 'nav.main-menu');
}

