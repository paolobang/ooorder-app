/* components/cart/index.js */

import React, { useContext, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Card, CardBody, CardTitle, Badge } from "reactstrap";
import styles from "../../styles/cart.module.css"

import {FaAngleLeft, FaUserCircle} from "react-icons/fa"

import AppContext from "../../context/AppContext";

function Cart() {
  const appContext = useContext(AppContext);
  const router = useRouter();

  const { cart, isAuthenticated } = appContext;

  const inputRef = useRef(null);

  // console.log(cart)
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:1337";

  return (
    <div>
      <Card style={{ padding: "10px 5px" }} className="cart">
        <CardTitle style={{ margin: 10 }}>Shopping Cart:</CardTitle>
        <hr />
        <CardBody style={{ padding: 10 }}>

          <div>
            {cart.items
              ? cart.items.map((item) => {
                
                  if (item.quantity > 0) {
                    return (
                      <div className={styles.items_one} key={item.id}>
                      <div className={styles.dish_image}>
                        <img 
                          className={styles.dish_image_item}
                          src={`${API_URL}${item.image.url}`}
                        />
                        </div>
                        <div className={styles.item_title}>
                          <span id="item-name"> {item.name}</span>
                        </div>
                        <div className={styles.counter}>
                          <Button 
                            className={styles.counter_btn}
                            onClick={() => appContext.removeItem(item)}
                          >
                            -
                          </Button>
                          <div>
                          <span style={{ marginLeft: 5 }} id="item-quantity">
                            {item.quantity}
                          </span>
                        </div>
                          <Button
                            className={styles.counter_btn}
                            onClick={() => appContext.addItem(item)}
                            
                          >
                            +
                          </Button>
                        </div>

                        <div className={styles.prices}>
                          <span id="item-price">&nbsp; $ {item.price.toFixed(2)}</span>
                        </div>
                        
                      </div>
                    );
                  }
                })
              : null}
            {isAuthenticated ? (
              cart.items.length > 0 ? (
                <div className={styles.total_amount}>
                  <hr/>
                  <Badge style={{ width: 200, padding: 10 }} color="white">
                    <h5 style={{ fontWeight: 200 }}>Total:</h5>
                    <h3>$ {appContext.cart.total.toFixed(2)}</h3>
                    
                  </Badge>

                  {router.pathname === "/cart" && (
                    <div className={styles.checkout}>
                      <Link href="/checkout">
                        <a className={styles.btn_checkout}>Checkout</a>
                          
                        
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  {router.pathname === "/checkout" && (
                    <small
                      style={{ color: "blue" }}
                      onClick={() => window.history.back()}
                    >
                      Back to restaurant
                    </small>
                  )}
                </>
              )
            ) : (
              <><hr/>
                <div className={styles.goback}>
                  <div className={styles.goback_back}>
                    <small
                            style={{ cursor: "pointer"}}
                            onClick={() => window.history.back()}
                    >
                        <FaAngleLeft/>Back
                    </small>
                  </div>


                  <div className={styles.goback_login}>
                    <Link href="/login" >
                      <small style={{ cursor: "pointer"}}>
                      <FaUserCircle/>  Login to checkout
                      </small>
                    </Link>
                  </div>



              </div>
              </>
            )}
          </div>
          {console.log(router.pathname)}
        </CardBody>
      </Card>
      <style jsx>{`
        #item-price {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
        #item-quantity {
          font-size: 0.95em;
          padding-bottom: 4px;
          color: rgba(158, 158, 158, 1);
        }
        #item-name {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
      `}</style>

    </div>
  );
}
export default Cart;