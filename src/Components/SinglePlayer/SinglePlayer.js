import React from "react";

const SinglePlayer = ({ player, cart, setCart }) => {
  const {
    strPlayer,
    strCutout,
    strNationality,
    strDescriptionEN,
    strSport,
    strTeam,
    idPlayer,
  } = player;

  const addToCart = () => {
    const info = {
      strPlayer,
      strCutout,
      strNationality,
      strTeam,
      idPlayer,
    };

    if (cart) {
      const newCart = [...cart, info];
      setCart(newCart);
    }
  };

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src={
              strCutout
                ? strCutout
                : "https://us.v-cdn.net/6022045/uploads/defaultavatar.png"
            }
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {strPlayer}
            <div className="badge badge-secondary">
              {strNationality ? strNationality.slice(0, 8) : "null"}
            </div>
          </h2>
          <p>
            {strDescriptionEN
              ? strDescriptionEN?.slice(0, 120)
              : "Sorry! Players Data Not found"}
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{strSport}</div>
            <div className="badge badge-outline">{strTeam}</div>
          </div>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary"
              onClick={() => {
                addToCart();
              }}
            >
              Add to Team
            </button>
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-secondary">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
