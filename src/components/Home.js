import { Button, Card, CardContent, Container, Grid, IconButton, Input, InputBase, makeStyles, Paper, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieByKeyword, movieList } from '../container/MovieSlice';
import MovieList from './MovieList';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingLeft: '50px',
    paddingRight: '50px',
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  searchBox: {
    padding: '24px'
  },
  paper: {
    padding: '5px 12px',
    maxWidth: '500px',
    display: 'flex',
    alignItems: 'center',
    margin: 'auto'
  },
  input: {
    flex: 1
  }
}));

const Home = props => {
  const classes = useStyles();
  const movies = useSelector(movieList);
  const dispatch = useDispatch();

  const [movieName, setMovieName] = useState('');

  return (
    <Container maxWidth="lg">
    <div className={classes.wrapper}>
      <div className={classes.searchBox}>
        <Paper className={classes.paper}>
          <Input placeholder="Search any keyword" className={classes.input} inputProps={{ 'aria-label': 'description' }} onChange={(event) => setMovieName(event.target.value)}></Input>
          <IconButton onClick={() => dispatch(getMovieByKeyword(movieName))}>
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <div>
      <div>
        <MovieList />
      </div>
      <Button>Load More</Button>
      </div>
    </div>
    </Container>
  );
};

export default Home;
