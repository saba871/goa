// codeAcadamy
// manual map
function func(num) {
  return num ** 2;
}
function manualMap(arr, func) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
}
console.log(manualMap([1, 2, 3, 4, 5], func));

// manual filter
function callback(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
function manualFilter(arr, callback) {
  let secondResult = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) == true) {
      secondResult.push(arr[i]);
    }
  }
  return secondResult;
}
console.log(manualFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], callback));

// manual findIndex()
function fun(random) {
    
  if (random % 5 == 0) {
    return true;
  }
}
function manualFindIndex(arr, fun) {

  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i]) === true) {
      return `number is at ${i} index!`;
    }
  }
  return -1;
}
console.log(manualFindIndex([1, 2, 3, 4, 5], fun));

// manual forEach()
