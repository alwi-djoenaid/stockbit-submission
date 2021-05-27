import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import MovieService from '../services/MovieService';

const movieService = new MovieService();

const initialState = {
  value: [],
  status: 'idle',
  resultFound: false,
  errorMessage: '',
  movieDetail: {},
  openSnackbar: 'false',
};

export const getMovieByKeyword = createAsyncThunk(
    'movies/getByKeyword',
    async (keyword) => {
      const response = await movieService.getMovieByKeyword(keyword);
      return response.data;
    },
);

export const getMovieByImdbId = createAsyncThunk(
    'movies/getMovieByImdbId',
    async (imdbId) => {
      const response = await movieService.getMovieByImdbId(imdbId);
      return response.data;
    },
);

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
          if (action.payload.Response) {
            state.resultFound = true;
            state.value = action.payload;
          } else if (!action.payload.Response) {
            state.resultFound = false;
            state.errorMessage = action.payload.Error;
            state.openSnackbar = true;
          }
        })
        .addCase(getMovieByImdbId.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getMovieByImdbId.fulfilled, (state, action) => {
          state.status = 'idle';
          state.movieDetail = action.payload;
        });
  },
});

export const movieList = (state) => state.movie.value;
export const movieDetails = (state) => state.movie.movieDetail;
export const errorMessage = (state) => state.movie.errorMessage;
export const resultFound = (state) => state.movie.resultFound;

export default movieSlice.reducer;
