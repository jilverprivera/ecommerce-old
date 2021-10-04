import React from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";

const SignUp = () => {
    const [values, handleInputChange] = useForm({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = values;

    return (
        <div className="auth">
            <div className="wrapper__flex">
                <div className="form__wrapper">
                    <Link to={"/"} className="home__redirect">
                        TechEcommerce
                    </Link>
                    <form className="form">
                        <input
                            className="input"
                            placeholder="Your name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                        />
                        <input
                            className="input"
                            placeholder="Your email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                        <input
                            className="input"
                            placeholder="Your password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn__secondary btn__large btn__block"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className="redirection__wrapper">
                        <span>Already registered?</span>
                        <Link to={"/signin"} className="redirection__link">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
