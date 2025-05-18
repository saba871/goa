function sum(numbers) {
  let result = 0;
  for (i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

function positiveSum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count += arr[i];
    }
  }
  return count;
}
