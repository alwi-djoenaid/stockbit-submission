import { Button, Container, Input, makeStyles, Paper } from '@material-ui/core';
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
    padding: '12px',
    maxWidth: '700px',
    display: 'flex',
    alignItems: 'center',
    margin: 'auto'
  },
  input: {
    flex: 1
  }
}));

const LogicTest = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <div className={classes.wrapper}>
        <div className={classes.searchBox}>
          <Paper className={classes.paper}>
            <Input placeholder="Insert any word"
              className={classes.input}
              inputProps={{'aria-label': 'description'}}
            >
            </Input>
            <div style={{marginLeft: '12px'}}>
              <Button color="secondary">Insert another word</Button>
              <Button color="primary">Check anagram</Button>
            </div>
            
          </Paper>
        </div>
      </div>
    </Container>
  );
};

export default LogicTest;