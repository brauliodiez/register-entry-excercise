export const getTodayDate = () => new Date().toJSON().slice(0, 10);
function pad(n) {
  return n < 10 ? "0" + n : n;
}
export function dateString(d) {
  const day = pad(d.getUTCDate());
  const month = pad(d.getUTCMonth() + 1);
  const year = d.getUTCFullYear();

  return `${day}/${month}/${year}`;
}
export function timeString(d) {
  const hour = pad(d.getUTCHours() + 2);
  const min = pad(d.getUTCMinutes());
  return `${hour}:${min}`;
}
