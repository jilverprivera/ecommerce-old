import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import { ProductCard } from "../cards/productCard";

export const BestSellers = () => {
    const { products } = useContext(GlobalContext);
    const bestSellers = products
        .filter((el) => el.stock > 0)
        .sort((a, b) => b.sold - a.sold)
        .slice(0, 4);
    return (
        <div className="bestSellers__container">
            <div className="bestSellers__title-wrapper">
                <h2 className="bestSellers__title">Best sellers</h2>
            </div>
            <div className="bestSellers__wrapper">
                {bestSellers.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};
