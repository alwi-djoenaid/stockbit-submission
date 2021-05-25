import { makeStyles } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router';

const useStyles = makeStyles((theme) => ({
  mainContent: {
    marginTop: '61px',
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

export default withRouter(Content);
