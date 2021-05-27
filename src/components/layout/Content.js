/* eslint-disable react/prop-types */
/* eslint-disable valid-jsdoc */
import {makeStyles} from '@material-ui/core';
import React from 'react';
import {withRouter} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  mainContent: {
    marginTop: '61px',
    flexGrow: 1,
    height: '95vh',
  },
}));

/**
 *
 * @param {*} props Passes children elements to Content
 * @return content/pages display setup from application shell
 */
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
