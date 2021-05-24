import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieService from "../services/MovieService";

const movieService = new MovieService()

const initialState = {
  value: [],
  status: 'idle'
}

export const getMovieByKeyword = createAsyncThunk(
  'movies/getByKeyword',
  async (keyword) => {
    const response = await movieService.getMovieByKeyword(keyword);
    console.log(response.data)
    return response.data;
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
        state.value.push(action.payload);
      })
  }
});

export default movieSlice.reducer;
