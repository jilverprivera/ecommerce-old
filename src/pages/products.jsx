import React, { useContext, useState } from "react";
import { ProductCard } from "../components/cards/productCard";
import Layout from "../components/layout/layout";
import Pagination from "../components/pagination";
import { GlobalContext } from "../context/Context";

const Products = () => {
    const { products } = useContext(GlobalContext);

    const productsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastProducts = currentPage * productsPerPage;
    const indexOfFirstProducts = indexOfLastProducts - productsPerPage;

    const currentProducts = products.slice(
        indexOfFirstProducts,
        indexOfLastProducts
    );
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <Layout>
            <div className="container">
                <div className="wrapper">
                    <div className="wrapper__grid">
                        {currentProducts.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                    <Pagination
                        itemsPerPage={productsPerPage}
                        totalItems={products.length}
                        paginate={paginate}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Products;
