export const getTodayDate = () => new Date().toJSON().slice(0, 10);

export function ISODateString(d) {
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }
  return (
    pad(d.getUTCDate())+
    "-" +
    pad(d.getUTCMonth()+1) +
    "-" +
    d.getUTCFullYear()  +
    " " +
    pad(d.getUTCHours()) +
    ":" +
    pad(d.getUTCMinutes()) +
    ":" +
    pad(d.getUTCSeconds())
  );
}
