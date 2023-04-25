import { readable } from "svelte/store";

import { definedColors } from '../data/definedColors';

const selectedBaseColor = definedColors[(definedColors.length * Math.random()) << 0];

export const baseColor = readable('000000', function start(set) {

  set(selectedBaseColor);

  return () => {
    set(selectedBaseColor);
  };
});
