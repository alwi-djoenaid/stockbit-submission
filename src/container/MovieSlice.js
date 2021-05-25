import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieService from "../services/MovieService";

const movieService = new MovieService();

const initialState = {
  value: [],
  status: 'idle',
  movieDetail: {},
  openSnackbar: 'false'
}

export const getMovieByKeyword = createAsyncThunk(
  'movies/getByKeyword',
  async (keyword) => {
    const response = await movieService.getMovieByKeyword(keyword);
    console.log(response.data.Search);
    console.log(response)
    return response.data;
  },
);

export const getMovieByImdbId = createAsyncThunk(
  'movies/getMovieByImdbId',
  async (imdbId) => {
    const response = await movieService.getMovieByImdbId(imdbId);
    console.log(response.data);
    return response.data;
  }
)

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovieByKeyword.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMovieByKeyword.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
        console.log(state.value)

        if(state.value === undefined){
          setTimeout(() => {
            state.openSnackbar = true;
          }, 3000)
        }
      })
      .addCase(getMovieByImdbId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMovieByImdbId.fulfilled, (state, action) => {
        state.status = 'idle';
        state.movieDetail = action.payload;
      })
  }
});

export const movieList = (state) => state.movie.value;
export const movieDetails = (state) => state.movie.movieDetail;

export default movieSlice.reducer;
