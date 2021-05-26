import { Button, Container, Input, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';

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

  const [word, setWord] = useState('');
  const [wordArray, setWordArray] = useState([]);
  const [anagramList, setAnagramList] = useState([]);
  let anagram = [];

  const addWord = (word) => {
    setWordArray(oldArray => [...oldArray, word]);
    console.log(wordArray);
  }

  const sortWord = (word) => {
    const arr = word.split('');
    let temp;

    for(let i=0 ; i<arr.length ; i++) {
      for(let j=i+1 ; j<arr.length ; j++) {
        if(arr[i] > arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr.join('').toLowerCase();
  }

  const checkAnagram = () => {
    setAnagramList([]);
    console.log(wordArray)
    for(let i=0 ; i<wordArray.length ; i++) {
      let sortedWord = sortWord(wordArray[i]);

      if(anagram[sortedWord] != null) {
        anagram[sortedWord].push(wordArray[i]);
        
      } else {
        anagram[sortedWord] = [wordArray[i]];
      }
      
      setAnagramList(anagram);
      console.log(anagram)
    }
  }

  // const sortAnagramResult = () => {
  //   let temp;
  //   for(let i=0 ; i<anagram.length ; i++) {
  //     for(let j=i+1 ; j<anagram.length ; j++) {
  //       if(anagram[i].length > anagram[j].length) {
  //         temp = anagram[i];
  //         anagram[i] = anagram[j];
  //         anagram[j] = temp;
  //       }
  //     }
  //   }
  // }

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
              <Button color="secondary" onClick={() => addWord(word)}>Insert another word</Button>
              <Button color="primary" onClick={() => checkAnagram()}>Check anagram</Button>
            </div>
          </Paper>
        </div>
        <div>
          <Typography>List of Words</Typography>
          {wordArray.map((word) => 
            <Typography>{word}</Typography>
          )}
        </div>
        {/* <div>
          <Typography>List of Anagrams</Typography>
          {anagramList.map((list) => 
            <div>
              <Typography>{list}</Typography>
              <div>
                {list.map((wordList) => 
                  <Typography>{wordList}</Typography>
                )}
              </div>
            </div>
          )}
        </div> */}
      </div>
    </Container>
  );
};

export default LogicTest;