import React, { useContext } from "react";
import { IoBagHandleOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/Context";

export const ProductCard = ({ product }) => {
    const { addToCart } = useContext(GlobalContext);

    const { _id, name, images, price, sold } = product;
    return (
        <div className="card">
            <div className="action__wrapper">
                <div className="action" onClick={() => addToCart(product)}>
                    <span className="icon">
                        <IoBagHandleOutline />
                    </span>
                    <span className="detail">Add to cart</span>
                </div>
                <Link to={`/detail/${_id}`} className="action">
                    <span className="icon">
                        <IoEyeOutline />
                    </span>
                    <span className="detail">View detail</span>
                </Link>
            </div>
            <img src={images.url} alt={images.product_id} className="image" />
            <div className="card__content">
                <h3>{name}</h3>
                <div className="card__footer">
                    <p className="price">${price} USD</p>
                    <p className="sold">Sold: {sold}</p>
                </div>
            </div>
        </div>
    );
};
