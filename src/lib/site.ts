export const BASE_PATH = "/branddragon";
export const SITE_ORIGIN = "https://branddragon.net";
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;

export function withBasePath(path: string) {
  if (
    !path.startsWith("/") ||
    path === BASE_PATH ||
    path.startsWith(`${BASE_PATH}/`)
  ) {
    return path;
  }

  return `${BASE_PATH}${path}`;
}

export function absoluteSiteUrl(path = "") {
  if (!path) {
    return SITE_URL;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
