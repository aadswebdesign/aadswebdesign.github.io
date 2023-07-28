import * as config from "./../config/index.js"
import { installDefaultCSSForTagName } from "./../core/helpers/index.js"
installDefaultCSSForTagName("trix-toolbar", `\
%t {
    display: flex;
}
%t [data-trix-dialog] {
  display: none;
}
%t [data-trix-dialog][data-trix-active] {
   display: block;
}
%t [data-trix-dialog] [data-trix-validate]:invalid {
  background-color: #ffdddd;
}`)

export default class TrixToolbarElement extends HTMLElement {
  // Element lifecycle
  connectedCallback() {
    if (this.innerHTML === "") {
      this.innerHTML = config.toolbar.getDefaultHTML()
    }
  }
}