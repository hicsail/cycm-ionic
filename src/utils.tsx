export function generateTitleId(title: string) {
  return `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}
