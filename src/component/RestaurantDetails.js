import React from 'react';
import './Home.css';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import './RestaurantDetails.css';
import RestaurantReviews from './RestaurantReviews';
import { useSelector } from 'react-redux';

function RestaurantDetails() {
  // const [restaurant, setRestaurant] = useState([]);
  const { id } = useParams();

  const details = useSelector((state) => state.restaurantList);

  const { restaurant } = details;
  // useEffect(() => {
  //   const fetchDetails = async () => {
  //     await fetch('/restaurants.json')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setRestaurant(data.restaurants);
  //       });
  //   };
  //   fetchDetails();
  // }, []);
  console.log(details);
  const restaurantDetails = restaurant.find((i) => i.id == id);

  // console.log(restaurantDetails);
  // console.log(restaurantDetails.name);
  // console.log(restaurant);

  if (restaurantDetails) {
    console.log(restaurantDetails);
    console.log(restaurantDetails.reviews);
  }
  return (
    <div className="home_body">
      <Link className="btn btn-outline-dark my-2 rounded" to="/">
        Back
      </Link>
      {restaurantDetails ? (
        <div>
          <Row>
            <Col md={3}>
              <Image
                className="img"
                src={restaurantDetails.photograph}
                alt={restaurantDetails.name}
                fluid
              />
            </Col>
            <Col>
              <ListGroup>
                <ListGroup.Item>
                  <h2>{restaurantDetails.name}</h2>
                  <p>Neighborhood :{restaurantDetails.neighborhood}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>Cuisine :{restaurantDetails.cuisine_type}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>Address :{restaurantDetails.address}</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup>
                <ListGroup.Item>
                  <h4>Opening Hours :</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  Monday : {restaurantDetails.operating_hours.Monday}
                </ListGroup.Item>
                <ListGroup.Item>
                  Tuesday : {restaurantDetails.operating_hours.Monday}
                </ListGroup.Item>
                <ListGroup.Item>
                  Wednesday : {restaurantDetails.operating_hours.Monday}
                </ListGroup.Item>
                <ListGroup.Item>
                  Thursday : {restaurantDetails.operating_hours.Monday}
                </ListGroup.Item>
                <ListGroup.Item>
                  Friday : {restaurantDetails.operating_hours.Monday}
                </ListGroup.Item>
                <ListGroup.Item>
                  Saturday : {restaurantDetails.operating_hours.Monday}
                </ListGroup.Item>
                <ListGroup.Item>
                  Sunday : {restaurantDetails.operating_hours.Monday}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row className="my-3">
            <RestaurantReviews data={restaurantDetails.reviews} />
          </Row>
        </div>
      ) : (
        'null'
      )}
    </div>
  );
}

export default RestaurantDetails;
