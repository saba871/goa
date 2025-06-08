import { useState } from "react";

const Text = () => {
    const [text, setText] = useState("This Is The Message On My Web Page");
    
    const change = () => {
        setText("This Is The Second Message On My Web Page");
    }

    return (
        <div>
            <p>{text}</p>
            <button onClick={change}>Change</button>
        </div>
    )
}

export default Text;
