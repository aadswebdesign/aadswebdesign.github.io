import lang from "./lang.js"
import * as SVG from './svg_icons.js'




export default {
	getDefaultHTML() {
		return `<div class='tp-btn-row display-flex relative'>
			<dl class='tp-btn-group tp-button-group--text-tools display-flex relative' data-tp-button-group='text-tools'>
				<button class='tp-button tp-button--icon tp-button--icon-bold relative' data-tp-attribute='bold' data-tp-key='b' title='${lang.bold}' tabindex='-1' type='button'><i class='tpi-bold absolute'>${SVG.svgBold}</i></button>
				<button class='tp-button tp-button--icon tp-button--icon-italic relative' data-tp-attribute='italic' data-tp-key='i' title='${lang.italic}' tabindex='-1' type='button'><i class='tpi-italic absolute'>${SVG.svgItalic}</i></button>
				<button class='tp-button tp-button--icon tp-button--icon-strike relative' data-tp-attribute='strike' title='${lang.strike}' tabindex='-1' type='button'><i class='tpi-strikethrough absolute'>${SVG.svgStrikethrough}</i></button>
				<button class='tp-button tp-button--icon tp-button--icon-link relative' data-tp-attribute='href' data-tp-action='link' data-tp-key='k' title='${lang.link}' tabindex='-1' type='button'><i class='tpi-link absolute'>${SVG.svgLink}</i></button>
			</dl>
			<dl class='tp-btn-group tp-button-group--block-tools display-flex relative' data-tp-button-group='block-tools'>
				<button class='tp-button tp-button--icon tp-button--icon-heading-1 relative' data-tp-attribute='heading1' title='${lang.heading1}' tabindex='-1' type='button'><i class='tpi-heading-one absolute'>${SVG.svgHeadingOne}</i></button>
				<button class='tp-button tp-button--icon tp-button--icon-quote relative' data-tp-attribute='quote' title='${lang.quote}/todo' tabindex='-1' type='button'><i class='tpi-quote-mark absolute'>${SVG.svghQuoteMark}</i></button>
				<button class='tp-button tp-button--icon tp-button--icon-code relative' data-tp-attribute='code' title='${lang.code}' tabindex='-1' type='button'><i class='tpi-code absolute'>${SVG.svgCode}</i></button>
				<button class='tp-button tp-button--icon tp-button--icon-bullet-list relative' data-tp-attribute='bullet' title='${lang.bullets}' tabindex='-1' type='button'><i class='tpi-list absolute'>${SVG.svgBulletList}</i></button>
				<button class='tp-button tp-button--icon tp-button--icon-number-list" relative' data-tp-attribute='number' title='${lang.numbers}' tabindex='-1' type='button'><i class='tpi-list-numbers absolute'>${SVG.svgListNumbers}</i></button>
				<button class='tp-button tp-button--icon tp-button--icon-decrease-nesting-level relative' data-tp-action='decreaseNestingLevel' title='${lang.outdent}' tabindex='-1' type='button'><i class='tpi-indent-decrease absolute'>${SVG.svgIndentDecrease}</i></button>
				<button class='tp-button tp-button--icon tp-button--icon-increase-nesting-level relative' data-tp-action='increaseNestingLevel' title='${lang.indent}' tabindex='-1' type='button'><i class='tpi-indent-increase absolute'>${SVG.svgIndentIncrease}</i></button>
			</dl>
			<dl class='tp-btn-group tp-button-group--file-tools display-flex relative' data-tp-button-group='file-tools'>
				<button class='tp-button icon-attach relative' data-tp-action='attachFiles' title='${lang.attachFiles}' tabindex='-1' type='button'><i class='tpi-attach-files absolute'>${SVG.svgAttachFiles}</i></button>
			</dl>
			<dl class='tp-btn-group tp-button-group--history-tools display-flex relative' data-tp-button-group='history-tools'>
				<button class='tp-button tp-button--icon tp-button--icon-undo relative' data-tp-action='undo' data-tp-key='z' title='${lang.undo}' tabindex='-1' type='button'><i class='tpi-arrow-back absolute'>${SVG.svgUndo}</i></button>
				<button class='tp-button tp-button--icon tp-button--icon-redo relative' data-tp-action='redo' data-p-key='shift+z' title='${lang.redo}' tabindex='-1' type='button'><i class='tpi-arrow-forward absolute'>${SVG.svgRedo}</i></button>
			</dl>
		</div><!--tp-btn-row-->
		<div class='tp-dialogs display-flex relative' data-tp-dialogs='href' data-tp-dialog-attribute='href'>
			<dl class='tp-dialog tp-dialog--link display-flex relative'>
				<input class='tp-input tp-input--dialog' name='href' type='url' placeholder='${lang.urlPlaceholder}'  aria-label='${lang.url}' required data-tp-input/>
				<input class='tp-button tp-input--dialog' type='button' value='${lang.link}' data-tp-method='setAttribute'/>
				<input class='tp-button tp-input--dialog' type='button' value='${lang.unlink}' data-tp-method='removeAttribute'/>
			</dl>
		</div><!--tp-dialogs-->`
	},
}

/**
 * todo ,s 
 * remove html details block from div open tag and place it after closing tag
 */