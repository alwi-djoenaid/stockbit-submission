/* eslint-disable valid-jsdoc */
import {Button,
  Container,
  Input,
  makeStyles,
  Paper,
  Typography} from '@material-ui/core';
import React, {useState} from 'react';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingLeft: '50px',
    paddingRight: '50px',
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  searchBox: {
    padding: '24px',
  },
  paper: {
    padding: '12px',
    maxWidth: '700px',
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
  },
  input: {
    flex: 1,
  },
  wordList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  wordListHeader: {
    fontSize: '18px',
    margin: '12px 0',
    fontWeight: '500',
  },
}));

const LogicTest = () => {
  const classes = useStyles();

  const [word, setWord] = useState();
  const [wordArray, setWordArray] = useState([]);

  // eslint-disable-next-line prefer-const
  let anagram = [];

  /**
   *
   * @param {*} word The inserted word by user
   * inserted words kept at wordArray state.
   */
  const addWord = (word) => {
    setWordArray((oldArray) => [...oldArray, word]);
  };

  /**
   *
   * @param {*} word The inserted word
   * @return lowered case sorted word
   * and sorted in alphabetical order.
   */
  const sortWord = (word) => {
    const arr = word.split('');
    let temp;

    for (let i=0; i<arr.length; i++) {
      for (let j=i+1; j<arr.length; j++) {
        if (arr[i] > arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr.join('').toLowerCase();
  };

  const resetWordList = () => {
    setWordArray([]);
  };

  /**
   * Checks the anagram possibilities
   * from the inserted words.
   */
  const checkAnagram = () => {
    console.log('List of words = ', wordArray);
    for (let i=0; i<wordArray.length; i++) {
      const sortedWord = sortWord(wordArray[i]);

      if (anagram[sortedWord] != null) {
        anagram[sortedWord].push(wordArray[i]);
      } else {
        anagram[sortedWord] = [wordArray[i]];
      }

      if (i === (wordArray.length - 1)) {
        console.log('Possible anagram lists = ', anagram);
      }
    }
  };

  /**
   * Renders the page components.
   */
  return (
    <Container maxWidth="lg">
      <div className={classes.wrapper}>
        <div className={classes.searchBox}>
          <Paper className={classes.paper}>
            <Input placeholder="Insert any word"
              className={classes.input}
              inputProps={{'aria-label': 'description'}}
              onChange={(event) => setWord(event.target.value)}
            >
            </Input>
            <div style={{marginLeft: '12px'}}>
              <Button color="primary" onClick={() => addWord(word)}>
                Insert another word
              </Button>
              <Button color="primary" onClick={() => checkAnagram()}>
                Check anagram
              </Button>
              <Button color="secondary" onClick={() => resetWordList()}>
                Reset Words
              </Button>
            </div>
          </Paper>
        </div>
        <div className={classes.wordList}>
          <Typography className={classes.wordListHeader}>
            List of Words
          </Typography>
          {wordArray.map((word, i) =>
            <Typography key={i}>{word}</Typography>,
          )}
        </div>
      </div>
    </Container>
  );
};

export default LogicTest;
