import lang from "./lang.js"
import * as SVG from './svg_icons.js'
export default {
  getDefaultHTML() {
		return `<div class='trix-btn-row display-flex relative'>
			<dl class='trix-btn-group trix-button-group--text-tools display-flex relative' data-trix-button-group='text-tools'>
				<button class='trix-button trix-button--icon trix-button--icon-bold relative' data-trix-attribute='bold' data-trix-key='b' title='${lang.bold}' tabindex='-1' type='button'><i class='tpi-bold absolute'>${SVG.svgBold}</i></button>
				<button class='trix-button trix-button--icon trix-button--icon-italic relative' data-trix-attribute='italic' data-trix-key='i' title='${lang.italic}' tabindex='-1' type='button'><i class='tpi-italic absolute'>${SVG.svgItalic}</i></button>
				<button class='trix-button trix-button--icon trix-button--icon-strike relative' data-trix-attribute='strike' title='${lang.strike}' tabindex='-1' type='button'><i class='tpi-strikethrough absolute'>${SVG.svgStrikethrough}</i></button>
				<button class='trix-button trix-button--icon trix-button--icon-link relative' data-trix-attribute='href' data-trix-action='link' data-trix-key='k' title='${lang.link}' tabindex='-1' type='button'><i class='tpi-link absolute'>${SVG.svgLink}</i></button>
			</dl>
			<dl class='trix-btn-group trix-button-group--block-tools display-flex relative' data-trix-button-group='block-tools'>
				<button class='trix-button trix-button--icon trix-button--icon-heading-1 relative' data-trix-attribute='heading1' title='${lang.heading1}' tabindex='-1' type='button'><i class='tpi-heading-one absolute'>${SVG.svgHeadingOne}</i></button>
				<button class='trix-button trix-button--icon trix-button--icon-quote relative' data-trix-attribute='quote' title='${lang.quote}/todo' tabindex='-1' type='button'><i class='tpi-quote-mark absolute'>${SVG.svghQuoteMark}</i></button>
				<button class='trix-button trix-button--icon trix-button--icon-code relative' data-trix-attribute='code' title='${lang.code}' tabindex='-1' type='button'><i class='tpi-code absolute'>${SVG.svgCode}</i></button>
				<button class='trix-button trix-button--icon trix-button--icon-bullet-list relative' data-trix-attribute='bullet' title='${lang.bullets}' tabindex='-1' type='button'><i class='tpi-list absolute'>${SVG.svgBulletList}</i></button>
				<button class='trix-button trix-button--icon trix-button--icon-number-list" relative' data-trix-attribute='number' title='${lang.numbers}' tabindex='-1' type='button'><i class='tpi-list-numbers absolute'>${SVG.svgListNumbers}</i></button>
				<button class='trix-button trix-button--icon trix-button--icon-decrease-nesting-level relative' data-trix-action='decreaseNestingLevel' title='${lang.outdent}' tabindex='-1' type='button'><i class='tpi-indent-decrease absolute'>${SVG.svgIndentDecrease}</i></button>
				<button class='trix-button trix-button--icon trix-button--icon-increase-nesting-level relative' data-trix-action='increaseNestingLevel' title='${lang.indent}' tabindex='-1' type='button'><i class='tpi-indent-increase absolute'>${SVG.svgIndentIncrease}</i></button>
			</dl>
			<dl class='trix-btn-group trix-button-group--file-tools display-flex relative' data-trix-button-group='file-tools'>
				<button class='trix-button icon-attach relative' data-trix-action='attachFiles' title='${lang.attachFiles}' tabindex='-1' type='button'><i class='tpi-attach-files absolute'>${SVG.svgAttachFiles}</i></button>
			</dl>
			<dl class='trix-btn-group trix-button-group--history-tools display-flex relative' data-trix-button-group='history-tools'>
				<button class='trix-button trix-button--icon trix-button--icon-undo relative' data-trix-action='undo' data-trix-key='z' title='${lang.undo}' tabindex='-1' type='button'><i class='tpi-arrow-back absolute'>${SVG.svgUndo}</i></button>
				<button class='trix-button trix-button--icon trix-button--icon-redo relative' data-trix-action='redo' data-trix-key='shift+z' title='${lang.redo}' tabindex='-1' type='button'><i class='tpi-arrow-forward absolute'>${SVG.svgRedo}</i></button>
			</dl>
		</div><!--trix-btn-row-->
		<div class='trix-dialogs display-flex relative' data-trix-dialogs='href' data-trix-dialog-attribute='href'>
			<dl class='trix-dialog trix-dialog--link display-flex relative'>
				<dd class='relative'><input class='trix-input trix-input--dialog' name='href' type='url' placeholder='${lang.urlPlaceholder}'  aria-label='${lang.url}' required data-trix-input/></dd>
				<dd class='relative'><input class='trix-button trix-input--dialog' type='button' value='${lang.link}' data-trix-method='setAttribute'/></dd>
				<dd class='relative'><input class='trix-button trix-input--dialog' type='button' value='${lang.unlink}' data-trix-method='removeAttribute'/></dd>
			</dl>
		</div><!--trix-dialogs-->`
  },
}
