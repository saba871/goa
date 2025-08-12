const os = require("os"); // os => operation system module

console.log(os.type());
// ბეჭდავს ოპერაციული სისტემის ტიპს
console.log(os.arch());
// აჩვენებს პროცესორის მონაცემებს
console.log(os.networkInterfaces());
// გიჩვენებს AP მისამართებს
console.log(os.homedir());
// აბრუნებს მთავარი საქაღალდის მისამართს
console.log(os.hostname());
// აჩვენებს კომპიუტერის სახელს (hostname)
console.log(os.uptime());
// ბეჭდავს, რამდენი წამია რაც კომპიუტერი ჩართულია
