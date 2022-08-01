import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import StarRating from './StarRating';

function RestaurantReviews({ data }) {
  console.log(data);

  return (
    <div>
      {data.map((rev) => (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h4>{rev.name}</h4>
              <h5>
                <StarRating data={rev.rating} />
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              {rev.date}
              {rev.comments}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
}

export default RestaurantReviews;
