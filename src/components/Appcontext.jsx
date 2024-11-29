import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState("");
    const [list, setList] = useState([]);

    const login = () => {
        setIsAuthenticated(true);
        setCurrentUser("rohan");
    };

    const signout = () => {
        setIsAuthenticated(false);
        setCurrentUser("");
    };

    const addItem = (item) => {
        setList((prevList) => [...prevList, item]);
    };

    const removeItem = (item) => {
        setList((prevList) => prevList.filter((i) => i !== item));
    };

    const clearList = () => {
        setList([]);
    };

    return (
        <AppContext.Provider value={{ isAuthenticated, currentUser, login, signout, list, addItem, removeItem, clearList }}>
            {children}
        </AppContext.Provider>
    );
};
