/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 检验手机号
 * @param {string} str
 * @returns {Boolean}
 */
export function validMobile(str) {
  return (/^1[3-9]{1}\d{9}$/.test(str));
}
