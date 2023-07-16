## aadswebdesign.github.io
A place where I try and prepare things out for my other project!

(Those who come by here and want use something of it? Go ahead and do so!
Just this. Whatever you use, it's at your own risc and I never take any accountability for it!)

**structure of this website**

It's built with vanilla javascript and css, it's modular, has realtime navigation and not any frameworks are used at all.



**What I have here sofar:**

at **#:** (landing page), related js files **landing_template.js, functions.js, handlers.js**

at **#home:** nothing, related js files **template_1.js,functions.js**

at **#blog:** infinitive scroll, related js files **template_2.js, functions.js, handlers.js**

at **#about:** toggle_class, related js files **template_3.js, functions.js**

at **#projects:** a details/summary setup, related js files **svgIcons_C.js, svgIcons_L.js, template_4.js, functions.js, handlers.js**

at **#editor:** here I'm trying to create an editor, related js files **template_5.js, functions.js, tp_editor_element.js**

about **#editor**

Here I had an issue with the contenteditable attribute not working in chrome/ -canary and after a long search I found out that it was because of a rule
within my resets.css that prevented contenteditable to work in chrome/ -canary.
<code>
	/* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property - The "symbol *" part is to solve Firefox SVG sprite bug*/
	*:where(:not(div,iframe, canvas, img, svg, video):not(svg *, symbol *)) {
		all: unset;
		display: revert;    
	}
</code>
Here I added the **div** node to the 'not' exseption list.
