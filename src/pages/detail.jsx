import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { GlobalContext } from "../context/Context";
import Layout from "../components/layout/layout";
import { DetailCard } from "../components/cards/detailCard";
import { ProductCard } from "../components/cards/productCard";

const Detail = () => {
    const { id } = useParams();
    const { products } = useContext(GlobalContext);
    const [currentProduct, setCurrentProduct] = useState([]);

    useEffect(() => {
        if (id) {
            products.forEach((product) => {
                if (product._id === id) setCurrentProduct(product);
            });
        }
    }, [id, products]);

    if (currentProduct.length === 0) return null;

    return (
        <Layout>
            <section className="detail__container">
                <DetailCard detail={currentProduct} />
                <div className="detail__relatedProducts__container">
                    <h2 className="detail__relatedProduct--title">
                        Related products
                    </h2>
                    <div className="detail__relatedProducts">
                        {products.map((product) => {
                            return (
                                product.category === currentProduct.category &&
                                product._id !== currentProduct._id && (
                                    <ProductCard product={product} />
                                )
                            );
                        })}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Detail;
