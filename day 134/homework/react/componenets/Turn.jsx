import { useState } from "react";

const TurnOn = () => {
    // მდგომარეობა
    const [isLight, setIsLight] = useState(false);

    const handleClick = () => {
        setIsLight(!isLight);
    };

    return (
        <div>
            <button onClick={handleClick}>
                Turn The light {isLight ? "OFF" : "ON"}
            </button>
            <p>The Light Is {isLight ? "ON" : "OFF"}</p>
        </div>
    );
};

export default TurnOn;
