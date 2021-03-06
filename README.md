## React Movies Catalogue

This project contains movie catalogue integrated with anagram logic test answer and writtes test case in .pdf file. <br />
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Logic Test Answer Instruction

1. On the application, click Logic Test menu on the app bar.
2. Click the search box, enter any word. Then click INSERT ANOTHER WORD.
3. Repeat step 2 if you want to insert another word.
4. Once you are done, click CHECK ANAGRAM.
5. Press F12 and click Console tab to see the anagram possibilites result.

## Features

1. Home button on app bar to redirect user to homepage.
2. User can search his/her desired movie by entering any keyword then click search button (or press enter on the keyboard).
3. On the search result, user can zoom in a movie poster simply by clicking on of the movie posters. User can also look at the movie details by clicking See Details, he/she will be directed to a single movie details page.
4. On the single movie details page, it displays its title, duration, genre, director, writer, production, casts, and synopsis.

## File Structure

There are five folders inside src folder:

1. app - Used for Redux store configuration.
2. assets - Contains used properties such as .img files.
3. components - Web components are defined inside this folder
4. container - Contains logic that is used for managing states and web components.
5. services - Contains logic that is used for consuming API.

## Unit Test Component

You can find the unit tests at App.test.js <br />
There are three unit tests.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
