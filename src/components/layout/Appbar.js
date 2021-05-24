import {AppBar, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import {withRouter} from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },

  appbar: {
    padding: '12px 20px'
  },

  titleHeader: {
    fontSize: '24px'
  }
}));

const Appbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Typography variant="h1" className={classes.titleHeader}>
          Movie Catalogue
        </Typography>
      </AppBar>
    </div>
    
  );
};

export default withRouter(Appbar);
