import { useState } from "react";

const SecText = () => {
    const [test, setCount] = useState("");

    const secret = () => {
        setCount("You Have Revealed The Secret Message")
    }

    return (
        <div>
            <button onClick={secret}>Show The Secret Message</button>
            <p>{test}</p>
        </div>
    )
}

export default SecText;
