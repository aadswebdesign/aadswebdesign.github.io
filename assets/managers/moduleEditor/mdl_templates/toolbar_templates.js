//localhost managers/moduleEditor/mdl_templates/toolbar_templates.js

export const detailsTemplate = (...args) =>{
	const [details_id,details_class,summ_class,summ_title, add_items] = args;
	const tpl = `
		<details id='${details_id}' class='${details_class} relative' open>
			<summary class='${summ_class} relative' title='${summ_title}'></summary>
			<details-content class='absolute'>
				${add_items}
			</details-content>
		</details>
	`;
	return tpl;
}
export const buttonsGroupTemplate = (...args) =>{
	const [wrapper_class= '',leading_btn='',tb_items='']= args;
	const tpl = `
		<items-wrapper class='${wrapper_class}-wrapper relative display-flex'>
			${leading_btn}
			<items-button class='pseudo to-right-caret relative' title='open this'></items-button>
			<items-ctn class='relative display-none'>${tb_items}</items-ctn>
		</items-wrapper><!-- items-wrapper -->	
	`;
	return tpl;
}

export const itemsWrapperTemplate = (...args) =>{
	const [wrapper_class= '',tb_items='']= args;
	const tpl = `
		<items-wrapper class='${wrapper_class}-wrapper relative display-flex'>
			<items-button class='pseudo to-left-caret relative' data-tb_open='' title='close this'></items-button>
			<items-ctn class='relative display-flex'>${tb_items}</items-ctn>
		</items-wrapper><!-- items-wrapper -->	
	`;
	return tpl; //'editor-one-wrapper', 
} 
