import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/Context";

export const useDetail = (id = "") => {
    const { products } = useContext(GlobalContext);
    const [currentProduct, setCurrentProduct] = useState([]);

    useEffect(() => {
        if (id) {
            products.forEach((product) => {
                if (product._id === id) setCurrentProduct(product);
            });
        }
    }, [id, products]);

    return { currentProduct };
};
