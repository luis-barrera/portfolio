export interface IDoSection {
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
  // Tools
  tools: {
    name: string,
    iconURL: string,
  }[],
  // Other things that aren't libraries nor tools
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

