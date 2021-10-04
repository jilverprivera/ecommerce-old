import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { HiMenuAlt3 } from "react-icons/hi";
import { GlobalContext } from "../../context/Context";
import { AnimatePresence } from "framer-motion";
import Drawer from "./drawer";

const Header = () => {
    const { isLoading, isAdmin, isLogged, responsive, cart, userLogout } =
        useContext(GlobalContext);
    const { setIsResponsive } = responsive;

    const [isOpen, setIsOpen] = useState(false);

    const screenResponsive = () => {
        if (window.innerWidth <= 768) {
            setIsResponsive(true);
        } else {
            setIsResponsive(false);
        }
    };

    useEffect(() => {
        screenResponsive();
    }, []);

    window.addEventListener("resize", screenResponsive);

    return (
        <header className="header">
            <nav className="header__wrapper">
                <div className="navigation">
                    <h1 className="nav__logo">TechEcommerce</h1>
                    <ul className="nav__wrapper">
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
                        {/* <NavLink
                            exact
                            to="/contact"
                            className="nav__link"
                            activeClassName="selected"
                        >
                            Contact
                        </NavLink> */}
                    </ul>
                </div>
                <div>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : !isLogged ? (
                        <ul className="auth__wrapper">
                            <NavLink className="auth__link" to="/signin">
                                Sign in
                            </NavLink>
                            <NavLink className="auth__link" to="/signup">
                                Sign Up
                            </NavLink>
                        </ul>
                    ) : (
                        <div className="logged__container">
                            <Link to="/cart" className="cart__link">
                                <span className="cart__length">
                                    {cart.length}
                                </span>

                                <IoBagCheckOutline />
                            </Link>
                            <button
                                className="btn btn__danger btn__small logout"
                                onClick={userLogout}
                            >
                                Log out
                            </button>
                        </div>
                    )}

                    <div className="menu" onClick={() => setIsOpen(!isOpen)}>
                        {!isOpen ? <HiMenuAlt3 /> : <GrClose />}
                    </div>
                </div>
            </nav>
            <AnimatePresence exitBeforeEnter>
                {isOpen && <Drawer />}
            </AnimatePresence>
        </header>
    );
};

export default Header;
