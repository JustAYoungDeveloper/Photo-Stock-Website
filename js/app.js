/**
 * @copyright solatpukhtunyar 2025
 * @author solat <solatpukhtunyar123@gmail.com>
 * @creditsTo sadee <codewithsadee@gmail.com>
 */

"use strict";

/** Import */

import { client } from "./api_configure.js";
import { photoCard } from "./photo_card.js";
import { gridInit, updateGrid } from "./utils/masonry_grid.js";
import { videoCard } from "./video_card.js";
import { collectionCard } from "./collection_card.js";

/**
 * Render Curated Photos On Home Page
 */

const /** {NodeElement} */ $photoGrid =
    document.querySelector("[data-photo-grid]");

$photoGrid.innerHTML = `<div class="skeleton"></div>`.repeat(18);

client.photos.curated({ page: 1, per_page: 20 }, (data) => {
  $photoGrid.innerHTML = "";
  const /** {Object} */ photoGrid = gridInit($photoGrid);
  data.photos.forEach((photo) => {
    const /** {NodeElement} */ $photoCard = photoCard(photo);

    updateGrid($photoCard, photoGrid.columnsHeight, photoGrid.$columns);
  });
});

/**
 * Render Popular Videos In Home Page
 */

const /** {NodeElement} */ $videoGrid =
    document.querySelector("[data-video-grid]");

$videoGrid.innerHTML = `<div class="skeleton"></div>`.repeat(18);

client.videos.popular({ per_page: 20 }, (data) => {
  $videoGrid.innerHTML = "";
  const /** {Array} */ videoGrid = gridInit($videoGrid);
  data.videos.forEach((video) => {
    const /** {NodeElement} */ $videoCard = videoCard(video);
    updateGrid($videoCard, videoGrid.columnsHeight, videoGrid.$columns);
  });
});

/**
 * Render Collection in Home Page
 */

const /** {NodeElement} */ $collectionGrid = document.querySelector(
    "[data-collection-grid]"
  );
client.collections.featured({ per_page: 18 }, (data) => {
  data.collections.forEach((collection) => {
    const /** {NodeElement} */ $collectionCard = collectionCard(collection);

    $collectionGrid.appendChild($collectionCard);
  });
});
