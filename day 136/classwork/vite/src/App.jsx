import { useState } from "react";

const questions = [
    "What is Your name ?",
    "What is Your age ?",
    "Where are You from ?",
];

function App() {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex(index + 1);
    };

    const handlePrev = () => {
        setIndex(index - 1);
    };

    return (
        <div>
            <p>{questions[index]}</p>
            <button onClick={handleNext} disabled = {index >= questions.length - 1}>Next</button>
            <button onClick={handlePrev} disabled = {index <= 0}>Prev</button>
        </div>
    );
}

export default App;
