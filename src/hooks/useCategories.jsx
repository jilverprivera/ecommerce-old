import { useEffect, useState } from "react";
import ecommerceURL from "../api/baseURL";

export const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [categoriesCb, setCategoriesCb] = useState(false);
    useEffect(() => {
        const getCategories = async () => {
            const { data } = await ecommerceURL.get("/api/categories");
            setCategories(data.categories);
        };
        getCategories();
    }, [categoriesCb]);

    return { categories, categoriesCb, setCategoriesCb };
};
