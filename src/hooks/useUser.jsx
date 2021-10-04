import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ecommerceURL from "../api/baseURL";

export const useUser = (token) => {
    // const [isLoading, setIsLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userCb, setUserCb] = useState(false);
    const [user, setUser] = useState([]);
    const [history, setHistory] = useState([]);
    const [cart, setCart] = useState([]);

    
    // Get information about current user.
    useEffect(() => {
        if (token) {
            const getCurrentUser = async () => {
                const { data } = await ecommerceURL.get("/user/info", {
                    headers: { Authorization: token },
                });
                setUser(data);
                setCart(data.cart);
                setIsLogged(true);
                data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
            };
            getCurrentUser();
        }
    }, [token]);

    // Get the payments of current user.
    useEffect(() => {
        if (token) {
            const getUserHistoryPayments = async () => {
                const { data } = await ecommerceURL.get("/user/history", {
                    headers: { Authorization: token },
                });
                setHistory(data.history);
            };
            getUserHistoryPayments();
        }
    }, [token]);

    // Add a product to user cart.
    const addToCart = async (product) => {
        if (!isLogged) {
            return Swal.fire({
                icon: "warning",
                title: "Ops...",
                text: "Please sign in for add this product to cart",
                showConfirmButton: true,
            });
        }
        const check = cart.every((item) => {
            return item._id !== product._id;
        });
        if (check) {
            setCart([...cart, { ...product, quantity: 1 }]);
            await ecommerceURL.patch(
                "/user/add_cart",
                { cart: [...cart, { ...product, quantity: 1 }] },
                { headers: { Authorization: token } }
            );
        } else {
            Swal.fire({
                icon: "success",
                title: "Confirm",
                text: "This product has been added succesfully to cart",
                showConfirmButton: true,
                timer: 3000,
                timerProgressBar: true,
            });
        }
    };

    // User log out.
    const userLogout = () => {
        localStorage.clear();
        setUser([]);
        setIsLogged(false);
        setIsAdmin(false);
    };
    return {
        isLogged,
        isAdmin,
        user,
        history,
        cart,
        setCart,
        userCb,
        setUserCb,
        userLogout,
        addToCart,
    };
};
