// codewars
function queueTime(customers, n) {
  let result = 0;
  if (customers.length < 1) {
    return 0;
  }
  for (let i = 0; i < customers.length; i++) {
    if (customers[i] > n) {
      result += customers[i];
    }
  }
  return result;
}

// leetcode
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let s = 0;
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] !== nums[s]) {
      s++;
      nums[s] = nums[i];
    }
  }
  return s;
};

// leetcode
var lengthOfLastWord = function (s) {
  let random = 0;
  let i = s.length - 1;

  while (i >= 0 && s[i] === " ") {
    i--;
  }
  while (i >= 0 && s[i] !== " ") {
    random++;
    i--;
  }
  return random;
};

//
