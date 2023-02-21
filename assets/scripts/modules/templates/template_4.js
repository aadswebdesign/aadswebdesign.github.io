/** templates/template_4.js */
import * as SI_C from './../../svgManager/icons/svgIcons_C.js';
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js' ;

/**
 * @description: 	
 */
export async function templateFour(){
	return await `
		<aside class='details-block top sticky'>
			<details id='horizontal' class='relative'>
				<summary class='caret-right left-to-right relative' title='Open'></summary>			
				<div class='detail-content horizontal absolute  display-flex'>
					<div class='detail-box one relative'>
						<details class='vertical-top one relative'>
							<summary class='one relative'>
								<i class='box-top-to-down one caret-top-down relative'></i> detail-box1
							</summary>
							<div class='detail-content box absolute display-flex'>
								detail contents 1
							</div>
						</details>
					</div>
					<div class='detail-box two relative'>
						<details class='vertical-top two relative'>
							<summary class='two relative'>
								<i class='box-top-to-down two caret-top-down relative'></i> detail-box2
							</summary>
							<div class='detail-content box absolute display-flex'>
								detail contents 2
							</div>
						</details>
					</div>
					<div class='detail-box three relative'>
						<details class='vertical-top three relative'>
							<summary class='two relative'>
								<i class='box-top-to-down three caret-top-down relative'></i> detail-box2
							</summary>
							<div class='detail-content box absolute display-flex'>
								detail contents 3
							</div>
						</details>
					</div>
					<div class='detail-box four relative'>
						<details class='vertical-top four relative'>
							<summary class='two relative'>
								<i class='box-top-to-down four caret-top-down relative'></i> detail-box2
							</summary>
							<div class='detail-content box absolute display-flex'>
								detail contents 4
							</div>
						</details>
					</div>
				</div>
			</details>
		</aside>
		<i class='top-left absolute'></i>
		<aside class='details-block left sticky'>
			<details id='vertical' class='relative'>
				<summary class='caret-down top-to-bottom relative'></summary>			
				<div class='detail-content absolute'>left</div>
			</details>
		</aside>
		
	`;
}
export const templateFourActions = async (_paging_obj,page_id,_log = false)=>{
	const paging_obj = _paging_obj;
	async function iconTogglerLeftRight(log){
		const details_args = {
			callbacks:{
				toggle_off_cb: await SI_C.CaretLeft,
				toggle_on_cb: await SI_C.CaretRight,
			},
			multi: false,
			title_off: 'Close',
			title_on: 'Open',
			toggle_object: 'summary.left-to-right',
			toggle_parent: '#horizontal',
			toggle_target_off:'caret-left',
			toggle_target_on:'caret-right',
			suffix: '_toggler_lr1',
		};
		if(true === log){
			console.log('iconTogglerLeftRight: ');
		}
		await HL.toggleHandler({...details_args});
	}
	await iconTogglerLeftRight();
	async function iconTogglerTopDown(log){
		const details_args = {
			callbacks:{
				toggle_off_cb: await SI_C.CaretUp,
				toggle_on_cb: await SI_C.CaretDown,
			},
			multi: false,
			title_off: 'Close',
			title_on: 'Open',
			toggle_object: 'summary.top-to-bottom',
			toggle_parent: '#vertical',
			toggle_target_off:'caret-up',
			toggle_target_on:'caret-down',
			suffix: '_toggler_td_1',
		};
		if(true === log){
			console.log('iconTogglerTopDown: ');
		}
		await HL.toggleHandler({...details_args});
	}
	async function iconTogglerBoxTopDownOne(log){
		const details_args = {
			callbacks:{
				toggle_off_cb: await SI_C.CaretUp,
				toggle_on_cb: await SI_C.CaretDown,
			},
			title_off: 'Close',
			title_on: 'Open',
			toggle_object: 'i.box-top-to-down.one',
			toggle_parent: '.vertical-top.one',
			toggle_target_off:'caret-top-up',
			toggle_target_on:'caret-top-down',
			suffix: '_toggler_td_2',
		};
		if(true === log){
			console.log('iconTogglerTopboxDown: ');
		}
		await HL.toggleHandler({...details_args});
	}
	async function iconTogglerBoxTopDownTwo(log){
		const details_args = {
			callbacks:{
				toggle_off_cb: await SI_C.CaretUp,
				toggle_on_cb: await SI_C.CaretDown,
			},
			title_off: 'Close',
			title_on: 'Open',
			toggle_object: 'i.box-top-to-down.two',
			toggle_parent: '.vertical-top.two',
			toggle_target_off:'caret-top-up',
			toggle_target_on:'caret-top-down',
			suffix: '_toggler_td_3',
		};
		if(true === log){
			console.log('iconTogglerTopboxDown: ');
		}
		await HL.toggleHandler({...details_args});
	}
	async function iconTogglerBoxTopDownThree(log){
		const details_args = {
			callbacks:{
				toggle_off_cb: await SI_C.CaretUp,
				toggle_on_cb: await SI_C.CaretDown,
			},
			title_off: 'Close',
			title_on: 'Open',
			toggle_object: 'i.box-top-to-down.three',
			toggle_parent: '.vertical-top.three',
			toggle_target_off:'caret-top-up',
			toggle_target_on:'caret-top-down',
			suffix: '_toggler_td_4',
		};
		if(true === log){
			console.log('iconTogglerTopboxDown: ');
		}
		await HL.toggleHandler({...details_args});
	}
	async function iconTogglerBoxTopDownFour(log){
		const details_args = {
			callbacks:{
				toggle_off_cb: await SI_C.CaretUp,
				toggle_on_cb: await SI_C.CaretDown,
			},
			title_off: 'Close',
			title_on: 'Open',
			toggle_object: 'i.box-top-to-down.four',
			toggle_parent: '.vertical-top.four',
			toggle_target_off:'caret-top-up',
			toggle_target_on:'caret-top-down',
			suffix: '_toggler_td_5',
		};
		if(true === log){
			console.log('iconTogglerTopboxDown: ');
		}
		await HL.toggleHandler({...details_args});
	}
	await iconTogglerTopDown();
	await iconTogglerBoxTopDownOne();
	await iconTogglerBoxTopDownTwo();
	await iconTogglerBoxTopDownThree();
	await iconTogglerBoxTopDownFour();
	
	
	
	
};