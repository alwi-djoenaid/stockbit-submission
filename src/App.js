/* eslint-disable require-jsdoc */
import React, { useEffect } from 'react';
import './App.css';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/Movie/Home';
import MovieDetails from './components/Movie/MovieDetails';
import LogicTest from './components/LogicTest/LogicTest';


function App2(props) {
  let routes;

  useEffect(() => {
    props.history.push(props.location);
  }, []);

  routes = (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/imdb/:id" exact component={MovieDetails} />
        <Route path="/logicTest" exact component={LogicTest} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );

  return routes;
};

export default withRouter(App2);
