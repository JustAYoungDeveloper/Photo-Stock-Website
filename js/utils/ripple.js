/**
 * @copyright solatpukhtunyar 2025
 * @author solat <solatpukhtunyar123@gmail.com>
 * @creditsTo sadee <codewithsadee@gmail.com>
 */

"use strict";

/**
 * Adding Ripple Effect On An Element
 * @param {Node} $rippleElem Element for Ripple Effect
 */

export const ripple = function ($rippleElem) {
  $rippleElem.addEventListener("pointerdown", function (e) {
    e.stopImmediatePropagation();

    const /** {NodeElement} */ $ripple = document.createElement("div");
    $ripple.classList.add("ripple");
    this.appendChild($ripple);

    const removeRipple = () => {
      $ripple.animate(
        {
          opacity: 0,
        },
        { fill: "forwards", duration: 200 }
      );
      setTimeout(() => {
        $ripple.remove();
      }, 1000);
    };
    this.addEventListener("pointerup", removeRipple);
    this.addEventListener("pointerleave", removeRipple);

    const /** {Boolean} */ isNotIconButton =
        !this.classList.contains("icon-btn");

    if (isNotIconButton) {
      const /** {Number} */ rippleSize = Math.max(
          this.clientWidth,
          this.clientHeight
        );

      $ripple.style.top = `${e.layerY}px`;
      $ripple.style.left = `${e.layerX}px`;
      $ripple.style.width = `${rippleSize}px`;
      $ripple.style.height = `${rippleSize}px`;
    }
  });
};
