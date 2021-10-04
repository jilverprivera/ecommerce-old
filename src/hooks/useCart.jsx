import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import ecommerceURL from "../api/baseURL";
import { GlobalContext } from "../context/Context";

export const useCart = () => {
    const { cart, token, setCart } = useContext(GlobalContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((total, el) => {
                return total + el.price * el.quantity;
            }, 0);
            setTotal(total);
        };
        getTotal();
    }, [cart]);

    const incrementQuantity = (id) => {
        cart.forEach((el) => {
            if (el._id === id) {
                el.quantity += 1;
            }
        });
        setCart([...cart]);
    };

    const decrementQuantity = (id) => {
        cart.forEach((el) => {
            if (el._id === id) {
                el.quantity === 1 ? (el.quantity = 1) : (el.quantity -= 1);
            }
        });
        setCart([...cart]);
    };

    const removeProduct = (id) => {
        Swal.fire({
            icon: "warning",
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                cart.forEach((el, i) => {
                    if (el._id === id) {
                        cart.splice(i, 1);
                    }
                });
                setCart([...cart]);
                await ecommerceURL.patch(
                    "/user/add_cart",
                    { cart },
                    {
                        headers: { Authorization: token },
                    }
                );
                Swal.fire({
                    icon: "success",
                    title: "Deleted",
                    text: "This product has been deleted from cart",
                    showConfirmButton: true,
                    timer: 1500,
                    timerProgressBar: true,
                });
            }
        });
    };

    return { total, incrementQuantity, decrementQuantity, removeProduct };
};
