//moduleEditor/mdl_setup/templates/base_template.js

export const hiddenTemplate = (...args) =>{
	const[test] = args;
	(async ()=>{
		console.log('todo hiddenTpl: ',test);
	})()
} 
export const preTemplate = (...args) =>{
	const[preId] = args;
	const tpl = `<p class='relative'>Source Code:</p>
		<pre id='${preId}' class='relative' style='tab-size: 4;'>editorPreview</pre>`
	return tpl;
} 

export const textAreaTemplate = (...args) =>{
	const[textareaId] = args;
		const tpl = `<textarea id='${textareaId}' class='absolute' name='textarea_editor' rows='5' cols='29'></textarea>`
	return tpl;
} 