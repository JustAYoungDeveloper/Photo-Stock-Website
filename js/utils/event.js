/**
 * @copyright solatpukhtunyar 2025
 * @author solat <solatpukhtunyar123@gmail.com>
 * @creditsTo sadee <codewithsadee@gmail.com>
 */

"use strict";

/**
 * Add event on multiple elements
 * @param {NodeList} $elements NodeList
 * @param {String} eventType Event type e.g
 * @param {Function} callback Callback function
 */

export const addEventOnElements = function ($elements, eventType, callback) {
  $elements.forEach(($element) =>
    $element.addEventListener(eventType, callback)
  );
};
