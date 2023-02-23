/** svgIcons_G.js */
import * as SE from './../svgElements.js';
export const GitBranch = async (parent = null,suffix= null,title='GitBranch') =>{
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
			await SE.svg('svg-icon git-branch absolute', 'GitBranch'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#GitBranch'+suffix),
			await SE.svgGroup('icon-group','GitBranchGroup'+suffix,null,null,null,'#GitBranch'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#GitBranchGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#GitBranchGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'#GitBranchGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_3},null,null,'#GitBranchGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#GitBranchGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#GitBranchGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#GitBranchGroup'+suffix),
		];		
	}
	return icon;
};
export const GitCommit = async (parent = null,suffix= null,title='GitCommit') =>{
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
			await SE.svg('svg-icon git-commit absolute', 'GitCommit'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#GitCommit'+suffix),
			await SE.svgGroup('icon-group','GitCommitGroup'+suffix,null,null,null,'#GitCommit'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#GitCommitGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#GitCommitGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#GitCommitGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#GitCommitGroup'+suffix),
		];		
	}
	return icon;
};
export const GitCompare = async (parent = null,suffix= null,title='GitCompare') =>{
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
			await SE.svg('svg-icon git-compare absolute', 'GitCompare'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#GitCompare'+suffix),
			await SE.svgGroup('icon-group','GitCompareGroup'+suffix,null,null,null,'#GitCompare'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#GitCompareGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#GitCompareGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'#GitCompareGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#GitCompareGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#GitCompareGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#GitCompareGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'#GitCompareGroup'+suffix),
		];		
	}
	return icon;
};
export const GitFork = async (parent = null,suffix= null,title='GitFork') =>{
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
			await SE.svg('svg-icon git-fork absolute', 'GitFork'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#GitFork'+suffix),
			await SE.svgGroup('icon-group','GitForkGroup'+suffix,null,null,null,'#GitFork'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#GitForkGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#GitForkGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'#GitForkGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_3},null,null,'#GitForkGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#GitForkGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#GitForkGroup'+suffix),
		];		
	}
	return icon;
};
export const GitMerge = async (parent = null,suffix= null,title='GitMerge') =>{
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
			await SE.svg('svg-icon git-merge absolute', 'GitMerge'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#GitMerge'+suffix),
			await SE.svgGroup('icon-group','GitMergeGroup'+suffix,null,null,null,'#GitMerge'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#GitMergeGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#GitMergeGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'#GitMergeGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_3},null,null,'#GitMergeGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#GitMergeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#GitMergeGroup'+suffix),
		];		
	}
	return icon;
};
export const GitPullRequest = async (parent = null,suffix= null,title='GitPullRequest') =>{
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
			await SE.svg('svg-icon git-pull-request absolute', 'GitPullRequest'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#GitPullRequest'+suffix),
			await SE.svgGroup('icon-group','GitPullRequestGroup'+suffix,null,null,null,'#GitPullRequest'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#GitPullRequestGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#GitPullRequestGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'#GitPullRequestGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_3},null,null,'#GitPullRequestGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#GitPullRequestGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#GitPullRequestGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#GitPullRequestGroup'+suffix),
		];		
	}
	return icon;
};
export const GridDots = async (parent = null,suffix= null,title='GridDots') =>{
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
			await SE.svg('svg-icon grid-dots absolute', 'GridDots'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#GridDots'+suffix),
			await SE.svgGroup('icon-group','GridDotsGroup'+suffix,null,null,null,'#GridDots'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#GridDotsGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#GridDotsGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'#GridDotsGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_3},null,null,'#GridDotsGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_4},null,null,'#GridDotsGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_5},null,null,'#GridDotsGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_6},null,null,'#GridDotsGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_7},null,null,'#GridDotsGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_8},null,null,'#GridDotsGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_9},null,null,'#GridDotsGroup'+suffix),
		];		
	}
	return icon;
};
