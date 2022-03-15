import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    return (
        <div className="App">
            <Counter value={50}></Counter>
        </div>
    );
}
let Counter = props => {
    let [count, SetCount] = useState(props.value);
    let displayBlock = () =>
        (document.querySelector("#displayBlock").style.display = "block");
    let displayNone = () =>
        (document.querySelector("#displayBlock").style.display = "none");
    const Increase = () => {
        if (count >= 100) {
            displayBlock();
        } else {
            SetCount(count + 1);
            displayNone();
        }
    };
    const Decrease = () => {
        if (count < 1) {
            displayBlock();
        } else {
            SetCount(count - 1);
            displayNone();
        }
    };
    const Go05 = () => {
        SetCount((count = 5));
        displayNone();
    };
    const Go95 = () => {
        SetCount((count = 95));
        displayNone();
    };
    return (
        <div className="container">
            <h2>Counter Max: 100, Min: 00</h2>
            <h3>Count: {count}</h3>
            <SetAlert></SetAlert>
            <button onClick={Go05}>Go 05</button>
            <button onClick={Decrease}>Decrease (-)</button>
            <button onClick={Increase}>Increase (+)</button>
            <button onClick={Go95}>Go 95</button>
        </div>
    );
};
let SetAlert = props => {
    return (
        <div id="displayBlock" className="alertWarning">
            {/* <p>{data}</p> */}
            <p>Can not access.</p>
        </div>
    );
};
export default App;
