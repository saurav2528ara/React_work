import React from "react";
import ReactDOM from "react-dom/client";  

                // Object
const heading = React.createElement("h1",{id:"heading"}, "Namaste React 🚀");
// create react element using REACT
console.log(heading);

// JSX   create react element using JSX
// const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
