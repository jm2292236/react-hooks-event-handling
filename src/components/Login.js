import React from "react";

function Login() {
    function handleSubmit(event) {
        event.preventDefault();
        console.log("I submit");
    }

    function mySubmit(event) {
        event.preventDefault();
        console.log(`Your info has been submitted: ${event.target[0].value}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Enter username..." />
                <input type="password" name="password" placeholder="Enter password..." />
                <button>Login</button>
            </form>

            <form onSubmit={mySubmit}>
                <input type="text" name="city" placeholder="Enter a city..."/>
                <button>Send city</button>
            </form>
        </div>
    );
}

export default Login;
