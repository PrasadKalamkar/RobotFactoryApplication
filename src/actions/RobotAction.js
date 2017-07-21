import 'whatwg-fetch';

export const extinguishRobot = (robot) => {
  return {
    type: 'EXTINGUISH_ROBOT',
    id: robot.id,
    robot
  };
};

export const saveExtinguishRobot = (robot) => {
  const saveExtinguishRobotAPI = `http://localhost:3000/robots/${robot.id}/extinguish`;
  return (dispatch) => {
    return fetch(saveExtinguishRobotAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {       
        dispatch(saveExtinguishRobotSuccess(response.data));
      })
    .catch(error => {
        throw(error);
    });
  };
};

export const saveExtinguishRobotSuccess = (robot) => {
  return {
    type: 'SAVE_EXTINGUISH_SUCCESS',
    robot
  };
};

export const recycleRobot = (robotIds) => {
  return {
    type: 'RECYCLE_ROBOT',
    robotIds: robotIds
  };
};

export const saveRecycleRobot = (robot) => {

  const saveRecycleRobotAPI = `http://localhost:3000/robots/0/recycle`;
  return (dispatch) => {
    return fetch(saveRecycleRobotAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(robot)
    })
    .then(response => {       
        dispatch(saveRecycleRobotSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const saveRecycleRobotSuccess = (robot) => {
  return {
    type: 'SAVE_RECYCLE_SUCCESS',
    robot
  };
};

export const factorySecondRobot = (robotIds) => {
  return {
    type: 'MARK_AS_FACTORY_SECOND',
    robotIds: robotIds
  };
};

export const shipRobot = (robotId) => {
  return {
    type: 'CREATE_SHIPMENT_READY',
    robotId: robotId
  };
};

export const removeShipRobot = (robotId) => {
  return {
    type: 'REMOVE_FROM_SHIPMENT',
    robotId: robotId
  };
};

export const submitShipment = (robotIds) => {
  return {
    type: 'SUBMIT_SHIPMENT',
    robotIds: robotIds
  };
};

export const saveShipment = (robot) => {

  const saveSubmitShipmentRobotAPI = `http://localhost:4000/shipment/0/create`;
  return (dispatch) => {
    return fetch(saveSubmitShipmentRobotAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(robot)
    })
    .then(response => {       
        dispatch(saveShipmentSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const saveShipmentSuccess = (robot) => {
  return {
    type: 'SAVE_SHIPMENT_SUCCESS',
    robot
  };
};

const apiUrl = 'http://localhost:3000/robots';
export const fetchRobotSuccess = (robot) => {
  return {
    type: 'FETCH_ROBOT_SUCCESS',
    robot
  };
};

export const fetchRobot = () => {
  return (dispatch) => {
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        dispatch(fetchRobotSuccess(json));
      }).catch(error => {
        throw(error);
      });
  };
};