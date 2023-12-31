import React from "react";
import ReactDOM from "react-dom/client";  

/** Nested div
 * 
<div id ="parent">
    <div id = "child">
        <h1></h1>
    </div>
</div>

*/
const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I'm an h1 tag"))
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);