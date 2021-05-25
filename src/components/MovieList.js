import { Button, Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { movieList } from '../container/MovieSlice';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: '100%',
    display: 'flex'
  },
  poster: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px'
  },
  image: {
    width: '100px'
  },
  cardDescription: {
    padding: '16px',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cardContent: {
    padding: 0
  },
  cardHeader: {
    fontSize: '16px',
    fontWeight: 'bold',
    maxHeight: '3.6em',
    lineHeight: '1.2em',
  },
  releaseDate: {
    fontSize: '14px',
    fontWeight: '500',
    paddingTop: '5px'
  },
  cardDetails: {
    padding: '10px 0px'
  },
  cardButton: {
    display : 'flex',
    justifyContent: 'flex-end' 
  }
}));

const MovieList = () => {
  const classes = useStyles();
  const movies = useSelector(movieList);

  return (
    <Grid container spacing={2}>
      {movies.map((movie, i) => 
        <Grid key={i} item  xs={12} md={6} lg={4}>
          <Card className={classes.card}>
            <div className={classes.poster}>
              <img src={movie.Poster} className={classes.image} alt={movie.Title} />
            </div>
            <div className={classes.cardDescription}>
              <CardContent className={classes.cardContent}>
                <Typography className={classes.cardHeader} variant="h1">
                  {movie.Title}
                </Typography>
                <Typography className={classes.releaseDate} variant="h2">
                  {movie.Year}
                </Typography>
                <div className={classes.cardDetails}>
                  <Typography style={{fontSize: "14px"}}>
                    {movie.Type}
                  </Typography>
                </div>
              </CardContent>
              <div className={classes.cardButton}>
                <Button color="primary">
                  See Details
                </Button>
              </div>
            </div>
          </Card>
        </Grid>
      )}
    </Grid>
  );
};

export default MovieList;
