const randomArr = () => {
    try {
        const random = Math.random();
        if (random == 0) {
            throw new Error("First error");
        }
    } catch (err) {
        console.log("second error");
    }
};
randomArr();
