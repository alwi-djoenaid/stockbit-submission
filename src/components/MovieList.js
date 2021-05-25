import { Button, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import ImageZoom from 'react-medium-image-zoom';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
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

const MovieList = (props) => {
  const classes = useStyles();
  const movies = useSelector(movieList);

  return (
    <div>
        {movies.length !== 0 ? 
          <Grid container spacing={2}>
            {movies.Search.map((movie, i) => 
              <Grid key={i} item  xs={12} md={6} lg={4}>
                <Card className={classes.card}>
                  <div className={classes.poster}>
                    <ImageZoom 
                      image={{
                        src: movie.Poster,
                        alt: movie.Poster,
                        className: classes.image
                      }}
                      zoomImage={{
                        src: movie.Poster,
                        alt: movie.Poster,
                      }}
                    />
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
                      <Button color="primary" to={`/movie/imdb/${movie.imdbID}`} onClick={() => props.history.push(`/movie/imdb/${movie.imdbID}`)}>
                        See Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </Grid>
            )}
          </Grid>
          : null
        }
      {/* <Button>Load More</Button> */}
    </div>
  );
};

export default withRouter(MovieList);
