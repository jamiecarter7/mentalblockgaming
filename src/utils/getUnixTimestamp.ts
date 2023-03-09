export function getUnixTimestamp(date: Date) {
  return Math.floor(new Date(date).getTime() / 1000);
}
