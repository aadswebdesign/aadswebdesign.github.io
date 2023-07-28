

import * as config from "./config/index.js"
import * as core from "./core/index.js"
import * as models from "./models/index.js"
import * as views from "./views/index.js"
import * as controllers from "./controllers/index.js"
import * as observers from "./observers/index.js"
import * as operations from "./operations/index.js"
import * as elements from "./elements/index.js"
import * as filters from "./filters/index.js"

const Trix = {
  VERSION: "2.0.5",
  config,
  core,
  models,
  views,
  controllers,
  observers,
  operations,
  elements,
  filters
}

// Expose models under the Trix constant for compatibility with v1
Object.assign(Trix, models)

function start() {
  if (!customElements.get("trix-toolbar")) {
    customElements.define("trix-toolbar", elements.TrixToolbarElement)
  }

  if (!customElements.get("trix-editor")) {
    customElements.define("trix-editor", elements.TrixEditorElement)
  }
}

window.Trix = Trix
setTimeout(start, 0)

export default Trix
