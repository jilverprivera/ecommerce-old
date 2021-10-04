import React from "react";
import { useCart } from "../hooks/useCart";
import { CartCard } from "./cards/cartCard";
import PayPalButton from "./paypal";

export const CartList = ({ cart }) => {
    const { total, tranSuccess} = useCart();
    
    return (
        <div className="container">
            <div className="wrapper">
                <div className="display__flex">
                    {cart.map((cart) => {
                        const { _id } = cart;
                        return <CartCard cart = {cart} key={_id} />;
                    })}
                </div>

                <p className="cart__totalPrice">Total: ${total} USD</p>
                <PayPalButton total={total} tranSuccess={tranSuccess} />
            </div>
        </div>
    );
};
