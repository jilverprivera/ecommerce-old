import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";

export const DetailCard = ({ detail }) => {
    const {  addToCart } = useContext(GlobalContext);
    const { name, images, stock, sold, content, price } = detail;
    return (
        <div className="detailProduct__container">
            <div className="detailProduct__imageContent">
                <img
                    className="detailProduct__image"
                    src={images.url}
                    alt={images.public_id}
                />
            </div>

            <div className="detailProduct__content">
                <div className="detailProduct__content--header">
                    <h1 className="detailProduct__content--title">{name}</h1>
                    <span className="detailProduct__content--price">
                        ${price} USD
                    </span>
                </div>
                <p className="detailProduct__content--description">{content}</p>
                <p className="detailProduct__content--solds">Solds: {sold}</p>
                <p className="detailProduct__content--amount">
                    Amount: {stock}
                </p>
                <button
                    className="btn btn__large btn__primary"
                    onClick={() => addToCart(detail)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};
