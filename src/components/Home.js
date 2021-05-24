import { IconButton, Input, InputBase, makeStyles, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovieByKeyword } from '../container/MovieSlice';

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
  const dispatch = useDispatch();

  const [movieName, setMovieName] = useState('');

  const searchMovies = (keyword) => {

  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.searchBox}>
        <Paper className={classes.paper}>
          <Input placeholder="Search any keyword" className={classes.input} inputProps={{ 'aria-label': 'description' }} onChange={(event) => setMovieName(event.target.value)}></Input>
          <IconButton onClick={() => dispatch(getMovieByKeyword(movieName))}>
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </div>
  );
};

export default Home;
