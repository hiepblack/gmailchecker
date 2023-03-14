import React from "react";
import "./card.css";

const Card = ({item}) => {
  return (
    <div class="card">
      <i class="uil uil-usd-circle card__icon"></i>
      <p>Name:{item?.name}</p>
      <p class="card-footer">Sevice : {item?.sevice}</p>
      <button>Buy now</button>
    </div>
  );
};

export default Card;
