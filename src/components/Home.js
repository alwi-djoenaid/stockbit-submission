import { IconButton, Input, InputBase, makeStyles, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

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

  return (
    <div className={classes.wrapper}>
      <div className={classes.searchBox}>
        <Paper className={classes.paper}>
          <Input placeholder="Search any keyword" className={classes.input} inputProps={{ 'aria-label': 'description' }}></Input>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </div>
  );
};

export default Home;
