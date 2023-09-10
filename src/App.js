import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Watchlist from "./components/Watchlist";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Watchlist" element={<Watchlist />} />{" "}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
