import {configureStore} from '@reduxjs/toolkit';
import movieReducer from '../container/MovieSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
