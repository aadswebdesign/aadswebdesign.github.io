/** templates/template_3.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: 	
 */
export async function templateThree(){
	return await `<div id='templateThree' class='template-three relative'>
		<button>Toggle test</button>
		<div class='test-block relative'>testblock</div>
	</div>`;
}
export const templateThreeActions = async (_obj,page_id)=>{
	const obj = _obj;
	const templ3 = await FT.getIdHelper('templateThree');
	await FT.addAttributes('#templateThree',{data_test_two:'test'});
	const btn = await FT.elQuery('button', false,templ3);
	const toggle_class = await FT.toggleClass;
	btn.addEventListener('click',evt=>{
		toggle_class('.test-block','test-class',templ3);
		console.log('clicked1');
	});
	const _parent = FT.getParent('.test-block',true);
	console.log('templ3',templ3);
};
