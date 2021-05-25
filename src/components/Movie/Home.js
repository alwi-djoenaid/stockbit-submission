import { Button, Card, CardContent, Container, Grid, IconButton, Input, InputBase, makeStyles, Paper, Snackbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Alert } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { getMovieByKeyword, movieList } from '../../container/MovieSlice';
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
  const dispatch = useDispatch();

  const [movieName, setMovieName] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const closeSnackbar = () => {
    setOpenSnackbar(false);
  }

  const handleClick = (movieName) => {
    if(movieName.length === 0) {
      setTimeout(() => {
        setOpenSnackbar(true);
      }, 300);
    } else {
      dispatch(getMovieByKeyword(movieName));
    }
  }

  return (
    <Container maxWidth="lg">
      <div className={classes.wrapper}>
        <div className={classes.searchBox}>
          <Paper className={classes.paper}>
            <Input placeholder="Search any keyword" 
              className={classes.input} 
              inputProps={{ 'aria-label': 'description' }} 
              onChange={(event) => setMovieName(event.target.value)}
              onKeyPress={(event) => {
                if(event.key === 'Enter'){
                  event.preventDefault();
                  handleClick(movieName);
                }
              }}>

            </Input>
            <IconButton onClick={() => handleClick(movieName)}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div>
          <div>
            <MovieList />
          </div>
        </div>
      </div>
      <Snackbar open={openSnackbar} onClose={closeSnackbar}
        autoHideDuration={5000} 
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
        <Alert severity="error">Unable to search. Please insert any keyword</Alert>
      </Snackbar>
    </Container>
  );
};

export default withRouter(Home);
