/* components/cart/index.js */

import React, { useContext, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { 
    Button, 
    Card, 
    CardBody, 
    CardTitle, 
    Badge,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem, } from "reactstrap";
import styles from "../../styles/resume.module.css"

import {FaAngleLeft, FaUserCircle} from "react-icons/fa"

import AppContext from "../../context/AppContext";

function Resume() {
  const appContext = useContext(AppContext);
  const router = useRouter();

  const { cart, isAuthenticated } = appContext;

  const inputRef = useRef(null);

  // console.log(cart)
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:1337";




  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>

    <div className={styles.cnt_resume}>
      <Card style={{ padding: "10px 5px" }} className="cart">        
        <CardBody style={{ padding: 10 }}>
          <div>
            {isAuthenticated ? (
              cart.items.length > 0 ? (
                <div className={styles.total_amount}>
                  
                  <Badge className={styles.badge_title} color="white">
                    <h5 >Total:</h5>
                    <h5>$ {appContext.cart.total.toFixed(2)}</h5>
                    
                  </Badge>
                  <hr />
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
                        <div style={{ textAlign: "right"}}>
                          <span style={{ marginLeft: 5 }} id="item-quantity">
                             $ {item.price.toFixed(2)}
                          </span><br/>
                          <span style={{ marginLeft: 5 }} id="item-quantity">
                            Qty: {item.quantity}
                          </span>
                        </div>
                      </div>
                    );
                  }
                })
              : null}


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
    </div>
  );
}
export default Resume;