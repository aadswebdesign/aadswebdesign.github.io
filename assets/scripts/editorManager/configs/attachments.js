/** created 29-6-2023 */
export const attachmentSelector = "[data-tp-attachment]"
const attachments = {
  preview: {
    presentation: "gallery",
    caption: {
      name: true,
      size: true,
    },
  },
  file: {
    caption: {
      size: true,
    },
  },
}
export default attachments