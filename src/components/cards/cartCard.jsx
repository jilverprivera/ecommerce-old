import React from "react";
import { useCart } from "../../hooks/useCart";

export const CartCard = ({ cart }) => {
    const { _id, name, images, price, quantity, product_id, stock } = cart;
    // if (cart.length === 0) return null;
    const { incrementQuantity, decrementQuantity, removeProduct } = useCart();
    return (
        <div className="cart__card">
            <img
                className="cart__image"
                alt={images.public_id}
                src={images.url}
            />
            <div className="cart__content">
                <h2 className="cart__name">{name}</h2>
                <p className="cart__ref">Ref: {product_id}</p>
                <div className="cart__price-content">
                    <p className="cart__price">${price} USD</p>
                    <span className="cart__quantity">Stock: {stock}</span>
                </div>
            </div>
            <div className="cart__display-content">
                <button
                    className="quantity__btn"
                    onClick={(e) => decrementQuantity(_id)}
                >
                    -
                </button>
                <span className="cart__quantity">{quantity}</span>
                <button
                    className="quantity__btn"
                    onClick={(e) => incrementQuantity(_id)}
                >
                    +
                </button>
            </div>

            <div className="cart__display-content">
                <button
                    className="btn btn__small btn__danger"
                    onClick={() => removeProduct(_id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
