import React, { useContext } from "react";
import { CartList } from "../components/cartList";
import { EmptyCart } from "../components/emptyCart";
import Header from "../components/layout/header";
import { GlobalContext } from "../context/Context";

const Cart = () => {
    const { cart } = useContext(GlobalContext);

    if (cart.length === 0) {
        return <EmptyCart />;
    }

    return (
        <div>
            <Header/>
            <CartList cart= { cart }/>
        </div>
    );
};

export default Cart;
