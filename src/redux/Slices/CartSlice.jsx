import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    movie: [],
    y: {},
  },
  reducers: {
    add: (state, action) => {
      state.movie.push(action.payload);
    },
    remove: (state, action) => {
      state.movie = state.movie.filter((item) => item.id !== action.payload);
    },
    play: (state, action) => {
      state.y = action.payload;
    },
  },
});

export const { add, remove, play } = CartSlice.actions;

const PostSlice = createSlice({
  name: "POST",
  initialState: {
    homemovies: [],
  },
  reducers: {
    addhomemovies: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        homemovies: action.payload,
      };

      
    },
  },
});

export const { addhomemovies } = PostSlice.actions;

export const cart = CartSlice.reducer;
export const POST = PostSlice.reducer;
