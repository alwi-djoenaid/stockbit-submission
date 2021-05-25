import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieService from "../services/MovieService";

const movieService = new MovieService();

const initialState = {
  value: [],
  status: 'idle'
}

export const getMovieByKeyword = createAsyncThunk(
  'movies/getByKeyword',
  async (keyword) => {
    const response = await movieService.getMovieByKeyword(keyword);
    console.log(response.data.Search)
    return response.data.Search;
  },
);

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    // push: (state) => {
    //   state.value.push('1');
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovieByKeyword.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMovieByKeyword.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
        console.log(state.value);
      })
  }
});

export const movieList = (state) => state.movie.value;

export default movieSlice.reducer;
