import { combineReducers } from 'redux';
import robot from './RobotReducer';

export default combineReducers({
  robot: robot
});