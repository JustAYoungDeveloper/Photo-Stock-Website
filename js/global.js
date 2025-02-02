/**
 * @copyright solatpukhtunyar 2025
 * @author solat <solatpukhtunyar123@gmail.com>
 * @creditsTo sadee <codewithsadee@gmail.com>
 */

"use strict";

/**
 * Import
 */

import { ripple } from "./utils/ripple.js";
import { addEventOnElements } from "./utils/event.js";
/**
 * Header On-Scroll State
 */

const /** {NodeElement} */ $header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

/**
 * Add ripple effect
 */

const /** {NodeList} */ $rippleElems =
    document.querySelectorAll("[data-ripple]");
$rippleElems.forEach(($rippleElem) => ripple($rippleElem));

/**
 * Navbar Toggler for Mobile Screen
 */
const /** {NodeList} */ $navTogglers =
    document.querySelectorAll("[data-nav-toggler]");
const /** {NodeElement} */ $navbar =
    document.querySelector("[data-navigation]");
const /** {NodeElement} */ $scrim = document.querySelector("[data-scrim]");

addEventOnElements($navTogglers, "click", function () {
  $navbar.classList.toggle("show");
  $scrim.classList.toggle("active");
});

/**
 * Filter functionality
 * */

window.filterObj = {};

/**
 * Initial favourite object in local storage
 */

if (!window.localStorage.getItem("favourite")) {
  const /** {Object} */ favouriteObj = {
      photos: {},
      videos: {},
    };
  window.localStorage.setItem("favourite", JSON.stringify(favouriteObj));
}
