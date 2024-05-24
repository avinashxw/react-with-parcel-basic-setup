import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <>
            <h1>Welcome to basic React.js App setup using Parcel.js as bundler</h1>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);