/**
 * @copyright solatpukhtunyar 2025
 * @author solat <solatpukhtunyar123@gmail.com>
 * @creditsTo sadee <codewithsadee@gmail.com>
 */

"use strict";

/**
 * Convert Object to URL
 * @param {Object} urlObj url Object
 * @returns url String
 */

export const urlEncode = (urlObj) => {
  return Object.entries(urlObj)
    .join("&")
    .replace(/,/g, "=")
    .replace(/#/g, "%23");
};
