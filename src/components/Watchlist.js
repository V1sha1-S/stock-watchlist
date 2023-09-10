import React from "react";
import "./Stock.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWatchlist } from "../reducers/watchlistSlice";

const Watchlist = () => {
  const watchlist = useSelector((state) => state.watchlist.watchlistData);
  const dispatch = useDispatch();

  const handleRemoveFromWatchlist = (symbol) => {
    dispatch(removeFromWatchlist(symbol));
  };

  return (
    <div className="Watchlist">
      <h2>Watchlist Screen</h2>
      {watchlist.length > 0 ? (
        <ul className="main-list">
          <li className="sub-list heading">
            <span>Company</span>
            <span>Stock Name</span>
            <span>Share Price</span>
            <span>Remove From Watchlist</span>
          </li>
          {watchlist.map((item) => (
            <li className="sub-list" key={item.symbol}>
              {item.symbol} - {item.name} - {item.price}
              <button onClick={() => handleRemoveFromWatchlist(item.symbol)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your watchlist is empty.</p>
      )}
    </div>
  );
};

export default Watchlist;
