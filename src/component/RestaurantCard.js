import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RestaurantCard({ data }) {
  return (
    <Link to={`details/${data.id}`}>
      <Card className="rounded m-2 p-3 h-100 ">
        <Card.Img variant="top" src={data.photograph} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
            <p>Cuisine: {data.cuisine_type}</p>
          </Card.Text>
          <Card.Text>
            <p>Location: {data.neighborhood}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default RestaurantCard;
