import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

const PayPalButton = ({ totalCart, tranSuccess }) => {
    const onSuccess = (payment) => {
        tranSuccess(payment);
    };

    const onCancel = (data) => {
        console.log("The payment was cancelled!", data);
    };

    const onError = (err) => {
        console.log("Error!", err);
    };

    let env = "production";
    let currency = "USD";
    let total = totalCart;

    const client = {
        sandbox:
            "ARCK4IgWJLmEUm8borLiXYfG69MuEs4w1Pl27dtnUSjFetLFR6QIDimnNOXjN5Bv8y2a-canRS159F8I",
        production: "YOUR-PRODUCTION-APP-ID",
    };
    let style = {
        size: "large",
        color: "blue",
        shape: "rect",
        label: "checkout",
    };
    return (
        <PaypalExpressBtn
            env={env}
            client={client}
            currency={currency}
            total={total}
            onError={onError}
            onSuccess={onSuccess}
            onCancel={onCancel}
            style={style}
        />
    );
};

export default PayPalButton;
