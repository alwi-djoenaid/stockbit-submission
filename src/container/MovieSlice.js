import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieService from "../services/MovieService";

const movieService = new MovieService();

const initialState = {
  value: [],
  status: 'idle',
  resultFound: false,
  errorMessage: '',
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
        console.log(action.payload)
        if(action.payload.Response) {
          state.resultFound = true;
          state.value = action.payload;
          console.log(state.value.Response)
        } else if(!action.payload.Response) {
          state.resultFound = false;
          state.errorMessage = action.payload.Error
          console.log(action.payload.Error)
          state.openSnackbar = true;
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
export const errorMessage = (state) => state.movie.errorMessage
export const resultFound = (state) => state.movie.resultFound;

export default movieSlice.reducer;