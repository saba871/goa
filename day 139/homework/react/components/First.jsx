import { useState } from "react";

const First = () => {
    const [film, setFilm] = useState("");

    const handleChange = (e) => {
        setFilm(e.target.value);
    };

    const handleClick = async () => {
        try {
            const response = await fetch(
                `https://www.omdbapi.com/?apikey=fe36b1f4&t=${film}`
            );
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="enter film name"
                name="film"
                onChange={handleChange}
            />
            <button onClick={handleClick}>Search</button>
            {third()}
        </div>
    );
};

export default First;
