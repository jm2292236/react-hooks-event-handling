import React from "react";

function Tickler() {
    const myConst = "Teehee!";
    function tickle(e) {
        console.log(myConst);
        console.log({"e.target": e.target, "e.clientX": e.clientX});
    }

    return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
