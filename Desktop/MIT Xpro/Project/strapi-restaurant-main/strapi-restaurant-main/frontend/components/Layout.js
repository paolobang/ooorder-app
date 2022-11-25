/* /components/Layout.js */

import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { 
  Container,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
  } from "reactstrap";
import { logout } from "../lib/auth";
import AppContext from "../context/AppContext";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import styles from "../styles/layout.module.css"
import Footer from "./assets/Footer";

const Layout = (props) => {
  const title = "Ooorder® whatever you want";
  const { user, setUser } = useContext(AppContext);

  return (
    <div>
      <Head>
        <title>{title}</title>
        
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <script src="https://js.stripe.com/v3" />
      </Head>
      <header>
        <Nav className="navbar navbar-dark bg-danger mb-5" expand="md">
          <div className="container">
            {/* Logo section */}
            <NavItem>
              <Link href="/">
                <a className="navbar-brand" style={{ fontWeight: 600 }}>Ooorder</a>
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar  className="ml-auto">
              <DropdownToggle nav>
                <FaUserCircle/> 
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem> 
                  {/* Lser in the bar */}
                  <NavItem >
                    {user ? (
                      <a className="nav-link">{user.username.charAt(0).toUpperCase() + user.username.slice(1)}</a>
                    ) : (
                      <Link href="/register">
                        <a className="nav-link"> Sign up</a>
                      </Link>
                    )}
                  </NavItem>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavItem>
                    {user ? (
                      <Link href="/">
                        <a
                          className="nav-link"
                          onClick={() => {
                            logout();
                            setUser(null);
                          }}
                        >
                          Logout
                        </a>
                      </Link>
                    ) : (
                      <Link href="/login">
                        <a className="nav-link">Log in</a>
                      </Link>
                    )}
                  </NavItem>
                </DropdownItem>
                
                
              </DropdownMenu>
            </UncontrolledDropdown>

            {/* Cart in the bar */}
            <NavItem>
                <Link href="/cart">
                  <a className="nav-link" style={{  }}> <FaShoppingCart/></a>
                </Link>
            </NavItem>



          </div>
        </Nav>
      </header>
      <Container className="mb-5">{props.children}</Container>
      <Footer></Footer>
      <style jsx global>
            {`
              .nav-item .nav-link{
                color: #fff;
                font-size: 1.2rem;
              }
              .dropdown .nav-item .nav-link{
                color: #868686;
                font-size: 1rem;
              }
              .dropdown-item.active, .dropdown-item:active{
                background-color: #dc788233;
              }
            `}
      </style>
    </div>

  );
};

export default Layout;