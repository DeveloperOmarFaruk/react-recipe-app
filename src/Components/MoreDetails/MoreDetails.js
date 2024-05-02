import React, { useEffect, useState } from "react";
import "./MoreDetails.css";
import { useParams, useNavigate } from "react-router";

const MoreDetails = () => {
  const [recipe, setRecipe] = useState([]);
  const { idMeal } = useParams();

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRecipe(data.meals[0]));
  }, [idMeal]);

  const {
    strMealThumb,
    strMeal,
    strCategory,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
  } = recipe;

  const navigate = useNavigate();

  return (
    <>
      <div className="recipe-details-container">
        {recipe.length == 0 ? (
          <div className="loder">
            <div class="spinner-border text-primary " role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="card">
            <img src={strMealThumb} className="card-img-top" alt="img" />
            <h5 className="card-header">{strMeal}</h5>
            <div className="card-body">
              <h6 className="card-title">{strCategory}</h6>
              <br />
              <h6 className="card-title">Instructions: </h6>
              <p className="card-text">{strInstructions}</p>
              <div>
                <h6 className="card-title">Ingredient: </h6>
                <ul>
                  {strIngredient1 === "" || strIngredient1 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient1}</li>
                  )}
                  {strIngredient2 === "" || strIngredient2 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient2}</li>
                  )}
                  {strIngredient3 === "" || strIngredient3 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient3}</li>
                  )}
                  {strIngredient4 === "" || strIngredient4 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient4}</li>
                  )}
                  {strIngredient5 === "" || strIngredient5 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient5}</li>
                  )}
                  {strIngredient6 === "" || strIngredient6 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient6}</li>
                  )}
                  {strIngredient7 === "" || strIngredient7 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient7}</li>
                  )}
                  {strIngredient8 === "" || strIngredient8 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient8}</li>
                  )}
                  {strIngredient9 === "" || strIngredient9 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient9}</li>
                  )}
                  {strIngredient10 === "" || strIngredient10 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient10}</li>
                  )}
                  {strIngredient11 === "" || strIngredient11 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient11}</li>
                  )}
                  {strIngredient12 === "" || strIngredient12 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient12}</li>
                  )}
                  {strIngredient13 === "" || strIngredient13 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient13}</li>
                  )}
                  {strIngredient14 === "" || strIngredient14 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient14}</li>
                  )}
                  {strIngredient15 === "" || strIngredient15 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient15}</li>
                  )}
                  {strIngredient16 === "" || strIngredient16 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient16}</li>
                  )}
                  {strIngredient17 === "" || strIngredient17 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient17}</li>
                  )}
                  {strIngredient18 === "" || strIngredient18 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient18}</li>
                  )}
                  {strIngredient19 === "" || strIngredient19 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient19}</li>
                  )}
                  {strIngredient20 === "" || strIngredient20 === null ? (
                    <> </>
                  ) : (
                    <li>{strIngredient20}</li>
                  )}
                </ul>
              </div>
              <button onClick={() => navigate("/")} class="btn btn-primary">
                Back to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MoreDetails;
