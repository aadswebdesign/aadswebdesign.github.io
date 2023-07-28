/* eslint-disable
    no-empty,
*/
import Operation from "./../core/utilities/operation.js"

export default class FileVerificationOperation extends Operation {
  constructor(file) {
    super(...arguments)
    this.file = file
  }

  perform(callback) {
    const reader = new FileReader()

    reader.onerror = () => callback(false)

    reader.onload = () => {
      reader.onerror = null
      try {
        reader.abort()
      } catch (error) {}
      return callback(true, this.file)
    }

    return reader.readAsArrayBuffer(this.file)
  }
}
