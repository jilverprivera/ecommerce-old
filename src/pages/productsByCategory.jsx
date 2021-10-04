import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductCard } from "../components/cards/productCard";
import Layout from "../components/layout/layout";
import { GlobalContext } from "../context/Context";

const ProductsByCategory = () => {
    const { id } = useParams();
    const { products } = useContext(GlobalContext);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProductsByCategory = () => {
            if (id) {
                const productsByCat = products.filter(
                    (product) => product.category === id
                );
                setFilteredProducts(productsByCat);
            }
        };
        getProductsByCategory();
    }, [id, products]);

    return (
        <Layout>
            <div className="container">
                <div className="wrapper">
                    <div className="wrapper__grid">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductsByCategory;
