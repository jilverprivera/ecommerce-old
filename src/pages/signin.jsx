import React from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import { useLogin } from "../hooks/useLogin";

const SignIn = () => {
    const [values, handleInputChange] = useForm({ email: "", password: "" });
    const { email, password } = values;

    const { handleLogin } = useLogin(values);
    return (
        <div className="auth">
            <div className="wrapper__flex">
                <div className="form__wrapper">
                    <Link to={"/"} className="home__redirect">TechEcommerce</Link>
                    <form className="form" onSubmit={handleLogin}>
                        <input
                            className="input"
                            placeholder="Email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                        <input
                            className="input"
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn__secondary btn__large btn__block"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="redirection__wrapper">
                        <span>Don't have account?</span>
                        <Link to={"/signup"} className="redirection__link">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
