/**localhost  modules/templates/tpl_partials.js */

export const artOpen = (...args)=>{
	const [tpl_class,tpl_id] = args;
	let class_att = '';
	let id_att = '';
	if(tpl_class !== undefined){
		class_att += `class='${tpl_class} display-flex relative' `;
	}else{
		class_att += `class='display-flex relative' `;
	}
	if(tpl_id !== undefined){
		id_att += `id= '${tpl_id}'`;
	}
	const tpl = `<article ${id_att} ${class_att}>`;
	return tpl;	
};
	
export const artEnd = ()=>{
	const tpl = `</article><!-- begins at artOpen-->`;
	return tpl;
};

export const artFooterOpen = (...args)=>{
	const [tpl_class,tpl_id] = args;
	let class_att = '';
	let id_att = '';
	if(tpl_class !== undefined){
		class_att += `class='${tpl_class}' `;
	}
	if(tpl_id !== undefined){
		id_att += `id='${tpl_id}'`;
	}
	const tpl = `<article-footer ${id_att} ${class_att}>`;
	return tpl;
};
export const artFooterEnd = ()=>{
	const tpl = `</article-footer><!-- begins at artFooterOpen-->`;
	return tpl;
};

export const artHeaderOpen = (...args)=>{
	const [tpl_class,tpl_id] = args;
	let class_att = '';
	let id_att = '';
	if(tpl_class !== undefined){
		class_att += `class='${tpl_class}' `;
	}
	if(tpl_id !== undefined){
		id_att += `id='${tpl_id}'`;
	}
	const tpl = `<article-header ${id_att} ${class_att}>`;
	return tpl;
};
export const artHeaderEnd = ()=>{
	const tpl = `</article-header><!-- begins at artHeaderOpen-->`;
	return tpl;
};

export const artMainOpen = (...args)=>{
	const [tpl_class,tpl_id] = args;
	let class_att = '';
	let id_att = '';
	if(tpl_class !== undefined){
		class_att += `class='${tpl_class}' `;
	}
	if(tpl_id !== undefined){
		id_att += `id='${tpl_id}'`;
	}
	const tpl = `<article-main ${id_att} ${class_att}>`;
	return tpl;
};
export const artMainEnd = ()=>{
	const tpl = `</article-main><!-- begins at artMainOpen-->`;
	return tpl;
};

export const detailsOpen = (...args)=>{
	const [tpl_class,tpl_id,tpl_name, tpl_open = false] = args;
	let class_att = '';
	let id_att = '';
	let name_att = '';
	let open_att = '';
	if(tpl_class !== undefined){
		class_att += `class='${tpl_class}' `;
	}
	if(tpl_id !== undefined){
		id_att += `id='${tpl_id}'`;
	}
	if(tpl_name !== undefined){
		name_att += `name='${tpl_name}'`;
	}
	if(tpl_open === true){
		open_att += `open=${tpl_open}`;
	}
	const tpl = `<details ${class_att}  ${id_att} ${name_att}  ${open_att}><!-- begins at detailsOpen-->`;
	return tpl;
};


export const detailsEnd = ()=>{
	const tpl = `</details>`;
	return tpl;
};

export const detailsContentOpen = (...args)=>{
	const [tpl_class] = args;
	let class_att = '';
	if(tpl_class !== undefined){
		class_att += `class='${tpl_class}' `;
	}
	const tpl = `<details-content ${class_att}>`;
	return tpl;
}
export const detailsContentEnd = (...args)=>{
	const tpl = `</details-content>`;
	return tpl;
}

export const dCFooterOpen = (...args)=>{
	const [tpl_class] = args;
	let class_att = '';
	if(tpl_class !== undefined){
		class_att += `class='${tpl_class}' `;
	}
	const tpl = `<dc-footer ${class_att}>`;
	return tpl;
};
export const dCFooterEnd = ()=>{
	const tpl = `</dc-footer>`;
	return tpl;
};


export const dCHeaderOpen = (...args)=>{
	const [tpl_class] = args;
	let class_att = '';
	if(tpl_class !== undefined){
		class_att += `class='${tpl_class}' `;
	}
	const tpl = `<dc-header ${class_att}>`;
	return tpl;
};
export const dCHeaderEnd = ()=>{
	const tpl = `</dc-header>`;
	return tpl;
};

export const dCMainOpen = (...args)=>{
	const [tpl_class] = args;
	let class_att = '';
	if(tpl_class !== undefined){
		class_att += `class='${tpl_class}' `;
	}
	const tpl = `<dc-main ${class_att}>`;
	return tpl;
};
export const dCMainEnd = ()=>{
	const tpl = `</dc-main>`;
	return tpl;
};


export const summary = (...args) =>{
	const [tpl_class,tpl_title,tpl_content] = args;
	let class_att = '';
	let title_att = '';
	let content = '';
	if(tpl_class !== undefined){
		class_att += `class='${tpl_class}' `;
	}
	if(tpl_title !== undefined){
		title_att += `title='${tpl_title}'`;
	}
	if(tpl_content !== undefined){
		content += `${tpl_content}`;
	}
	
	const tpl = `<summary ${class_att} ${title_att}>${content}</summary>`;
	return tpl;
};




export const headingTwo = (...args)=>{
	const [tpl_class,tpl_content] = args;
	let class_att = '';
	if(tpl_class !== undefined){
		class_att += `class='${tpl_class}' `;
	}
	const tpl = `<h2 ${class_att}>${tpl_content}</h2>`;
	return tpl;
};

export const headingThree = (...args)=>{
	const [tpl_class,tpl_content] = args;
	let class_att = '';
	if(tpl_class !== undefined){
		class_att += `class='${tpl_class}' `;
	}
	const tpl = `<h3 ${class_att}>${tpl_content}</h3>`;
	return tpl;
};
export const headingFour = (...args)=>{
	const [tpl_class,tpl_content] = args;
	let class_att = '';
	if(tpl_class !== undefined){
		class_att += `class='${tpl_class}' `;
	}
	const tpl = `<h4 ${class_att}>${tpl_content}</h4>`;
	return tpl;
};
export const headingFive = (...args)=>{
	const [tpl_class,tpl_content] = args;
	let class_att = '';
	if(tpl_class !== undefined){
		class_att += `class='${tpl_class}' `;
	}
	const tpl = `<h5 ${class_att}>${tpl_content}</h5>`;
	return tpl;
};
export const headingSix = (...args)=>{
	const [tpl_class,tpl_content] = args;
	let class_att = '';
	if(tpl_class !== undefined){
		class_att += `class='${tpl_class}' `;
	}
	const tpl = `<h6 ${class_att}>${tpl_content}</h6>`;
	return tpl;
};
