function copyObj(newObj, oldObj) {
    for (let key in oldObj) {
        newObj[key] = oldObj[key];
    }
    return newObj;
}

const result = copyObj({ num1: 5, num2: 10 }, { num2: 8, num3: 7 });

const { num1, num2, num3 } = result;

console.log(copyObj(result));
//
const me = {
    firstname: "saba",
    lastname: "tabatadze",
};

const res = Object.assign(
    { age: 19 },
    { firstname: me.firstname, lastname: me.lastname }
);
console.log(res);
