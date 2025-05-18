// leetcode
const filter = function (arr, fn) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

// 6 kyu
function sumDigNthTerm(initVal, patternL, nthTerm) {
  let sum = initVal;
  let count = 1;
  let index = 0;
  while (count !== nthTerm) {
    sum += patternL[index];
    index++;
    if (index === patternL.length) {
      index = 0;
    }
    count++;
  }
  let strSum = String(sum);
  let digitSum = 0;
  for (let i = 0; i < strSum.length; i++) {
    digitSum += parseInt(strSum[i]);
  }
  return digitSum;
}

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
