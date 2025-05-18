function addProduct() {
    let user = prompt("Enter any name: ");
    if (user) {
        let add = document.getElementById("products");
        let newproduct = document.createElement("li");
        newproduct.textContent = user;

        newproduct.addEventListener("click", () => {
            add.removeChild(newproduct)
        })
        
        add.appendChild(newproduct);
    }
}
