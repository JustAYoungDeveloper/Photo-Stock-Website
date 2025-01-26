/**
 * @copyright solatpukhtunyar 2025
 * @author solat <solatpukhtunyar123@gmail.com>
 * @creditsTo sadee <codewithsadee@gmail.com>
 */

"use strict";

/**
 * Import
 */

import { urlEncode } from "./urlEncode.js";

/**
 * Update url
 * @param {Object} filterObj Filter Object
 * @param {String} searchType Search type eg. 'videos' or 'photos'
 */

export const updateUrl = (filterObj, searchType) => {
  setTimeout(() => {
    const /** {String} */ root = window.location.origin;
    console.log(filterObj);
    console.log(searchType);
    const /** {String} */ searchQuery = urlEncode(filterObj);

    window.location = `${root}/pages/${searchType}/${searchType}.html?${searchQuery}`;
  }, 500);
};
