export function generateRandom16DigitNumber() {
  let random16DigitNumber = "";
  for (let i = 0; i < 16; i++) {
    const randomDigit = Math.floor(Math.random() * 10);
    random16DigitNumber += randomDigit;
  }
  return random16DigitNumber;
}

export function generateRandomMMYY() {
  const currentYear = new Date().getFullYear();
  const randomYear = Math.floor(Math.random() * 10) + currentYear;
  const randomMonth = Math.floor(Math.random() * 12) + 1;
  const formattedMonth = randomMonth < 10 ? `0${randomMonth}` : randomMonth;
  return `${formattedMonth}/${randomYear.toString().slice(2)}`;
}
