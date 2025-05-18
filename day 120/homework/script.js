const fetchdata = async (link) => {
    try {
        const res = await fetch(link);
        const data = await res.json();

        console.log(data);
    } catch (error) {
        console.log("error catched");
    }
};
fetchdata("https://fakestoreapi.com/products/");
