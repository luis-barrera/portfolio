import { writable } from "svelte/store";

// List of possible options
export type SectionName = 'about' | 'i-do' | 'contact';

export const visibleSection = writable('about');

// Function that sets the actual section thats is visible by the user
export function checkSectionIsVisible(el: Element, sectionName: SectionName) {
  const rect = el.getBoundingClientRect();

  if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
    visibleSection.set(sectionName);
  }
};
