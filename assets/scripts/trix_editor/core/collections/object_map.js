import BasicObject from "./../basic_object.js"

export default class ObjectMap extends BasicObject {
  constructor(objects = []) {
    super(...arguments)
    this.objects = {}

    Array.from(objects).forEach((object) => {
      const hash = JSON.stringify(object)
      if (this.objects[hash] == null) {
        this.objects[hash] = object
      }
    })
  }

  find(object) {
    const hash = JSON.stringify(object)
    return this.objects[hash]
  }
}
