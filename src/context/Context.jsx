import React, { createContext, useEffect, useState } from "react";
// import PropTypes from "prop-types";
import ecommerceURL from "../api/baseURL";

import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../hooks/useCategories";
import { useUser } from "../hooks/useUser";

export const GlobalContext = createContext();

export const Context = ({ children }) => {
    const [token, setToken] = useState(null);
    const [isResponsive, setIsResponsive] = useState(false);

    const { products } = useProducts();
    const { categories } = useCategories();
    const {
        isLogged,
        isAdmin,
        user,
        cart,
        history,
        setCart,
        addToCart,
        userLogout,
    } = useUser(token);

    const authToken = localStorage.getItem("token") || "";
    useEffect(() => {
        if (authToken) {
            const userReAuthentication = async () => {
                const { data } = await ecommerceURL.get("/user/renew", {
                    headers: { Authorization: authToken },
                });
                setToken(data.newToken);
            };
            userReAuthentication();
        }
    }, [authToken]);

    const state = {
        responsive: { isResponsive, setIsResponsive },
        isLogged,
        isAdmin,
        user,
        cart,
        setCart,
        history,
        token,
        products,
        categories,
        setToken,
        addToCart,
        userLogout,
    };

    return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
    );
};
