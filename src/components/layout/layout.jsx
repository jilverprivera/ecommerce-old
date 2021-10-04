import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/Context";
import Header from "./header";

const Layout = ({ children }) => {
    const { responsive } = useContext(GlobalContext);
    const { setIsResponsive } = responsive;

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
        <div>
            <Header />
            <div className="App">{children}</div>
            {/* Footer */}
        </div>
    );
};

export default Layout;
