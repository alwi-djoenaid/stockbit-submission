import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from './app/store';
import {getMovieByImdbId, getMovieByKeyword} from './container/MovieSlice';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import MovieDetails from './components/Movie/MovieDetails';

/**
 * Test for rendering the whole application
 */
test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
      , div);
  ReactDOM.unmountComponentAtNode(div);
});

/**
 * Test for request API search movie keyword
 */
test('success search keyword', async () => {
  const data = await getMovieByKeyword('chess');
  expect(data).toBeDefined();
});

/**
 * Test for request API get movie details by imdbId
 * and load single movie details page component
 */
test('success load movie details page', async () => {
  const data = await getMovieByImdbId('tt3385730');
  expect(data).toBeDefined();

  const {getByText} = render(
      <BrowserRouter>
        <Provider store={store}>
          <MovieDetails />
        </Provider>
      </BrowserRouter>,
  );

  expect(getByText(/Genre/i)).toBeInTheDocument();
  expect(getByText(/Director/i)).toBeInTheDocument();
  expect(getByText(/Writer/i)).toBeInTheDocument();
  expect(getByText(/Production/i)).toBeInTheDocument();
  expect(getByText(/Casts/i)).toBeInTheDocument();
  expect(getByText(/Synopsis/i)).toBeInTheDocument();
});
