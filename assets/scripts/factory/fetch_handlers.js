/** localhost assets/scripts/factory/fetch_handlers.js */
//todo testing
export class FetchHandler {
    fetchData(resource, options) {
        return fetch(resource, options);
    }
}

export class FetchStatusHandler {
    decoratee;
    constructor(decoratee) {
        this.decoratee = decoratee;
    }
    async fetchData(resource, options) {
        const response = await this.decoratee.fetchData(resource, options);
        if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
        }
        return response;
    }
}

/** todo testing
 * getButtonHandler
 * important note, this is raw and needed safety measurements are not implemented yet!
 */
export async function getButtonHandler(args){
	const handlerObjects = new Map([['objects',args]]);
	const argObjects = handlerObjects.get('objects');
	const {fetch_btn,cancel_btn ,response_cb,fetch_options} = argObjects;
	const fetch_setup = new FetchStatusHandler(
		new FetchHandler()
	);
	const controller = new AbortController();	
	if(fetch_btn !== null){
		fetch_btn.addEventListener('click', async (event)=>{
			event.preventDefault();
			const url = fetch_btn;
			if(url){
				(async ()=>{
					const response = await fetch_setup.fetchData(`${url}`,{signal: controller.signal,...fetch_options});
					await response_cb(response);
				})();
			}
		});
	}	
	if(cancel_btn !== null){
		cancel_btn.addEventListener('click', async (event)=>{
			controller.abort();
			console.log("Canceled fetch");
		});
	}
}

/**
 * getDataHandler
 * important note, this is raw and needed safety measurements are not implemented yet!
 */
export async function getDataHandler(args){
	const handlerObjects = new Map([['objects',args]]);
	const argObjects = handlerObjects.get('objects');
	const {el_url ,response_cb,fetch_options} = argObjects;
	const fetch_setup = new FetchStatusHandler(
		new FetchHandler()
	);
	if(el_url !== null){
		const elUrl = el_url;
		const get_data = async ()=>{
			const response = await fetch_setup.fetchData(`${elUrl}`,fetch_options);
			await response_cb(response);
		};
		return await get_data();
	}
}

export async function getHyperlinkHandler(args){
	const handlerObjects = new Map([['objects',args]]);
	const argObjects = handlerObjects.get('objects');
	const {el_url ,response_cb,fetch_options} = argObjects;
	const fetch_setup = new FetchStatusHandler(
		new FetchHandler()
	); 
	if(el_url !== null){
		const elUrl = el_url;
		elUrl.addEventListener('click', async (event)=>{
			event.preventDefault();
			const url = elUrl.href;
			if(url){
				(async ()=>{
					const response = await fetch_setup.fetchData(`${url}`,fetch_options);
					await response_cb(response);
				})();
			}
		});
		
	}
}

//not tested
/*
export async function postHandler(...args){
	const[form_id=null,target_url=null,options={}] = args;
	const fetch_setup = new FetchStatusHandler(
		new FetchHandler()
	);
	//todo adjust this as needed
	const post_options = {
		method: "POST",
		...options
	};
	if((form_id !== null) && (target_url!==null)){
		form_id.addEventListener('submit',async (event)=>{
			const response = await fetch_setup.fetchData(`${url}`,post_options);
			event.preventDefault();			
		});
	}
}

export async function postJSONHandler(...args){
	const[form_id=null,target_url=null,options={},json_data = {}] = args;
	//const headers = {};
	const json_options = {
		body: JSON.stringify(json_data),
		...options
	};
	await postHandler(form_id,target_url,options);
}
*/
