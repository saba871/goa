process.stdin.on("data", (input) => {
    const userInput = input.toString().trim();

    if (userInput === "exit") {
        process.exit();
    }
    console.log(`User input: ${input}`);
});
