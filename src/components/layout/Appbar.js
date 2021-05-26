import {AppBar, Button, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import {withRouter} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },

  appbar: {
    padding: '12px 20px',
    display: 'flex',
    flexDirection: 'row'
  },

  titleHeader: {
    fontSize: '24px',
    flexGrow: 1
  }
}));

const Appbar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Typography variant="h1" className={classes.titleHeader}>
          Movie Catalogue
        </Typography>
        <Button color="inherit" onClick={() => props.history.push('/')}>Home</Button>
        <Button color="inherit" onClick={() => props.history.push('/logicTest')}>Logic Test</Button>
      </AppBar>
    </div>
    
  );
};

export default withRouter(Appbar);
