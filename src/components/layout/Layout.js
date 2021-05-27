/* eslint-disable react/prop-types */
/* eslint-disable valid-jsdoc */
import React from 'react';
import {withRouter} from 'react-router-dom';
import Appbar from './Appbar';
import Content from './Content';

/**
 *
 * @param {*} props Passes <Content />'s element to Layout
 * @return Application shell
 */
const Layout = (props) => {
  return (
    <div>
      <Appbar />
      <Content>{props.children}</Content>
    </div>
  );
};

export default withRouter(Layout);
