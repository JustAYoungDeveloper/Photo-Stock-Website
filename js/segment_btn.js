/**
 * @copyright solatpukhtunyar 2025
 * @author solat <solatpukhtunyar123@gmail.com>
 * @creditsTo sadee <codewithsadee@gmail.com>
 */

"use strict";

/**
 * Import
 */

import { addEventOnElements } from "./utils/event.js";

/**
 *
 */

export const segment = function ($segment, callback) {
  const /** {NodeList} */ $segmentBtns =
      $segment.querySelectorAll("[data-segment-btn]");
  let /** {NodeElement} */ $lastSelectedSegmentBtn = $segment.querySelector(
      "[data-segment-btn].selected"
    );

  addEventOnElements($segmentBtns, "click", function () {
    $lastSelectedSegmentBtn.classList.remove("selected");
    this.classList.add("selected");
    $lastSelectedSegmentBtn = this;
    callback(this.dataset.segmentValue);
  });
};
