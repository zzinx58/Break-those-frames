function formatterWithNumberRange(inputValue: number) {
  const rangeSymbol = ["", "K", "M", "B", "T"];
  let curRangeSymbol = 0;
  let divider = 1;
  //When input is lower than K, we do nothing, on contrary, we need to
  while (inputValue >= 1000 && curRangeSymbol < rangeSymbol.length) {
    divider *= 1000;
    inputValue /= 1000;
    curRangeSymbol++;
  }
  return `${Math.round(inputValue)}${rangeSymbol[curRangeSymbol]}`;
}

function formatterWithNumberComma(inputValue: number) {
  const regex = /(?=(\d{3})+(?!\d))/g;
  return inputValue.toString().replace(regex, ",");
}
