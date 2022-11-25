/* components/RestaurantList/index.js */
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import styles from "../../styles/index.module.css"

import Link from "next/link";

import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col,
  CardLink,
} from "reactstrap";

import { LoadingScreen } from "../LoadingScreen";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
const QUERY = gql`
  {
    restaurants {
      id
      name
      description
      image {
        url
      }
      logo {
        url
      }
    }
  }
`;

function RestaurantList(props) {
  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading restaurants";
  //if restaurants are returned from the GraphQL query, run the filter query
  //and set equal to variable restaurantSearch
  if (loading) return <LoadingScreen/>;
  if (data.restaurants && data.restaurants.length) {
    //searchQuery
    const searchQuery = data.restaurants.filter((query) =>
      query.name.toLowerCase().includes(props.search)
    );

    // console.log(process.env.REACT_APP_API_URL)
    if (searchQuery.length != 0) {
      return (
        <Row>
          {searchQuery.map((res) => (
            <Col  className={styles.card_restaurant} xs="12" sm="4" key={res.id}>
              <CardLink href={`/restaurants?id=${res.id}`}>
              <Card style={{ border: 0}}>
                <div className={styles.img_section}>
                <CardImg
                  className={styles.img_card}
                  top={false}
                  
                  src={
                    process.env.NODE_ENV === "production"
                    ? res.image[0].url
                    : `${process.env.NEXT_PUBLIC_API_URL}${res.image[0].url}`
                  }
                />
                </div>

              <div className={styles.card_footer}>
              <div>
                <img
                  className={styles.icon}
                  alt="Sample"
                  src={
                    process.env.NODE_ENV === "production"
                    ? res.logo.url
                    : `${process.env.NEXT_PUBLIC_API_URL}${res.logo.url}`
                  }
                />
              </div>
                <div className={styles.text_section}>   
                    <div className={styles.card_title}><h3>{res.name}</h3>{res.image[0].url}</div>                    
                    <div className={styles.card_subtitle}>
                    <span className={styles.card_description}>{res.description}</span>
                      <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="sc-5674cfe4-9 jEAWJT"><path d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35V7zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z" fill="#007AFF"></path><path d="M10 6H5v2h5V6zm9 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" fill="#007AFF"></path></svg>
                      <span className={styles.card_promo}>Free Delivery </span>
                    </div>
                    </div>
       
                </div>
                
              </Card>
              </CardLink>
            </Col>
          ))}


        </Row>
      );
    } else {
      return <h1>No Restaurants Found</h1>;
    }
  }
  return <h5>Add Restaurants</h5>;
}
export default RestaurantList;