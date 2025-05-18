const main = document.querySelector("main");
const select = document.querySelector("select");

const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
];

let products = [];

function populateCategories() {
    select.innerHTML = "<option value='all'>All</option>";

    for (const category of categories) {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        select.appendChild(option);
    }
}

function render(productsArr) {
    main.innerHTML = "";

    for (const product of productsArr) {
        main.innerHTML += `
            <section id='${product.id}'>
                <h2>${product.title}</h2>
                <img width='200' src='${product.image}'/>
                <p>${product.description}</p>
                <p><strong>$${product.price}</strong></p>
            </section>
            <hr />
        `;
    }
}

select.addEventListener("change", (e) => {
    const category = e.target.value;

    if (category === "all") {
        render(products);
    } else {
        const filteredArray = products.filter(
            (product) => product.category === category
        );
        render(filteredArray);
    }
});


fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((value) => {
        products = value;
        render(products);
        populateCategories();
    });
