//
function mostFrequentDigitSum(n) {
  let result = n;
  const digitsSumArr = [];

  while (result !== 0) {
    let digitsSum = 0;
    const strN = String(result);

    for (let i = 0; i < strN.length; i++) {
      digitsSum += parseInt(strN[i]);
    }

    result -= digitsSum;

    digitsSumArr.push(digitsSum);
  }
}