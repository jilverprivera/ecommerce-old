import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./context/Context";
import AppRouter from "./routes/AppRouter";

const App = () => {
    return (
        <Context>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Context>
    );
};

export default App;
