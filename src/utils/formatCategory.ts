export function formatCategory(string: string) {
  const str = string.charAt(0).toUpperCase() + string.slice(1);
  return str.replaceAll("-", " ");
}
