/**
 * @copyright solatpukhtunyar 2025
 * @author solat <solatpukhtunyar123@gmail.com>
 * @creditsTo sadee <codewithsadee@gmail.com>
 */

"use strict";

/**
 * Convert URL to Object
 * @param {Object} urlString Url String
 * @returns {Object} Url Object
 */

export const urlDecode = (urlString) => {
  return Object.fromEntries(
    urlString
      .replace(/%23/g, "#")
      .replace(/%20/g, " ")
      .split("&")
      .map((i) => i.split("="))
  );
};
