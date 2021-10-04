import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import Swal from "sweetalert2";

const PayPalButton = ({ totalCart, tranSuccess }) => {
    const onSuccess = (payment) => {
        tranSuccess(payment);
    };

    const onCancel = (data) => {
        Swal.fire({
            icon: "warning",
            title: "Oops!",
            text: `The payment was cancelled ${data}`,
            showConfirmButton: true,
        });
    };

    const onError = (err) => {
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: ` ${err}`,
            showConfirmButton: true,
        });
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
