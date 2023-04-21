// TODO: poner esto en un .server.js

import faviconUrl from "$lib/assets/favicon.png";
import iDoJSON from "$assets/json/i-do-data.json";

export interface iDoSection {
  name: string,
  desc: string,
  // Programming languages
  languages: {
    name: string,
    pageURL: string,            // URL to language home-page
    iconURL: string,
    desc: string | null,        // Where I used or which things I used it in
    sinceDate: string | null,   // Year when I learn or started to use it
  }[],
  // libraries or Frameworks
  libraries: {
    name: string,
    pageURL: string,            // URL to language home-page
    iconURL: string,
    desc: string | null,        // Where I used or which things I used it in
    sinceDate: string | null,   // Year when I learn or started to use it
  }[],
  // Tool
  tools: {
    name: string,
    iconURL: string,
  }[],
  // Other things
  others: {
    name: string,
    iconURL: string,
  }[] | null,
  // Work Experience
  work: {
    name: string,
    screenshotURL: string,
    URL: string,
    desc: string,
    dateBegin: string | null,
    dateEnd: string | null,
    org: string | null,
  }[] | null,
  // Projects
  projects: {
    name: string,
    screenshotURL: string,
    URL: string,
    desc: string,
    dateBegin: string | null,
    dateEnd: string | null,
    org: string | null,
  }[] | null
}

export const iDoData: iDoSection[] = iDoJSON;

