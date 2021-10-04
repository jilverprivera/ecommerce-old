import React from "react";
import { useCart } from "../hooks/useCart";
import { CartCard } from "./cards/cartCard";

export const CartList = ({ cart }) => {
    const { total } = useCart();
    return (
        <div className="container">
            <div className="wrapper">
                <div className="display__flex">
                    {cart.map((cart) => {
                        const { _id } = cart;
                        return <CartCard {...cart} key={_id} />;
                    })}
                </div>

                <p className="cart__totalPrice">Total: ${total} USD</p>
            </div>
        </div>
    );
};
