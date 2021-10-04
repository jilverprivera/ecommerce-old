import React from "react";
import Header from "../components/layout/header";
import Layout from "../components/layout/layout";
import { BestSellers } from "../components/ui/bestSellers";
import { Categories } from "../components/ui/categories";
import { NewProducts } from "../components/ui/newProducts";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="principal">
                    <div className="principal__wrapper">
                        <Categories />
                        {/* <NewProducts /> */}
                    </div>
                </div>
                <BestSellers />
            </div>
        </div>
    );
};

export default Home;
