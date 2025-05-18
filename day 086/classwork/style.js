let userAge = prompt("enter your age: ");
let isAdult = userAge > 18 ? true : false;
console.log(isAdult);

let userName = prompt("enter your name: ");
let userPassword = prompt("enter your password: ");
let baqariShenaXarDzma =
  userPassword.length < 4 ? "password is too short" : `wellcome ${userName}`;
console.log(baqariShenaXarDzma);

let weather = prompt("what weather is it?");
if (weather === "sun") {
  console.log("i go to walk");
} else if (weather === "rain") {
  console.log("gavide ra xaxvi xo ara var meroed movide");
} else if (weather === "snow") {
  console.log("i goes to play outside");
} else {
  console.log("i will stay home, albat ravi");
}

let random = "rain";
switch (random) {
  case "rain":
    console.log("i will stay home");
    break;
  case "sunny":
    console.log("i will go to walk");
    break;
  case 'snow':
    console.log("i will go to play in snow");
  default:
    console.log("i do not know what weaher is outside");
    break;
}