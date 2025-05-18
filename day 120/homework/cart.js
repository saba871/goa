let products = [];
function addProductToTheCart(product) {
    products.push(product);
    return products
}
console.log(addProductToTheCart("apple"));

module.exports = {
    addProductToTheCart
}
