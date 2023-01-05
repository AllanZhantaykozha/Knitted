import React from 'react';

export const CardItem = ({ imageUrl, title, price, type }) => {
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <div>
        <p>{title}</p>
        <p>{price}</p>
      </div>
      <p>{type}</p>
      <div>
        {[...new Array(11)].map((_, index) => (
          <div>
            <p>{index}</p>
            <input type="radio" name={index} id={index} />
          </div>
        ))}
      </div>
    </div>
  );
};
