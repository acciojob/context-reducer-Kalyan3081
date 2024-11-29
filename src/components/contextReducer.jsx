import React, { useContext, useState } from "react";
import { AppContext } from "./Appcontext";
// import { AppContext } from "./AppContext";

const ContextReducer = () => {
    const { isAuthenticated, currentUser, login, signout, list, addItem, removeItem, clearList } = useContext(AppContext);
    const [input, setInput] = useState("");

    const handleAdd = () => {
        if (input.trim() === "") {
            alert("Please enter a valid item.");
            return;
        }
        addItem(input.trim());
        setInput(""); // Clear the input field after adding
    };

    return (
        <div>
            {/* Login and Signout */}
            <button onClick={login} id="login-btn">Login</button>
            <button onClick={signout} id="signout">Signout</button>
            <p id="current-user">
                Current user: {currentUser}, isAuthenticated: {isAuthenticated ? "Yes" : "No"}
            </p>

            {/* Input and List Management */}
            <input
                type="text"
                id="shopping-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter item"
            />
            <button onClick={handleAdd}>Add</button>
            <button onClick={clearList} id="clear-list">Clear List</button>

            {/* Render List */}
            <ul>
                {list.map((item) => (
                    <li key={item} id={`item-${item}`}>
                        {item}
                        <button id={`remove-${item}`} onClick={() => removeItem(item)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContextReducer;
