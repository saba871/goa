function contact() {
    window.location = '/contact/contact.html';
}
function home() {
    window.location = '/home-page/index.html';
}
function catalog() {
    window.location = '/catalog/catalog.html';
}
function about() {
    window.location = '/about/about.html';
}
function profile() {
    window.location = '/profile/profile.html';
}
function cart() {
    window.location = '/cart/cart.html'
}

const main = document.querySelector("main");
const select = document.querySelector("select");
const secondSelect = document.getElementById("second-select");

const categories = [
    "jewelery",
    "men's clothing",
    "women's clothing",
];

const array = [
    "Alphabetically,Z-A",
    "Price,Low to high",
    "Price,High to low",
    "Rating,low to high",
    "Rating,high to low"
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

function sortedBy() {
    secondSelect.innerHTML = `<option value="alphabetically,A-Z">Alphabetically,A-Z</option>`;

    for (const char of array) {
        const secondOption = document.createElement("option");
        secondOption.value = char; 
        secondOption.textContent = char;
        secondSelect.appendChild(secondOption);
    }
}

function render(productsArray) {
    main.innerHTML = "";

    for (const product of productsArray) {
        main.innerHTML += `
        <div class="catalog">
            <section id='${product.id}'>
                <img src='${product.image}' alt='${product.title}' />
                <p>${product.category}</p>
                <p><strong>$${product.price}</strong></p>
                <button class="sec-btn">Add to Wishlist</button>
                <button class="btn">Add to Cart</button>
            </section>
            <hr />
        </div>
        `;
    }

    const addButtons = document.querySelectorAll(".btn");

    addButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const product = productsArray[index];
            localStorage.setItem(`product-${product.id}`,product.image);
            alert("Product added to cart!");
        });
    });
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
        sortedBy();
    });
