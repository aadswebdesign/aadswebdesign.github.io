/** created 22-7-2023 */
/**
 *
 * @param {string} tag
 *
 * @example
 *
 * ```js
 * const node = hNode('div', null, 'Hello World')
 * ```
 *
 * @description Returns vnode
 *
 * */
export const hNode = (tag = 'div', props = null, ...children) => ({
  tag,
  props,
  children
})