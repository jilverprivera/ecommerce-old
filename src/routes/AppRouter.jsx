import React, { useContext } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";

import { GlobalContext } from "../context/Context";
import { PrivateRoute } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoutes";

// <--- ROUTES --->
// Auth
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";

import Home from "../pages/home";
import Products from "../pages/products";
import Contact from "../pages/contact";
import Shopping from "../pages/shopping";
import Detail from "../pages/detail";
import Cart from "../pages/cart";
import ProductsByCategory from "../pages/productsByCategory";

const AppRouter = () => {
    const location = useLocation();
    const { isLogged } = useContext(GlobalContext);

    return (
        <Switch location={location} key={location.pathname}>
            {/* Auth Pages*/}
            <PublicRoute
                isAuthenticated={isLogged}
                path="/signin"
                component={SignIn}
            />
            <PublicRoute
                isAuthenticated={isLogged}
                path="/signup"
                component={SignUp}
            />

            <Route exact path="/" component={Home} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/category/:id" component={ProductsByCategory} />

            <PrivateRoute
                isAuthenticated={isLogged}
                path="/shopping"
                component={Shopping}
            />
            <PrivateRoute
                isAuthenticated={isLogged}
                path="/cart"
                component={Cart}
            />
            <Redirect to="/" />
        </Switch>
    );
};

export default AppRouter;
