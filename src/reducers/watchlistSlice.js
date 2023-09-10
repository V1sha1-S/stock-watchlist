import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: {
    watchlistData: JSON.parse(localStorage.getItem("watchlist")) || [],
  },
  reducers: {
    addToWatchlist: (state, action) => {
      state.watchlistData.push(action.payload);
      localStorage.setItem("watchlist", JSON.stringify(state.watchlistData));
    },
    removeFromWatchlist: (state, action) => {
      state.watchlistData = state.watchlistData.filter(
        (item) => item.symbol !== action.payload
      );
      localStorage.setItem("watchlist", JSON.stringify(state.watchlistData));
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
