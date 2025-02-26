/**Primary htmlManager/htmlElements.js */
import {createHTML} from './htmlCreator.js';
//{el,el_class = null,el_id = null,el_atts = null,el_content = null,
//el_tpl = false,el_parent,el_replace = null,logs=false}
//todo more elements later
//export const El = async (other_atts,elems) =>{
	//await createHTML({el:'',el_atts:{...other_atts},...elems}); 
//};
/*--A--*/
export const aEl = async (attr_href,other_atts,elems) =>{
	await createHTML({el:'a',el_atts:{href:attr_href,...other_atts},...elems});
};
export const abbrEl = async (elems) =>{
	await createHTML({el:'abbr',...elems}); 
};
export const addressEl = async (elems) =>{
	await createHTML({el:'address',...elems}); 
};
export const areaEl = async (elems) =>{
	await createHTML({el:'area',...elems}); 
};
export const articleEl = async (elems) =>{
	await createHTML({el:'article',...elems}); 
};
export const asideEl = async (elems) =>{
	await createHTML({el:'aside',...elems}); 
};
export const audioEl = async (other_atts,elems) =>{
	await createHTML({el:'audio',el_atts:{...other_atts},...elems}); 
};
/*--B--*/
export const bdiEl = async (elems) =>{
	await createHTML({el:'bdi',...elems}); 
};
export const bdoEl = async (elems) =>{
	await createHTML({el:'bdo',...elems}); 
};
export const blockquoteEl = async (elems) =>{
	await createHTML({el:'blockquote',...elems}); 
};
export const brEl = async (parent_el) =>{
	await createHTML({el:'br',el_parent:parent_el}); 
};
/*--C--*/
export const citeEl = async (elems) =>{
	await createHTML({el:'cite',...elems}); 
};
export const codeEl = async (elems) =>{
	await createHTML({el:'code',...elems}); 
};
/*--D--*/
export const dataEl = async (elems) =>{
	await createHTML({el:'data',...elems}); 
};
export const ddEl = async (elems) =>{
	await createHTML({el:'dd',...elems}); 
};
export const detailsEl = async (elems) =>{
	await createHTML({el:'details',...elems}); 
};
export const divEl = async (elems) =>{
	await createHTML({el:'div',...elems}); 
};
export const dfnEl = async (elems) =>{
	await createHTML({el:'dfn',...elems}); 
};
export const dlEl = async (elems) =>{
	await createHTML({el:'dl',...elems}); 
};
export const dtEl = async (elems) =>{
	await createHTML({el:'dt',...elems}); 
};
/*--E--*/
export const emEl = async (elems) =>{
	await createHTML({el:'em',...elems}); 
};
export const embedEl = async (elems) =>{
	await createHTML({el:'embed',...elems}); 
};
/*--F--*/
export const figcaptionEl = async (elems) =>{
	await createHTML({el:'figcaption',...elems}); 
};
export const figureEl = async (elems) =>{
	await createHTML({el:'figure',...elems}); 
};
export const footerEl = async (elems) =>{
	await createHTML({el:'footer',...elems}); 
};
/*--G--*/
/*--H--*/
export const headerEl = async (elems) =>{
	await createHTML({el:'header',...elems}); 
};
export const h1El = async (elems) =>{
	await createHTML({el:'h1',...elems}); 
};
export const h2El = async (elems) =>{
	await createHTML({el:'h2',...elems}); 
};
export const h3El = async (elems) =>{
	await createHTML({el:'h3',...elems}); 
};
export const h4El = async (elems) =>{
	await createHTML({el:'h4',...elems}); 
};
export const h5El = async (elems) =>{
	await createHTML({el:'h5',...elems}); 
};
export const h6El = async (elems) =>{
	await createHTML({el:'h6',...elems}); 
};
export const hgroupEl = async (elems) =>{
	await createHTML({el:'hgroup',...elems}); 
};
export const hrEl = async (elems) =>{
	await createHTML({el:'hr',...elems}); 
};
/*--I--*/
export const iEl = async (elems) =>{
	await createHTML({el:'i',...elems}); 
};
export const iframeEl = async (elems) =>{
	await createHTML({el:'iframe',...elems}); 
};
export const imgEl = async (attr_src,atr_alt,other_atts,elems) =>{
	await createHTML({el:'img',el_atts:{src:attr_src,alt:atr_alt,...other_atts},...elems}); 
};
/*--J--*/
/*--K--*/
export const liEl = async (elems) =>{
	await createHTML({el:'li',...elems}); 
};
/*--L--*/
/*--M--*/
export const mainEl = async (elems) =>{
	await createHTML({el:'main',...elems}); 
};
export const mapEl = async (other_atts,elems) =>{
	await createHTML({el:'map',el_atts:{...other_atts},...elems}); 
};
export const markEl = async (elems) =>{
	await createHTML({el:'mark',...elems}); 
};
export const menuEl = async (elems) =>{
	await createHTML({el:'menu',...elems}); 
};
/*--N--*/
export const navEl = async (elems) =>{
	await createHTML({el:'nav',...elems}); 
};
/*--O--*/
export const objectEl = async (elems) =>{
	await createHTML({el:'object',...elems}); 
};
export const olEl = async (elems) =>{
	await createHTML({el:'ol',...elems}); 
};
/*--P--*/
export const pEl = async (elems) =>{
	await createHTML({el:'p',...elems}); 
};
export const pictureEl = async (elems) =>{
	await createHTML({el:'picture',...elems}); 
};
export const portalEl = async (elems) =>{
	await createHTML({el:'portal',...elems}); 
};
export const preEl = async (elems) =>{
	await createHTML({el:'pre',...elems}); 
};
/*--Q--*/
export const qEl = async (elems) =>{
	await createHTML({el:'q',...elems}); 
};
/*--R--*/
/*--S--*/
export const sEl = async (elems) =>{
	await createHTML({el:'s',...elems}); 
};
export const sampEl = async (elems) =>{
	await createHTML({el:'samp',...elems}); 
};
export const sectionEl = async (elems) =>{
	await createHTML({el:'section',...elems}); 
};
export const searchEl = async (elems) =>{
	await createHTML({el:'search',...elems}); 
};
export const smallEl = async (elems) =>{
	await createHTML({el:'small',...elems}); 
};
export const sourceEl = async (attr_src,attr_type,other_atts,elems) =>{
	await createHTML({el:'source',el_atts:{src:attr_src,type:attr_type,...other_atts},...elems}); 
};
export const spanEl = async (elems) =>{
	await createHTML({el:'span',...elems}); 
};
export const strongEl = async (elems) =>{
	await createHTML({el:'strong',...elems}); 
};
export const subEl = async (elems) =>{
	await createHTML({el:'sub',...elems}); 
};
export const summaryEl = async (elems) =>{
	await createHTML({el:'summary',...elems}); 
};
export const supEl = async (elems) =>{
	await createHTML({el:'sup',...elems}); 
};
/*--T--*/
export const timeEl = async (elems) =>{
	await createHTML({el:'time',...elems}); 
};
export const trackEl = async (other_atts,elems) =>{
	await createHTML({el:'track',el_atts:{...other_atts},...elems}); 
};
/*--U--*/
export const uEl = async (elems) =>{
	await createHTML({el:'u',...elems}); 
};
export const ulEl = async (elems) =>{
	await createHTML({el:'ul',...elems}); 
};
/*--V--*/
export const varEl = async (elems) =>{
	await createHTML({el:'var',...elems}); 
};
export const videoEl = async (other_atts,elems) =>{
	await createHTML({el:'video',el_atts:{...other_atts},...elems}); 
};
/*--W--*/
/*--X--*/
/*--Y--*/
/*--Z--*/













