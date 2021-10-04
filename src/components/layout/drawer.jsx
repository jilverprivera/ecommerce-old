import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { GlobalContext } from "../../context/Context";
import { IoBagCheckOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Drawer = () => {
    const { isAdmin, isLogged, cart, userLogout } = useContext(GlobalContext);

    return (
        <motion.div
            className="drawer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
        >
            <ul className="drawer__wrapper">
                {isAdmin && (
                    <NavLink
                        exact
                        to="/Dashboard"
                        className="nav__link"
                        activeClassName="selected"
                    >
                        Dashboard
                    </NavLink>
                )}
                <NavLink
                    exact
                    to="/"
                    className="nav__link"
                    activeClassName="selected"
                >
                    Home
                </NavLink>
                <NavLink
                    exact
                    to="/products"
                    className="nav__link"
                    activeClassName="selected"
                >
                    Products
                </NavLink>
                {isLogged && (
                    <NavLink
                        exact
                        to="/shopping"
                        className="nav__link"
                        activeClassName="selected"
                    >
                        Shopping
                    </NavLink>
                )}
                <NavLink
                    exact
                    to="/contact"
                    className="nav__link"
                    activeClassName="selected"
                >
                    Contact
                </NavLink>
            </ul>

            {isLogged && (
                <div className="cart__wrapper">
                    <Link to="/cart" className="cart__link">
                        <span className="cart__length">{cart.length}</span>
                        <IoBagCheckOutline />
                    </Link>
                </div>
            )}
            {isLogged && (
                <div className="drawer__btn__logout">
                    <button
                        className="btn__logout btn__block"
                        onClick={userLogout}
                    >
                        Log out
                    </button>
                </div>
            )}
        </motion.div>
    );
};

export default Drawer;
