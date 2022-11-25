/* /pages/index.js */
import React, { useState } from "react";

import { Col, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import RestaurantList from "../components/RestaurantList";
import {FaSearch} from "react-icons/fa"
import styles from "../styles/index.module.css"

function Home() {
  const [query, updateQuery] = useState("");
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <div className={styles.bar_search}>
            <InputGroup>
              
              <Input
                onChange={e => updateQuery(e.target.value.toLocaleLowerCase())}
                value={query}
                placeholder="Search..."
              />
              
            </InputGroup>
          </div>
          <RestaurantList search={query} />
        </Col>
      </Row>
      <style jsx>
        {`
          .search {
            margin: 20px;
            width: 500px;
          }
        `}
      </style>
    </div>
  );
}
export default Home;