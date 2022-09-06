import React from "react";
import "../styles/Card.css";

const Card = (data) => {
  // console.log(data);
  return (
    <div>
      <div className="Card">
        <h2 className="name">{data.data.name}</h2>
        <div className="imgContainer">
          <img
            src={data.data.sprites?.other?.home?.front_default}
            alt={data.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
