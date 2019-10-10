export const getTodayDate = () => new Date().toJSON().slice(0, 10);
function pad(n) {
  return n < 10 ? "0" + n : n;
}
export function dateString(d) {
  const day = d.getUTCDate();
  const month = d.getUTCMonth() + 1;
  const year = d.getUTCFullYear();

  return `${day}/${month}/${year}`;
}
export function timeString(d) {
  return pad(d.getUTCHours() + 2) + ":" + pad(d.getUTCMinutes());
}
