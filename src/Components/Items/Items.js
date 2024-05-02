import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";

const Items = (props) => {
  const { idMeal, strMeal, strMealThumb, strInstructions } = props.items;

  const url = `/more-details/${idMeal}`;

  return (
    <>
      <div className="clo-lg-3 col-md-4 col-sm-6 col-xs-12 mb-5 card-container">
        <div className="card">
          <img src={strMealThumb} className="card-img-top" alt="imag" />
          <div className="card-body">
            <h5 className="card-title">{strMeal}</h5>
            <p className="card-text">{strInstructions}</p>

            <Link to={url} class="btn btn-primary">
              More Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
