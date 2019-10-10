export const getTodayDate = () => new Date().toJSON().slice(0, 10);
function pad(n) {
    return n < 10 ? "0" + n : n;
  }
export function dateString(d) {
  return (
    pad(d.getUTCDate())+
    "/" +
    pad(d.getUTCMonth()+1) +
    "/" +
    d.getUTCFullYear()
  );
}
export function timeString(d) {
    return (
      pad(d.getUTCHours()+2) +
      ":" +
      pad(d.getUTCMinutes())
    );
  }
