import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/layout";
import moment from "moment";
import { GlobalContext } from "../context/Context";

const Shopping = () => {
    const { history } = useContext(GlobalContext);
    console.log(history);
    return (
        <Layout>
            <div className="principal">
                Shoppings: {history.length}
                <div>
                    {history.map((shopping) => {
                        const {
                            _id,
                            createdAt,
                            complete,
                            send,
                            address,
                            cart,
                        } = shopping;

                        return (
                            <div className="shoppingCard__container">
                                <p>
                                    {moment(createdAt).format("MMMM Do, YYYY")}
                                </p>
                                <div
                                    key={_id}
                                    className="shoppingCard__content"
                                >
                                    <div>
                                        {cart.map((cart) => {
                                            const { images, name, quantity } =
                                                cart;
                                            return (
                                                <div>
                                                    <img
                                                        style={{
                                                            width: "7rem",
                                                            height: "7rem",
                                                            objectFit:
                                                                "contain",
                                                        }}
                                                        src={images.url}
                                                        alt={images.public_id}
                                                    />
                                                    <p>{name}</p>
                                                    <span>
                                                        Amount: {quantity}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {/* <div>
                                    <p>Tracking ID</p>
                                    <p>{_id}</p>
                                </div> */}

                                    {/* <p>{address.recipient_name}</p>
                                <p>Address</p>
                                <p>
                                    {address.line1}, {address.city} |{" "}
                                    {address.state}, {address.country_code}
                                </p> */}
                                    <div>
                                        Status:
                                        {complete ? (
                                            <span> Completed</span>
                                        ) : (
                                            <span> Not completed</span>
                                        )}
                                    </div>
                                    <div>
                                        Send:
                                        {send ? (
                                            <span> Send</span>
                                        ) : (
                                            <span> Not send</span>
                                        )}
                                    </div>
                                    <Link>View detail</Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default Shopping;
