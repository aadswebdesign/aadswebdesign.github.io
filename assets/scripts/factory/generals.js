/**Admin assets/scrips/factory/generals.js*/
import * as FT from './functions.js';
import * as HE from './../htmlManager/htmlElements.js';
//removed endPropagation
export const domManipulator = async (elem)=>{
	const {body,vvp} = elem;
	(async ()=>{
		const dom_manipulator = ()=>{
			const vvp_height = vvp.height;
			const vvp_width = vvp.width;
			return (log = false)=>{
				body.style.height = `${vvp_height}px`;
				body.style.width = `${vvp_width}px`;
				if(true === log){
					console.table({'body:':{body}});
					//console.log('main_elem',main_elem);
				}
			};
		};
		dom_manipulator()();
		vvp.addEventListener('resize',()=>{
			dom_manipulator()();
		});	
		
		
		
		
	})();
	
}

export const userAgentSniffer = async (log = false)=>{
	const browser = await FT.elQuery('body');
	const regexps = {
            'chrome': {'name':[ /Chrome/ ],'version':[ /Chrome\/(\S+)/ ]}, 
			'firefox': {'name':[ /Firefox/ ],'version':[ /Firefox\/(\S+)/ ]}, 
			'opera': {'name':[ /Opera\.*?Version/ ],'version':[ /\.*?Version\/(\S+)/ ]}, 
			'opera_old': {'name':[ /Opera/ ],'version':[ /Opera\/(\S+)/ ]},
			'safari': {'name':[ /Version\/(\S+).*?Safari/ ],'version':[ /Version\/(\S+)/ ]},
            //added, not tested
			'edge': {'name':[ /Edge/ ],'version':[ /Edge\/(\S+)/ ]}, 
			
        };
	const {chrome,firefox,opera,opera_old,safari,edge} = regexps;
	if(browser){
		const user_agent = navigator.userAgent;
		//user_agent.match();
		browser.setAttribute('data-platform', navigator.platform );
		if(user_agent.match(chrome.name[0])){
			browser.setAttribute('data-browsername', user_agent.match(chrome.name[0]));
		}
		if(user_agent.match(chrome.version[0])){
			browser.setAttribute('data-browserversion', user_agent.match(chrome.version[0]));
		}
		if(user_agent.match(firefox.name[0])){
			browser.setAttribute('data-browsername', user_agent.match(firefox.name[0]));
		}
		if(user_agent.match(firefox.version[0])){
			browser.setAttribute('data-browserversion', user_agent.match(firefox.version[0]));
		}
		if(user_agent.match(opera.name[0])){
			browser.setAttribute('data-browsername', user_agent.match(opera.name[0]));
		}
		if(user_agent.match(opera.version[0])){
			browser.setAttribute('data-browserversion', user_agent.match(opera.version[0]));
		}
		if(user_agent.match(opera_old.name[0])){
			browser.setAttribute('data-browsername', user_agent.match(opera_old.name[0]));
		}
		if(user_agent.match(opera_old.version[0])){
			browser.setAttribute('data-browserversion', user_agent.match(opera_old.version[0]));
		}
		if(user_agent.match(safari.name[0])){
			browser.setAttribute('data-browsername', user_agent.match(safari.name[0]));
		}
		if(user_agent.match(safari.version[0])){
			browser.setAttribute('data-browserversion', user_agent.match(safari.version[0]));
		}
		if(user_agent.match(edge.version[0])){
			browser.setAttribute('data-browserversion', user_agent.match(edge.version[0]));
		}
		
		
		
		
		browser.className += ((!!('ontouchstart' in window) || !!('onmsgesturechange' in window))?' touch':'');
	}
	if(true === log){
		console.log('browser is:',browser);
		console.table({
			'chrome': chrome, 
			'firefox':firefox,
			'opera':opera,
			'opera_old':opera_old,
			'safari':safari,
			'edge':edge,
		});
	}
	return await browser;
};
export const userAgentString = async (_display = false)=>{
	const body = await FT.elQuery('body');
	const browserplatform = body.getAttribute('data-platform'); 
	const browsername = body.getAttribute('data-browsername');
	const browserversion = body.getAttribute('data-browserversion'); 
	const _string = `<ul class='relative'>
			<li class='relative'>platform: ${browserplatform}</li>
			<li class='relative'>browsername: ${browsername}</li>
			<li class='relative'>browserversion: ${browserversion}</li>
		</ul>`;
		let display;
		if(true === _display){
			display = 'display-block';
		}else{
			display = 'display-none';
		}
		await HE.divEl({el_class:`browser-info ${display} fixed`,el_id:'browserInfo',el_content:_string,el_tpl:true,el_parent:'body'});
};
