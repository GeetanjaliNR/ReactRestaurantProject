import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import RestaurantCard from './RestaurantCard';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { listRestaurants } from '../Action/restaurantAction';

function Home() {
  // const [hotels, setHotels] = useState([]);

  const dispatch = useDispatch();

  const hotels = useSelector((state) => state.restaurantList);
  const { restaurant } = hotels;

  useEffect(() => {
    dispatch(listRestaurants());
  }, []);

  console.log(hotels);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetch('/restaurants.json')
  //       .then((res) => res.json())
  //       .then((data) => setHotels(data.restaurants));
  //   };
  //   fetchData();
  // }, []);
  // console.log('hotesls', hotels);

  return (
    <Row className="home_body">
      {restaurant.map((item) => (
        <Col sm={12} md={8} lg={6} xl={2}>
          <RestaurantCard data={item} />
        </Col>
      ))}
    </Row>
  );
}

export default Home;
