import React, { useState } from 'react';

function StarRating({ data }) {
  const star = <i class="fa fa-star review_star" aria-hidden="true"></i>;
  const halfStar = (
    <i class="fa fa-star-half review_star" aria-hidden="true"></i>
  );
  let halfStarDisplay = '';
  let starDisplay = [];
  console.log(data);

  for (let i = 1; i <= Math.floor(data); i++) {
    console.log(star);
    starDisplay.push(star);
  }
  if (data > Math.floor(data)) {
    halfStarDisplay = halfStar;
  }

  return (
    <div>
      {starDisplay}
      {halfStarDisplay}
      {data}
    </div>
  );
}

export default StarRating;
