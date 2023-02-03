/** svgIcons_G.js */
import * as SE from './../svgElements.js';
export const GitBranch = async (parent = null, title='GitBranch') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'7',cy:'18',r:'2', stroke:'#000', fill:'none'},
		'circle_1':{cx:'7',cy:'6',r:'2', stroke:'#000', fill:'none'},
		'circle_1':{cx:'17',cy:'6',r:'2', stroke:'#000', fill:'none'},
		'line_1' :{x1:'7', y1:'8', x2:'7', y2:'16', stroke:'#000'},
		'path_1':{d:'M9 18h6a2 2 0 0 0 2 -2v-5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'polyline_1':{points:'14 14 17 11 20 14', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'GitBranch', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#GitBranch'),
			await SE.svgGroup('icon-group git-branch', null,null,null,null,'svg#GitBranch'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.git-branch'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.git-branch'),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'g.icon-group.git-branch'),
			await SE.svgCircle(null,null,{...specifics.circle_3},null,null,'g.icon-group.git-branch'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.git-branch'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.git-branch'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.git-branch'),
		];		
	}
	return icon;
};
export const GitCommit = async (parent = null, title='GitCommit') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'3', stroke:'#000', fill:'none'},
		'line_1' :{x1:'12', y1:'3', x2:'12', y2:'9', stroke:'#000'},
		'line_2' :{x1:'12', y1:'15', x2:'12', y2:'21', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'GitCommit', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#GitCommit'),
			await SE.svgGroup('icon-group git-commit', null,null,null,null,'svg#GitCommit'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.git-commit'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.git-commit'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.git-commit'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.git-commit'),
		];		
	}
	return icon;
};
export const GitCompare = async (parent = null, title='GitCompare') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'6',cy:'6',r:'2', stroke:'#000', fill:'none'},
		'circle_2':{cx:'18',cy:'18',r:'2', stroke:'#000', fill:'none'},
		'path_1':{d:'M11 6h5a2 2 0 0 1 2 2v8', stroke:'#000', stroke_width: '1px', fill:'none'},
		'polyline_1':{points:'14 9 11 6 14 3', stroke:'#000', fill:'none'},
		'path_2':{d:'M13 18h-5a2 2 0 0 1 -2 -2v-8', stroke:'#000', stroke_width: '1px', fill:'none'},
		'polyline_2':{points:'10 15 13 18 10 21', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'GitCompare', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#GitCompare'),
			await SE.svgGroup('icon-group git-compare', null,null,null,null,'svg#GitCompare'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.git-compare'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.git-compare'),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'g.icon-group.git-compare'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.git-compare'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.git-compare'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.git-compare'),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'g.icon-group.git-compare'),
		];		
	}
	return icon;
};
export const GitFork = async (parent = null, title='GitFork') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'18',r:'2', stroke:'#000', fill:'none'},
		'circle_2':{cx:'7',cy:'6',r:'2', stroke:'#000', fill:'none'},
		'circle_3':{cx:'17',cy:'6',r:'2', stroke:'#000', fill:'none'},
		'path_1':{d:'', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'12', y1:'12', x2:'12', y2:'16', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'GitFork', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#GitFork'),
			await SE.svgGroup('icon-group git-fork', null,null,null,null,'svg#GitFork'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.git-fork'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.git-fork'),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'g.icon-group.git-fork'),
			await SE.svgCircle(null,null,{...specifics.circle_3},null,null,'g.icon-group.git-fork'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.git-fork'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.git-fork'),
		];		
	}
	return icon;
};
export const GitMerge = async (parent = null, title='GitMerge') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'7',cy:'18',r:'2', stroke:'#000', fill:'none'},
		'circle_2':{cx:'7',cy:'6',r:'2', stroke:'#000', fill:'none'},
		'circle_3':{cx:'17',cy:'12',r:'2', stroke:'#000', fill:'none'},
		'line_1' :{x1:'7', y1:'8', x2:'7', y2:'16', stroke:'#000'},
		'path_1':{d:'M7 8a4 4 0 0 0 4 4h4', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'GitMerge', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#GitMerge'),
			await SE.svgGroup('icon-group git-merge', null,null,null,null,'svg#GitMerge'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.git-merge'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.git-merge'),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'g.icon-group.git-merge'),
			await SE.svgCircle(null,null,{...specifics.circle_3},null,null,'g.icon-group.git-merge'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.git-merge'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.git-merge'),
		];		
	}
	return icon;
};
export const GitPullRequest = async (parent = null, title='GitPullRequest') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'6',cy:'18',r:'2', stroke:'#000', fill:'none'},
		'circle_2':{cx:'6',cy:'6',r:'2', stroke:'#000', fill:'none'},
		'circle_3':{cx:'18',cy:'18',r:'2', stroke:'#000', fill:'none'},
		'line_1' :{x1:'6', y1:'8', x2:'6', y2:'16', stroke:'#000'},
		'path_1':{d:'M11 6h5a2 2 0 0 1 2 2v8', stroke:'#000', stroke_width: '1px', fill:'none'},
		'polyline_1':{points:'14 9 11 6 14 3', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'GitPullRequest', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#GitPullRequest'),
			await SE.svgGroup('icon-group git-pull-request', null,null,null,null,'svg#GitPullRequest'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.git-pull-request'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.git-pull-request'),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'g.icon-group.git-pull-request'),
			await SE.svgCircle(null,null,{...specifics.circle_3},null,null,'g.icon-group.git-pull-request'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.git-pull-request'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.git-pull-request'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.git-pull-request'),
		];		
	}
	return icon;
};
export const GridDots = async (parent = null, title='GridDots') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'5',cy:'5',r:'1', stroke:'#000', fill:'none'},
		'circle_2':{cx:'12',cy:'5',r:'1', stroke:'#000', fill:'none'},
		'circle_3':{cx:'19',cy:'5',r:'1', stroke:'#000', fill:'none'},
		'circle_4':{cx:'5',cy:'12',r:'1', stroke:'#000', fill:'none'},
		'circle_5':{cx:'12',cy:'12',r:'1', stroke:'#000', fill:'none'},
		'circle_6':{cx:'19',cy:'12',r:'1', stroke:'#000', fill:'none'},
		'circle_7':{cx:'5',cy:'19',r:'1', stroke:'#000', fill:'none'},
		'circle_8':{cx:'12',cy:'19',r:'1', stroke:'#000', fill:'none'},
		'circle_9':{cx:'19',cy:'19',r:'1', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'GridDots', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#GridDots'),
			await SE.svgGroup('icon-group grid-dots', null,null,null,null,'svg#GridDots'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.grid-dots'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.grid-dots'),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'g.icon-group.grid-dots'),
			await SE.svgCircle(null,null,{...specifics.circle_3},null,null,'g.icon-group.grid-dots'),
			await SE.svgCircle(null,null,{...specifics.circle_4},null,null,'g.icon-group.grid-dots'),
			await SE.svgCircle(null,null,{...specifics.circle_5},null,null,'g.icon-group.grid-dots'),
			await SE.svgCircle(null,null,{...specifics.circle_6},null,null,'g.icon-group.grid-dots'),
			await SE.svgCircle(null,null,{...specifics.circle_7},null,null,'g.icon-group.grid-dots'),
			await SE.svgCircle(null,null,{...specifics.circle_8},null,null,'g.icon-group.grid-dots'),
			await SE.svgCircle(null,null,{...specifics.circle_9},null,null,'g.icon-group.grid-dots'),
		];		
	}
	return icon;
};
