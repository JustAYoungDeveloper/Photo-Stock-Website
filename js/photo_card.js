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

/**
 * Create Photo Card
 * @param {Object} photo Photo Object
 * @returns Photo card
 */

export const photoCard = (photo) => {
  const /** {String} */ root = window.location.origin;
  console.log(photo);

  const {
    alt,
    avg_color: backdropColor,
    width,
    height,
    id,
    src: { large },
  } = photo;

  const /** {NodeElement} */ $card = document.createElement("div");
  $card.classList.add("card", "grid-item");
  $card.style.backgroundColor = backdropColor;

  $card.innerHTML = `
                    <figure
                    class="card-banner"
                    style="--width: ${width}; --height: ${height}"
                    >
                    <img
                      src="${large}"
                      width="${width}"
                      height="${height}"
                      loading="lazy"
                      alt=${alt}
                      class="img-cover"
                    />
                    </figure>

                    <div class="card-content">
                    <button
                      class="icon-btn small"
                      aria-label="Add to favorite"
                      data-ripple
                      data-favorite-btn
                    >
                    <span class="material-symbols-outlined" aria-hidden="true">favorite</span>
                    <div class="state-layer"></div>
                    </button>
                    </div>

                    <a href="${root}/pages/photos/photo_detail.html?id=${id}" class="state-layer"></a>
  `;

  const /** {Card Banner} */ $cardBanner = $card.querySelector("img");
  $cardBanner.style.opacity = 0;
  $cardBanner.addEventListener("load", function () {
    this.animate(
      {
        opacity: 1,
      },
      { duration: 400, fill: "forwards" }
    );
  });

  const /** {NodeList} */ $rippleElems = [
      $card,
      $card.querySelector("[data-ripple]"),
    ];

  $rippleElems.forEach(($rippleElem) => ripple($rippleElem));

  const /** {NodeElement} */ $favoriteBtn = $card.querySelector(
      "[data-favorite-btn]"
    );
  favorite($favoriteBtn, "photos", id);

  return $card;
};
