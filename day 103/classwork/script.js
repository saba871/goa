// manual Map Object
const manualMapObj = (obj, callback) => {
  let result = {};
  for (const key in obj) {
    result[key] = callback(obj[key]);
  }
  return result;
}

const me = {
  firstName: "saba",
  lastName: "Tabatazdze"
};

const mappedObj = manualMapObj(result, (value) => value + ".");
console.log(mappedObj);
