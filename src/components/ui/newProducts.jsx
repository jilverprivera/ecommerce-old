import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GlobalContext } from "../../context/Context";

const settings = {
    dots: false,
    arorws: false,
    infinite: true,
    speed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    variableWidth: true,
    // centerPadding: "0px",
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export const NewProducts = () => {
    const { products } = useContext(GlobalContext);
    const newProducts = products
        .filter((el) => el.stock > 0)
        .sort(
            (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
        )
        .slice(0, 4);
    return (
        <div className="newProducts__container">
            <div className="title__wrapper">
                <h2 className="title">New products</h2>
            </div>
            <Slider {...settings}>
                {newProducts.map((product) => (
                    <BannerCard product={product} key={product._id} />
                ))}
            </Slider>
        </div>
    );
};

const BannerCard = ({ product }) => {
    const { addToCart } = useContext(GlobalContext);
    return (
        <div key={product._id} className="banner__container">
            <div className="banner__image-information">
                <h2 className="banner__title">{product.name}</h2>
                <p className="banner__content">{product.content}</p>

                <div className="banner__footer">
                    <Link
                        to={`/detail/${product._id}`}
                        className="banner__link"
                    >
                        View detail
                    </Link>
                    <div onClick={() => addToCart(product)}>
                        <AiOutlineShoppingCart />
                    </div>
                </div>
            </div>
            <div className="banner__image-wrapper">
                <img
                    src={product.images.url}
                    alt={product.images.product_id}
                    className="banner__image"
                />
            </div>
        </div>
    );
};
