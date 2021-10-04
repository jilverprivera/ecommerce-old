import React, { useContext } from "react";
import { CartList } from "../components/cartList";
import { EmptyCart } from "../components/emptyCart";
import Layout from "../components/layout/layout";
import { GlobalContext } from "../context/Context";

const Cart = () => {
    const { cart } = useContext(GlobalContext);

    if (cart.length === 0) {
        return (
            <Layout>
                <EmptyCart />
            </Layout>
        );
    }

    return (
        <Layout>
            <CartList cart={cart} />
        </Layout>
    );
};

export default Cart;
