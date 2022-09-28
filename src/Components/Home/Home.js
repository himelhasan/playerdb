import React, { useEffect, useState } from "react";
import Players from "../Players/Players";
import Swal from "sweetalert2";

const Home = () => {
  const [cart, setCart] = useState([]);

  const handelDelete = (id, name) => {
    console.log(id);
    const restCartPlayers = cart.filter((player) => player.idPlayer !== id);
    setCart(restCartPlayers);
    Swal.fire("Good job!", `You Deleted ${name}!`, "success");
  };

  return (
    <div>
      <div class="flex p-5 m-5">
        <div class="flex-auto w-3/4">
          <Players cart={cart} setCart={setCart}></Players>
        </div>

        <div class="flex-auto w-1/4 bg-gray-100 p-5 m-5">
          <h1 className="text-lg font-bold text-center">Selected Players</h1>
          {cart.map((cartItem) => (
            <div className="alert bg-gray-200 shadow-lg flex mx-2 my-5">
              <div className="avatar w-1/6">
                <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      cartItem.strCutout
                        ? cartItem.strCutout
                        : "https://us.v-cdn.net/6022045/uploads/defaultavatar.png"
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className=" w-4/6">
                <p className="text-lg">{cartItem.strPlayer}</p>
              </div>
              <div className="w-1/6">
                <button
                  onClick={() => {
                    handelDelete(cartItem.idPlayer, cartItem.strPlayer);
                  }}
                  className="btn btn-circle btn-outline"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
