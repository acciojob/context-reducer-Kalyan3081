import React from "react";
import ContextReducer from "./contextReducer";
import { AppProvider } from "./Appcontext";

const App = () => {
    return (
        <AppProvider>
            <ContextReducer />
        </AppProvider>
    );
};

export default App;
