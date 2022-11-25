/* pages/checkout.js */

import React, { useContext } from "react";

import { Row, Col } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import InjectedCheckoutForm from "../components/checkout/CheckoutForm";
import AppContext from "../context/AppContext";

import Resume from "../components/cart/resume";
import styles from "../styles/checkout.module.css"

function Checkout() {
  // get app context
  const appContext = useContext(AppContext);
  // isAuthenticated is passed to the cart component to display order button
  const { isAuthenticated } = appContext;

  // load stripe to inject into elements components
  const stripePromise = loadStripe("pk_test_51M2SlyI1IBj4XK0jlqpjDjUlx4tSBoDdRzAdL7jQJHlyc4bqdzK6wT7cpza74eAWAP6CbbdT3W5vFZKb6SqRDFGx004IxkXANe");

  return (
    <Row>
      <div className={styles.container_checkout}>
        <Col style={{ paddingRight: 0 }} sm={{ size: 4, order: 1, offset: 1 }}>
          <h1 style={{ margin: 20 }}>Checkout</h1>
          <Resume isAuthenticated={isAuthenticated} />
        </Col>
        <Col style={{ paddingLeft: 15 }} sm={{ size: 6, order: 2 }}>
          <Elements stripe={stripePromise}>
            <InjectedCheckoutForm />
          </Elements>
        </Col>
      </div>
    </Row>
  );
  // }
}
export default Checkout;