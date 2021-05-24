import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducer from '../container/MovieSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movie: movieReducer,
  },
});
