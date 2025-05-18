const isorderSuccessful = true;

const coffeeOrder = new Promise((resolve, reject) => {
    if (isorderSuccessful) {
        resolve("your coffe is ready");
    } else {
        reject("Your order had been declined");
    }
});
coffeeOrder
    .then((message) => {
        console.log("Success:", message);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// const hasinternet = true;

// const filedowland = new Promise((resolve, rejcet) => {
//     setTimeout(() => {
//         if (hasinternet) {
//             resolve("file dowlanded succesfuly");
//         } else {
//             rejcet("check your internet conetction");
//         }
//     }, 2000);
// });
// filedowland
//     .then((message) => {
//         console.log("Succes:", message);
//     })
//     .catch((message) => {
//         console.log("Erorr:", message);
//     });
