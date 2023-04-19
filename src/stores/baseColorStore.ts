import { readable } from "svelte/store";

import { definedColors } from '../data/definedColors';

export const baseColor = readable('', function start(set) {
  // Selected color, get a random every time the page is reloaded
  const keys = Object.keys(definedColors);
  const randomKey = keys[(keys.length * Math.random()) << 0];
  const selectedBaseColor = definedColors[randomKey];

  set(selectedBaseColor);

  return function stop() {
    set('');
  };
});
