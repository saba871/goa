// მაღალი რიგის ფუნქციაა ის ფუნქცია რომელსაც შეუძლია არგუმენტად მიიღოს ფუნქცია და გამოიძახოს ის
// როცა ფუნქცია მუშაობას დაასრულებს და არგუმენტად გადააცემული ფუნქცია ისწყებს შემდეგ მუშსაობას ქვია callback ფუნქცია
const higher = function (func) {
  func();
};
const call = function () {
  console.log("hello world");
};
higher(call);
// hip ში ინახება დიდი მეხსიერების მქონდე ელემნტები მაგალითად ობიექტები
// stack ში ინახხება პატარა მეხსიერების მქონე ელემენტები
function callback(num) {
  console.log(num);
}
function manualForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
manualForEach([1, 2, 3, 4, 5], callback);
//
