/* eslint-disable require-jsdoc */
import React, { useEffect } from 'react';
import logo from './logo.svg';
import {Counter} from './features/counter/Counter';
import './App.css';
import {Redirect, Route, Switch, withRouter} from 'react-router';
import Layout from './components/layout/Layout';
import Home from './components/Movie/Home';
import MovieDetails from './components/Movie/MovieDetails';
import LogicTest from './components/LogicTest/LogicTest';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }

function App2(props) {
  let routes;

  useEffect(() => {
    props.history.push(props.location);
  }, []);

  routes = (
    <Layout>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/movie/imdb/:id" exact component={MovieDetails} />
        <Route path="/logicTest" exact component={LogicTest} />
        <Redirect to="/home" />
      </Switch>
    </Layout>
  );

  return routes;
};

export default withRouter(App2);
