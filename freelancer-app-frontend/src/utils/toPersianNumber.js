const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianNumber(number) {
  const numWithCommas = numberWithCommas(number);
  const persianNumbers = toPersianDigits(numWithCommas);
  return persianNumbers;
}

function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function toPersianDigits(number) {
  return number.toString().replace(/\d/g, (n) => persianDigits[parseInt(n)]);
}
