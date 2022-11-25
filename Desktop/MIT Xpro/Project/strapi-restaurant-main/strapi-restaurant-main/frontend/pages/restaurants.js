/* /pages/restaurants.js */
import { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";
import styles from "../styles/restaurants.module.css"
import { LoadingScreen } from "../components/LoadingScreen";

import Cart from "../components/cart/";
import AppContext from "../context/AppContext";

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const GET_RESTAURANT_DISHES = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
      image{
        url
      }
    }
  }
`;

function Restaurants() {
  const appContext = useContext(AppContext);
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: router.query.id },
  });

  if (error) return "Error Loading Dishes";
  if (loading) return <LoadingScreen/>;
  if (data.restaurant) {
    const { restaurant } = data;
    
    return (
      <><div className={styles.title}>
        <h1>{restaurant.name}</h1>
        <div>
                  <div style={{ background: `url(${process.env.NEXT_PUBLIC_API_URL}${restaurant.image[0].url})`}} 
                    className={styles.img_background}
                    
                    
                  /></div>
        </div>
        <div className={styles.raw_cards}>
          {restaurant.dishes.map((res) => (
            
              <Card className={styles.card_dishes} key={res.id}>
                <div className={styles.card_content}>
                  <CardBody className={styles.card_text}>
                    <CardTitle><h5>{res.name}</h5> {process.env.NEXT_PUBLIC_API_URL }</CardTitle>
                    <CardText>{res.description}</CardText>
                    
                  </CardBody>
                  <div>
                  <CardImg 
                    className={styles.card_image}
                    top={false}
                    
                    src={`${API_URL}${res.image.url}`}
                  /></div>
                </div>
                
                <div className={styles.card_footer}>
                <CardText style={{ fontWeight: 600 }}> $ {res.price.toFixed(2)}</CardText>
                  <Button
                    
                    color="warning"
                    onClick={() => appContext.addItem(res)}
                    href="/cart"
                    
                  >
                    + Add To Cart
                  </Button>

                  <style jsx>
                    {`
                      a {
                        color: white;
                      }
                      a:link {
                        text-decoration: none;
                        color: white;
                      }
                      .container-fluid {
                        margin-bottom: 30px;
                      }
                      .btn-outline-primary {
                        color: #007bff !important;
                      }
                      a:hover {
                        color: white !important;
                      }
                    `}
                  </style>
                </div>
              </Card>
            
          ))}

        </div>
      </>
    );
  }
  return <h1>Add Dishes</h1>;
}
export default Restaurants;