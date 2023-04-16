import { readable } from "svelte/store";

import { definedColors } from '../data/definedColors';

// Selected color, get a random every time the page is reloaded
const keys = Object.keys(definedColors);
const randomKey = keys[(keys.length * Math.random()) << 0];
const selectedBaseColor = definedColors[randomKey];

export const baseColor = readable(selectedBaseColor, function start(set) {
  set(selectedBaseColor);

  return function stop() {
    set(selectedBaseColor);
  };
});
