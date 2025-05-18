function temperature(temp) {
  if (temperature < -10) {
    return "very cold";
  } else if (temperature > -10 && temperature < 0) {
    return "it's cold";
  } else if (temperature > 0 && temperature < 20) {
    return "tbila";
  } else if (temperature > 20 && temperature < 30) {
    return "it's hot";
  } else {
    return "tbila";
  }
}
console.log(temperature(80));

function calculator(num1 = 0, num2 = 0, operator) {
  if ((operator = "+")) {
    return num1 + num2;
  } else if ((operator = "-")) {
    return num1 - num2;
  } else if ((operator = "*")) {
    return num1 * num2;
  } else if ((operator = "/")) {
    return num1 / num2;
  } else if (num1 <= 0 || num2 <= 0) {
    return "invalid operation";
  }
  if ((num1 = 0 && operator == "/")) {
    return "nulze ara dzma";
  }
}
console.log(calculator(5,9,"+"));


