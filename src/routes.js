import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import RobotContainer from './containers/RobotContainer';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={RobotContainer}></IndexRoute>
  </Route>
);