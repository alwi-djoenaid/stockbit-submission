import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  mainContent: {
    marginTop: '52px',
    flexGrow: 1,
    height: '95vh'
  }
}));

const Content = (props) => {
  const classes = useStyles();

  return (
    <main className={classes.mainContent}>
      <div>
        <div>
          {props.children}
        </div>
      </div>
    </main>
  );
};

export default Content;
