/** localhost assets/scripts/factory/generals.js */
export const notWanted = async ()=>{
	(async ()=>{
		//todo, testing
		const regex = "/\/[a-zA-Z0-9-._~:/?#\[\]@!$&'()*+,;=%]*)?/g";
		let expression;
		if(expression !== undefined){
			const not_wanted = 'javascript:' + expression.match(regex);
			if(window.location === not_wanted) return;
			console.log('not_wanted: ',not_wanted);
		}
	})();
};