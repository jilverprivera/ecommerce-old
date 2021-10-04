import { useEffect, useState } from "react";
import ecommerceURL from "../api/baseURL";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [productsCb, setProductsCb] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await ecommerceURL.get("/api/products");
            setProducts(data.products);
        };
        getProducts();
    }, [productsCb]);
    return { products, productsCb, setProductsCb };
};
