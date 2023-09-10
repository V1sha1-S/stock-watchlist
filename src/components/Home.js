import React, { useState } from "react";
import axios from "axios";
import "./Stock.css";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist } from "../reducers/watchlistSlice";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const watchlist = useSelector((state) => state.watchlist.watchlistData);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      alert("Please enter the Company Name.");
      return;
    }

    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchQuery}&apikey=993J5SXSHENLYWRO`
      );
      setSearchResults(response.data.bestMatches);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToWatchlist = (company) => {
    const isCompanyInWatchlist = watchlist.some(
      (item) => item.symbol === company["1. symbol"]
    );
    if (!isCompanyInWatchlist) {
      dispatch(
        addToWatchlist({
          symbol: company["1. symbol"],
          name: company["2. name"],
          price: company["9. matchScore"],
        })
      );
      alert("Added to watchlist:", company);
    } else {
      alert("Company is already in watchlist.");
    }
  };

  return (
    <div className="Home">
      <h2>Home Screen</h2>
      <input
        className="text-field"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a company"
        required
      />
      {searchQuery === "" && (
        <p className="error-message">Please enter a company name</p>
      )}
      <button onClick={handleSearch}>Search</button>
      <ul className="main-list">
        <li className="sub-list heading">
          <span>Company</span>
          <span>Stock Name</span>
          <span>Share Price</span>
          <span>Add to Watchlist</span>
        </li>
        {searchResults.map((result) => (
          <li className="sub-list" key={result["1. symbol"]}>
            <span>{result["1. symbol"]}</span>
            <span>{result["2. name"]}</span>
            <span>{result["9. matchScore"]}</span>
            <button onClick={() => handleAddToWatchlist(result)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
