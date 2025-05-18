const higher = function (func) {
  func();
};
const call = function () {
  console.log("hello world");
};
higher(call);
