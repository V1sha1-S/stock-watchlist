import React from "react";
import { Link } from "react-router-dom";
import "./Stock.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="nav-heading" to="/Home">
        Stock Watchlist
      </Link>
      <Link className="link" to="/Home">
        Home
      </Link>
      <Link className="link" to="/Watchlist">
        Watchlist
      </Link>
    </nav>
  );
};

export default Navbar;
