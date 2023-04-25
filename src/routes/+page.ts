import type { PageLoad } from "./$types";

import type { IDoSection } from "../models/work-area.model";

import iDoJSON from "$lib/assets/i-do-data.json";

// This solve the issue with baseColorStore
export const ssr = false;

export const load = (() => {
  const iDoData: IDoSection[] = iDoJSON;

  return {
    iDoData: iDoData
  };
}) satisfies PageLoad;

