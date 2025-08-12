import { useState } from "react";
import MyText from "./components/MyText";

// 3) შექმენით React - ის პროექტი, უნდა გქონდეთ კომპონენტი სახელად MyText რომელსაც გამოაქვს ტექსტი მაგალითად Hello From React,
// ამ კომპონენტზე გამოიყენეთ memo, App კომპონენტში შექმენით მდგომარეობა სახელად count - ი, უნდა გქონდეთ ერთი ღილაკი მასზე დაჭერისას
// უნდა შეიცვალოს რიცხვის (შექმნილი მდგომარეობის) მნიშვნელობა, App კომპონენტში გამოიძახეთ MyText კომპონენტი, ასევე პარაგრაფის დახმარებით
// გამოიტანეთ რიცხვის მნიშვნელობა რომელიც ყოველ დაკლიკებაზე იცვლება, memo - ს დახმარებით როცა რიცხვი ღილაკზე
// დაჭერისას იცვლება MyText კომპონენტი თავიდან არ რენდერდება

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <MyText />
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </>
    );
}

export default App;
