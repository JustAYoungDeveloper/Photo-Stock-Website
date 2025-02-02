/**
 * @copyright solatpukhtunyar 2025
 * @author solat <solatpukhtunyar123@gmail.com>
 * @creditsTo sadee <codewithsadee@gmail.com>
 */

"use strict";

/** Import */

import { client } from "./api_configure.js";
import { photoCard } from "./photo_card.js";

/**
 * Render Curated Photos On Home Page
 */

const /** {NodeElement} */ $photoGrid =
    document.querySelector("[data-photo-grid]");

$photoGrid.innerHTML = `<div class="skeleton"></div>`.repeat(18);

client.photos.curated({ page: 1, per_page: 20 }, (data) => {
  $photoGrid.innerHTML = "";
  data.photos.forEach((photo) => {
    const /** {NodeElement} */ $photoCard = photoCard(photo);
    $photoGrid.appendChild($photoCard);
  });
});
