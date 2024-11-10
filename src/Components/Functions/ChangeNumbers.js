export const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

const changeNumbersToArabic = (num) => {
  return num
    .toString()
    .split("")
    .map((n) => arabicNumbers[parseInt(n, 10)])
    .join("");
};
export default changeNumbersToArabic;
