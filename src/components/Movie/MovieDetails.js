import { Container, Divider, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { getMovieByImdbId, movieDetails } from '../../container/MovieSlice';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingLeft: '50px',
    paddingRight: '50px',
    paddingTop: '44px',
    paddingBottom: '20px',
    display: 'flex',
    justifyContent: 'center'
  },
  content: {
    width: '100%',
    padding: '12px',
    paddingLeft: '24px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  headerDivider: {
    margin: '0 2px'
  },
  paper: {
    padding: '14px',
    width: '65%',
    display: 'flex'
  },
  poster: {
    display: 'flex'
  },
  title: {
    fontSize: '24px'
  },
  rating: {
    display: 'flex'
  },
  ratingText: {
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    paddingLeft: '8px'
  },
  details: {
    padding: '12px 0'
  },
  description: {
    margin: '10px 0'
  },
  plot: {
    marginTop: '12px'
  },
  plotTitle: {
    fontSize: '20px'
  },
  plotDescription: {
    marginTop: '10px'
  }
}));

/**
 * 
 * @param {*} props 
 * @returns List of movies based on search results
 */
const MovieDetails = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const movie = useSelector(movieDetails);

  useEffect(() => {
    dispatch(getMovieByImdbId(props.match.params.id));
  }, [])

  return (
    <Container maxWidth="lg">
      <div className={classes.wrapper}>
        <Paper className={classes.paper}>
          <div className={classes.poster}>
            <img src={movie.Poster} alt={movie.Poster} />
          </div>
          <div className={classes.content}>
            <div className={classes.header}>
              <Typography variant="h1" className={classes.title} color="primary">{movie.Title}</Typography>
              <div className={classes.rating}>
                <Divider orientation="vertical" flexItem className={classes.headerDivider} />
                <Typography variant="h2" className={classes.ratingText}>{movie.Runtime}</Typography>
              </div>
            </div>
            <div className={classes.details}>
              <Grid container direction="row" className={classes.description}>
                <Grid item xs={3} md={3} lg={4}>
                  <Typography variant="body2">Genre</Typography>
                </Grid>
                <Grid item xs={3} md={3} lg={8}>
                  <Typography variant="body2">: {movie.Genre}</Typography>
                </Grid>
              </Grid>

              <Grid container direction="row" className={classes.description}>
                <Grid item xs={3} md={3} lg={4}>
                  <Typography variant="body2">Director</Typography>
                </Grid>
                <Grid item xs={3} md={3} lg={8}>
                  <Typography variant="body2">: {movie.Director}</Typography>
                </Grid>
              </Grid>

              <Grid container direction="row" className={classes.description}>
                <Grid item xs={3} md={3} lg={4}>
                  <Typography variant="body2">Writer</Typography>
                </Grid>
                <Grid item xs={3} md={3} lg={8}>
                  <Typography variant="body2">: {movie.Writer}</Typography>
                </Grid>
              </Grid>

              <Grid container direction="row" className={classes.description}>
                <Grid item xs={3} md={3} lg={4}>
                  <Typography variant="body2">Production</Typography>
                </Grid>
                <Grid item xs={3} md={3} lg={8}>
                <Typography variant="body2">: {movie.Production}</Typography>
                </Grid>
              </Grid>

              <Grid container direction="row" className={classes.description}>
                <Grid item xs={3} md={3} lg={4}>
                  <Typography variant="body2">Casts</Typography>
                </Grid>
                <Grid item xs={3} md={3} lg={8}>
                <Typography variant="body2">: {movie.Actors}</Typography>
                </Grid>
              </Grid>
            </div>
            <Divider />
            <div className={classes.plot}>
              <Typography className={classes.plotTitle} color="primary">Synopsis</Typography>
              <Typography variant="body2" className={classes.plotDescription}>{movie.Plot}</Typography>
            </div>
          </div>
          

        </Paper>
      </div>
    </Container>
  )
}

export default withRouter(MovieDetails);
