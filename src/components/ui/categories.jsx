import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GiMicrochip } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";

import { GlobalContext } from "../../context/Context";

export const Categories = () => {
    const { categories } = useContext(GlobalContext);
    return (
        <div className="categories__container">
            <div className="title__wrapper">
                <h2 className="title">Categories</h2>
            </div>
            <div className="categories__wrapper">
                {categories.map((category) => (
                    <div key={category._id} className="categories__link-wrapper">
                        <Link to={`/category/${category._id}`} className="categories__link">
                            <span className="link__icon">
                                {category.name === "Plates" && <GiMicrochip />}
                                {category.name === "Sensors" && <FaTemperatureHigh />}
                                {category.name === "Laptops" && <BsLaptop />}
                            </span>
                            <span className="link__name">{category.name}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
