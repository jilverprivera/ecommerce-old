import { useContext } from "react";
import ecommerceURL from "../api/baseURL";
import { GlobalContext } from "../context/Context";

export const useLogin = (values) => {
    const { setToken } = useContext(GlobalContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await ecommerceURL.post("/user/login", {
                ...values,
            });
            setToken(data.token);
            localStorage.setItem("token", data.token);
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${err.message}`,
                showConfirmButton: true,
            });
        }
    };

    return { handleLogin };
};
