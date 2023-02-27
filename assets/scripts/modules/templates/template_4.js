/** templates/template_4.js */
import * as SI_C from './../../svgManager/Icons/svgIcons_C.js';
import * as SI_L from './../../svgManager/Icons/svgIcons_L.js';
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js' ;

/**
 * @description: 	
 */
export async function templateFour(){
	return await `
		<div class='canvas-container absolute'>
			<div class='canvas relative'>canvas todo!</div>
		</div>
		<aside class='details-block one sticky'>
			<details id='detailsBlockOne' class='relative'>
				<summary class='relative'>
					<i class='left-to-right one caret-right absolute'></i>
				</summary>			
				<div class='detail-content one-1 absolute display-flex'>
					<div class='detail-container relative'>
						<details id='detailBoxOne1' class='detail-box one relative'>
							<summary class='relative display-flex'>
								<i class='box-top-to-down-1 caret-top-down relative'></i>
								<div class='summary-content relative'> detail-box1</div>
							</summary>
							<div class='detail-content box absolute display-flex'>
								detail contents 1
							</div>
						</details>
					</div>
					<div class='detail-container relative'>
						<details id='detailBoxOne2' class='detail-box two relative'>
							<summary class='relative display-flex'>
								<i class='box-top-to-down-2 caret-top-down relative'></i>
								<div class='summary-content relative'> detail-box2</div>
							</summary>
							<div class='detail-content box absolute display-flex'>
								detail contents 2
							</div>
						</details>
					</div>
					<div class='detail-container relative'>
						<details id='detailBoxOne3' class='detail-box three relative'>
							<summary class='relative display-flex'>
								<i class='box-top-to-down-3 caret-top-down relative'></i>
								<div class='summary-content relative'> detail-box3</div>
							</summary>
							<div class='detail-content box absolute display-flex'>
								detail contents 3
							</div>
						</details>
					</div>
					<div class='detail-container relative'>
						<details id='detailBoxOne4' class='detail-box four relative'>
							<summary class='relative display-flex'>
								<i class='box-top-to-down-4 caret-top-down relative'></i>
								<div class='summary-content relative'> detail-box4</div>
							</summary>
							<div class='detail-content box absolute display-flex'>
								detail contents 4
							</div>
						</details>
					</div>
				</div>
				<div class='detail-content one-2 absolute display-flex'>
					<div class='detail-container relative'>
						<details id='detailBoxOneTwo1' class='detail-box one relative'>
							<summary class='relative display-flex'>
								<i class='box-top-to-down-two-1 caret-top-down relative'></i>
								<div class='summary-content relative'>01</div>
							</summary>
							<div class='detail-content box absolute display-flex'>
								01
							</div>
						</details>
					</div>
					<div class='detail-container relative'>
						<details id='detailBoxOneTwo2' class='detail-box one relative'>
							<summary class='relative display-flex'>
								<i class='box-top-to-down-two-2 caret-top-down relative'></i>
								<div class='summary-content relative'>02</div>
							</summary>
							<div class='detail-content box absolute display-flex'>
								02
							</div>
						</details>
					</div>
					<div class='detail-container relative'>
						<details id='detailBoxOneTwo3' class='detail-box one relative'>
							<summary class='relative display-flex'>
								<i class='box-top-to-down-two-3 caret-top-down relative'></i>
								<div class='summary-content relative'>03</div>
							</summary>
							<div class='detail-content box absolute display-flex'>
								03
							</div>
						</details>
					</div>
					<div class='detail-container relative'>
						<details id='detailBoxOneTwo4' class='detail-box one relative'>
							<summary class='relative display-flex'>
								<i class='box-top-to-down-two-4 caret-top-down relative'></i>
								<div class='summary-content relative'>04</div>
							</summary>
							<div class='detail-content box absolute display-flex'>
								04
							</div>
						</details>
					</div>
					<div class='detail-container relative'>
						<details id='detailBoxOneTwo5' class='detail-box one relative'>
							<summary class='relative display-flex'>
								<i class='box-top-to-down-two-5 caret-top-down relative'></i>
								<div class='summary-content relative'>05</div>
							</summary>
							<div class='detail-content box absolute display-flex'>
								05
							</div>
						</details>
					</div>
				
				
				</div>
			</details>
		</aside>
		<i class='top-left absolute'></i>
		<aside class='details-block two sticky'>
			<details id='detailsBlockTwo' class='relative'>
				<summary class='relative'>
					<i class='top-to-bottom one caret-down relative'></i>
				</summary>			
				<div class='detail-content two-1 absolute display-flex'>
					<div class='detail-container relative'>
						<details id='detailBoxTwo1' class='detail-box five relative'>
							<summary class='relative display-flex'>
								<i class='box-left-to-right one-1 caret-right absolute'></i>
								<div class='summary-content relative'>01</div>
							</summary>
							<div class='detail-content box absolute display-flex'>
								<div class='relative'>detail contents 5</div>
							</div>
						</details>
					</div>
					<div class='detail-container relative'>
						<details id='detailBoxTwo2' class='detail-box six relative'>
							<summary class='relative display-flex'>
								<i class='box-left-to-right one-2 caret-right absolute'></i>
								<div class='summary-content relative'>02</div>
							</summary>
							<div class='detail-content box absolute display-flex'>
								detail contents 6
							</div>
						</details>
					</div>
					<div class='detail-container relative'>
						<details id='detailBoxTwo3' class='detail-box seven relative'>
							<summary class='relative display-flex'>
								<i class='box-left-to-right one-3 caret-right absolute'></i>
								<div class='summary-content relative'>03</div>
							</summary>
							<div class='detail-content box absolute display-flex'>
								detail contents 7
							</div>
						</details>
					</div>
					<div class='detail-container relative'>
						<details id='detailBoxTwo4' class='detail-box eight relative'>
							<summary class='relative display-flex'>
								<i class='box-left-to-right one-4 caret-right absolute'></i>
								<div class='summary-content relative'>04</div>
							</summary>
							<div class='detail-content box absolute display-flex'>
								detail contents 8
							</div>
						</details>
					</div>
				</div>
				<div class='detail-content two-2 absolute display-flex'>
					<div class='detail-container relative'>
						<details id='detailBoxThree1' class='detail-box five relative'>
							<summary class='relative display-flex'>
								<div class='summary-content relative'>01</div>
								<i class='box-left-to-right two-1 caret-right absolute'></i>
							</summary>
							<div class='detail-content box absolute display-flex'>
								detail contents 1
							</div>
						</details>
					</div>
					<div class='detail-container relative'>
						<details id='detailBoxThree2' class='detail-box five relative'>
							<summary class='relative display-flex'>
								<div class='summary-content relative'>02</div>
								<i class='box-left-to-right two-2 caret-right absolute'></i>
							</summary>
							<div class='detail-content box absolute display-flex'>
								detail contents 2
							</div>
						</details>
					</div>
					<div class='detail-container relative'>
						<details id='detailBoxThree3' class='detail-box five relative'>
							<summary class='relative display-flex'>
								<div class='summary-content relative'>03</div>
								<i class='box-left-to-right two-3 caret-right absolute'></i>
							</summary>
							<div class='detail-content box absolute display-flex'>
								detail contents 3
							</div>
						</details>
					</div>
					<div class='detail-container relative'>
						<details id='detailBoxThree4' class='detail-box five relative'>
							<summary class='relative display-flex'>
								<div class='summary-content relative'>04</div>
								<i class='box-left-to-right two-4 caret-right absolute'></i>
							</summary>
							<div class='detail-content box absolute display-flex'>
								detail contents 4
							</div>
						</details>
					</div>
					<div class='detail-container relative'>
						<details id='detailBoxThree5' class='detail-box five relative'>
							<summary class='relative display-flex'>
								<div class='summary-content relative'>05</div>
								<i class='box-left-to-right two-5 caret-right absolute'></i>
							</summary>
							<div class='detail-content box absolute display-flex'>
								detail contents 5
							</div>
						</details>
					</div>
				</div>
			</details>
		</aside>
	`;
}
export const templateFourActions = async (_paging_obj,page_id,_log = false)=>{
	const paging_obj = _paging_obj;
	const block_page = await FT.elQuery('.block.page'); 
	await SI_L.List('.top-left','_topLeft');
	//await FT.detailsContentSizesToVar(parent,target,true,false,true);
	//setTimeout(()=>{},100);
	async function toggleDetailsBlock1(log){
		const details_args = {
			callbacks:{
				toggle_off_cb: await SI_C.CaretLeft,
				toggle_on_cb: await SI_C.CaretRight,
			},
			title_off: 'Close',
			title_on: 'Open',
			toggle_parent: 'details#detailsBlockOne',
			toggle_target: 'i.left-to-right',
			toggle_target_off:'caret-left',
			toggle_target_on:'caret-right',
			suffix: 'TDB_1',
		};
		if(true === log){
			console.log('iconTogglerLeftRight: ');
		}
		await HL.toggleHandler({...details_args});
	}
	async function toggleDetailsBlock1_Inner1(log){
		const detail_content = await FT.elQuery('.detail-content.one-1');
		const detail_containers = await FT.elQuery('.detail-container', true, detail_content); 
		let i='0';
		for(const container of detail_containers){
			const index = ++i;
			const details_args = {
				callbacks:{
					toggle_off_cb: await SI_C.CaretUp,
					toggle_on_cb: await SI_C.CaretDown,
				},
				title_off: 'Close',
				title_on: 'Open',
				toggle_parent: 'details#detailBoxOne' + index,
				toggle_target: 'i.box-top-to-down-' + index,
				toggle_target_off:'caret-top-up',
				toggle_target_on:'caret-top-down',
				suffix:'DBI_1_'+ index,
			};
			if(true === log){
				console.log('container: ',container);
				console.log('index: ',index);
			}
			await HL.toggleHandler({...details_args});
		}
		if(true === log){
			console.log('detail_content: ',detail_content);
			console.log('detail_containers: ',detail_containers);
			console.log('toggleDetailsBlock1_Inner: ');
		}
	}
	async function toggleDetailsBlock1_Inner2(log){
		const detail_content = await FT.elQuery('.detail-content.one-2');
		const detail_containers = await FT.elQuery('.detail-container', true, detail_content); 
		let i='0';
		for(const container of detail_containers){
			const index = ++i;
			const details_args = {
				callbacks:{
					toggle_off_cb: await SI_C.CaretUp,
					toggle_on_cb: await SI_C.CaretDown,
				},
				title_off: 'Close',
				title_on: 'Open',
				toggle_parent: 'details#detailBoxOneTwo' + index,
				toggle_target: 'i.box-top-to-down-two-' + index,
				toggle_target_off:'caret-top-up',
				toggle_target_on:'caret-top-down',
				suffix:'DBI_2_'+ index,
			};
			if(true === log){
				console.log('container: ',container);
				console.log('index: ',index);
			}
			await HL.toggleHandler({...details_args});
		}
		if(true === log){
			console.log('detail_content: ',detail_content);
			console.log('detail_containers: ',detail_containers);
			console.log('toggleDetailsBlock1_Inner: ');
		}
	}
	await toggleDetailsBlock1();
	await toggleDetailsBlock1_Inner1();
	await toggleDetailsBlock1_Inner2();
	async function toggleDetailsBlock2(log){
		const details_args = {
			callbacks:{
				toggle_off_cb: await SI_C.CaretUp,
				toggle_on_cb: await SI_C.CaretDown,
			},
			multi: false,
			title_off: 'Close',
			title_on: 'Open',
			toggle_parent: 'details#detailsBlockTwo',
			toggle_target: 'i.top-to-bottom',
			toggle_target_off:'caret-up',
			toggle_target_on:'caret-down',
			suffix: 'TDB_2',
		};
		if(true === log){
			console.log('iconTogglerTopDown: ');
		}
		await HL.toggleHandler({...details_args});
	}
	async function toggleDetailsBlock2_Inner1(log){
		const detail_content = await FT.elQuery('.detail-content.two-1');
		const detail_containers = await FT.elQuery('.detail-container', true, detail_content); 
		let i='0';
		for(const container of detail_containers){
			const index = ++i;
			const details_args = {
				callbacks:{
					toggle_off_cb: await SI_C.CaretLeft,
					toggle_on_cb: await SI_C.CaretRight,
				},
				title_off: 'Close',
				title_on: 'Open',
				toggle_parent: 'details#detailBoxTwo'+index,
				toggle_target: 'i.box-left-to-right.one-'+index,
				toggle_target_off:'caret-left',
				toggle_target_on:'caret-right',
				suffix: 'DBI_2_'+ index,
			};
			if(true === log){
				console.log('container: ',container);
				console.log('index: ',index);
			}
			await HL.toggleHandler({...details_args});
		}
		if(true === log){
			console.log('detail_content: ',detail_content);
			console.log('detail_containers: ',detail_containers);
		}
	}
	async function toggleDetailsBlock2_Inner2(log){
		const detail_content = await FT.elQuery('.detail-content.two-2');
		const detail_containers = await FT.elQuery('.detail-container', true, detail_content); 
		let i='0';
		for(const container of detail_containers){
			const index = ++i;
			const details_args = {
				callbacks:{
					toggle_off_cb: await SI_C.CaretLeft,
					toggle_on_cb: await SI_C.CaretRight,
				},
				title_off: 'Close',
				title_on: 'Open',
				toggle_parent: 'details#detailBoxThree'+index,
				toggle_target: 'i.box-left-to-right.two-'+index,
				toggle_target_off:'caret-left',
				toggle_target_on:'caret-right',
				suffix: 'DBI_3_'+ index,
			};
			if(true === log){
				console.log('container: ',container);
				console.log('index: ',index);
			}
			await HL.toggleHandler({...details_args});
		}
		if(true === log){
			console.log('detail_content: ',detail_content);
			console.log('detail_containers: ',detail_containers);
		}
	}
	await toggleDetailsBlock2();
	await toggleDetailsBlock2_Inner1();
	await toggleDetailsBlock2_Inner2();
	//my canvas things
	const detailsBlockOne = await FT.getIdHelper('detailsBlockOne');
	const canvas = await FT.elQuery('div.canvas'); 
	console.log('detailsBlockOne: ',detailsBlockOne);
	console.log('canvas: ',canvas);
	detailsBlockOne.addEventListener('toggle',(event)=>{
		if(detailsBlockOne.open){
			canvas.style.top = '35px';
			canvas.style.left = '40px';
		}else{
			canvas.style.top = '0';
			canvas.style.left = '4.5rem';
		}
		event.stopPropagation();
	});








};