import React, { useEffect, useState } from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";

const Players = ({ cart, setCart }) => {
  const [search, setSearch] = useState("");
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
      .then((res) => res.json())
      .then((data) => setPlayers(data?.player));
  }, [search]);

  return (
    <div>
      <div className="form-control">
        <div className="input-group ">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search…"
            className="input input-bordered w-full "
          />
          <button className="btn btn-square bg-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-2xl font-bold py-5"> Showing Search Results for {search} </h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {" "}
          {players?.map((player) => (
            <SinglePlayer
              player={player}
              key={player.idPlayer}
              cart={cart}
              setCart={setCart}
            ></SinglePlayer>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default Players;
