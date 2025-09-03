//localhost managers/moduleEditor/mdl_templates/toolbar_templates.js

export const detailsTemplate = (...args) =>{
	const [details_id,details_class,summ_class,summ_title, add_items] = args;
	const tpl = `
		<details id='${details_id}' class='${details_class} relative' open>
			<summary class='ua-unicode ${summ_class} relative' title='${summ_title}'></summary>
			<details-content class='absolute'>
				${add_items}
			</details-content>
		</details>
	`;
	return tpl;
}

export const itemsWrapperTemplate = (...args) =>{
	const [wrapper_class= '',tb_items='']= args;
	const tpl = `
		<items-wrapper class='${wrapper_class} relative display-flex'>
			<items-button class='ua-unicode to-left-caret-uc relative' data-tb_open='' title='close this'></items-button>
			<items-ctn class='tb-btns relative display-flex'>${tb_items}</items-ctn>
		</items-wrapper><!-- items-wrapper -->	
	`;
	return tpl; //'editor-one-wrapper', 
} 

export const buttonsGroupTemplate = (...args) =>{
	const [wrapper_class= '',leading_btn='',tb_items='']= args;
	const tpl = `
		<items-wrapper class='${wrapper_class} relative display-flex'>
			${leading_btn}
			<items-ctn class='outer relative display-none'>
				<items-button class='pseudo ua-unicode to-right-caret-uc relative' title='open this'></items-button>
				<items-ctn class='inner relative display-none'>${tb_items}</items-ctn>
			</items-ctn>
		</items-wrapper><!-- items-wrapper -->	
	`;
	return tpl;
}

export const buttonsSnapWrapperTemplate = (...args) =>{
	const [wrapper_class= '',tb_items='',ruler_icon='']= args;
	const tpl = `<items-wrapper class='${wrapper_class} relative display-flex'>
		<items-ctn class='snap-ctn relative display-flex'>${tb_items}</items-ctn>
		<items-ruler class='relative close-headings ua-unicode ${ruler_icon}' title='Swipe for more!'></items-ruler>
	</items-wrapper><!-- items-wrapper -->`;
	return tpl;
}

