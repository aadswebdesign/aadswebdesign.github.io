/** created 22-6-2023 */
import Filter from "./filter.js"
export const attachmentGalleryFilter = function(snapshot) {
  const filter = new Filter(snapshot)
  filter.perform()
  return filter.getSnapshot()
}