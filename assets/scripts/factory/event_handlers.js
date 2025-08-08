/** localhost assets/scripts/factory/event_handlers.js */
import * as FT from './functions.js';

export function setDetailsHandler(...args){
	const [elem,cb_open,cb_close] = args ?? null;
	if(null !== elem){
		elem.addEventListener('toggle', (event) => {
			if(elem.open){
				cb_open();
			}else{
				cb_close();
			}
		});
	}
}

//todo review
export async function setDialogHandler(...args){
	const [dialog_el, action_btn,action_cb, cancel_btn,return_val, close_val,logs = false] = args ?? null;
	if(dialog_el !== null){
		dialog_el.returnValue = return_val ?? null;
		const openCheck = (dialog_el) =>{
			if(logs === true){
				if(dialog_el.open){
					console.log('Dialog open');
				}else{
					console.log('Dialog closed');
				}
			}
		};
		if(action_btn !== null){
			action_btn.addEventListener('click', (e)=>{
				dialog_el.showModal();
				openCheck(dialog_el);
				action_cb;
				e.preventDefault();
			});					
		}
		if(cancel_btn !== null){
			cancel_btn.addEventListener('click', (e)=>{
				if(close_val !== null){
					dialog_el.close(close_val);
				}
				openCheck(dialog_el);
				e.preventDefault();
			});
		}
	}
	if(logs === true){
		console.table({'dialogHandler args':{
			'dialog': dialog_el,
			'action_btn' : action_btn,
			'action_cb' : action_cb,
			'cancel_btn' : cancel_btn,
			'cancel_cb' : cancel_cb,
			'return_val': return_val,
			'close_val': close_val
		}});
	}
}

export function setRoutingHandler(args,logs = false){
	const handlerObjects = new Map([['objects',args]]);
	const argObjects = handlerObjects.get('objects');
	const {endpoint_id,endpoint_cb, cb_args} = argObjects; //,endpoint_tpl
	function setCallback(...args){
		const [callback, params] = args;
		if(callback){
			return callback(params);
		}
	}
	if(endpoint_id){
		const endpoint_href = endpoint_id.href;
		if(endpoint_href){
			endpoint_id.addEventListener('click', async (event)=>{
				history.pushState(null, "", endpoint_href);
				event.preventDefault();
				await new setCallback(endpoint_cb, cb_args);
			});	
			if(logs === true){
				console.table({'endpoint_data':{'endpoint_id: ':endpoint_id,'endpoint_cb: ':endpoint_cb}});					
			}
		}
	}
}



