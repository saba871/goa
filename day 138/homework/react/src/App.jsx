import React, { useState, useEffect } from "react";

export default function App() {
    const [text, setText] = useState("Click here");

    const handleClick = () => {
        setText(text === "Click here" ? "Clicked" : "Click here");
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    });

    return (
        <main>
            <p>{text}</p>
        </main>
    );
}
