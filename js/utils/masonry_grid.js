/**
 * @copyright solatpukhtunyar 2025
 * @author solat <solatpukhtunyar123@gmail.com>
 * @creditsTo sadee <codewithsadee@gmail.com>
 */

"use strict";

/**
 * Initial Columns
 * @param {Node} $gridContainer Grid Container
 * @returns {Object} Column & Column Height Array
 */

/** Export */

export const gridInit = function ($gridContainer) {
  const /** {Node} */ $columns = [];
  const /** {Array} */ columnsHeight = [];

  const /** {Number} */ columnCount = Number(
      getComputedStyle($gridContainer).getPropertyValue("--column-count")
    );
  for (let i = 0; i < columnCount; i++) {
    const /** {NodeElement} */ $column = document.createElement("div");
    $column.classList.add("column");
    $gridContainer.appendChild($column);
    $columns.push($column);
    columnsHeight.push(0);
  }

  return { $columns, columnsHeight };
};

/**
 * Update masonry grid
 * @param {Node} $card Grid Item
 * @param {Array} columnsHeight Height Of All Columns
 * @param {NodeList} $columns All columns
 */

export const updateGrid = function ($card, columnsHeight, $columns) {
  const /** {Number} */ minColumnHeight = Math.min(...columnsHeight);
  const /** {Number} */ minColumnIndex = columnsHeight.indexOf(minColumnHeight);

  $columns[minColumnIndex].appendChild($card);
  columnsHeight[minColumnIndex] = $columns[minColumnIndex].offsetHeight;
};
