function convertToRoman(num) {
  if (num <= 0) return ''; // Roman numerals don't represent 0 or negative numbers

  const romanSymbols = [
    ['M', 1000],
    ['CM', 900], // Special case
    ['D', 500],
    ['CD', 400], // Special case
    ['C', 100],
    ['XC', 90],  // Special case
    ['L', 50],
    ['XL', 40],  // Special case
    ['X', 10],
    ['IX', 9],   // Special case
    ['V', 5],
    ['IV', 4],   // Special case
    ['I', 1],
  ];

  let result = '';

  for (const [symbol, value] of romanSymbols) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

module.exports = convertToRoman;
