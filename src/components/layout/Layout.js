import React from 'react';
import {withRouter} from 'react-router-dom';
import Appbar from './Appbar';
import Content from './Content';

const Layout = (props) => {
  return (
    <div>
      <Appbar />
      <Content>{props.children}</Content>
    </div>
  );
};

export default withRouter(Layout);
