
export default (state = [], action) => {
  let newState = [];
  switch (action.type){
    case 'FETCH_ROBOT_SUCCESS':
      return action.robot;

    case 'EXTINGUISH_ROBOT': 
      newState = [...state];
      newState.find(i => i.id == action.id).qualityStatus.push("Extinguished");
      return [...newState];
    
    case 'RECYCLE_ROBOT':     
      newState = [...state];
      for (let i = 0; i < newState.length; i++) {
        if (action.robotIds.includes(newState[i].id)) {
          newState[i].qualityStatus.push("Recycled");
        }
      }
      return [...newState];
      
    case 'MARK_AS_FACTORY_SECOND':
      newState = [...state];
      for (let i = 0; i < newState.length; i++) {
        if (action.robotIds.includes(newState[i].id)) {
          newState[i].qualityStatus.push("FactorySecond");
        }
      }
      return [...newState];

    case 'CREATE_SHIPMENT_READY':
      newState = [...state];
      for (let i = 0; i < newState.length; i++) {
        if (action.robotId === newState[i].id) {
          newState[i].shipmentStatus = "ShippingReady";
          break;
        }
      }
      return [...newState];
    
    case 'REMOVE_FROM_SHIPMENT':
      newState = [...state];
      for (let i = 0; i < newState.length; i++) {
        if (action.robotId === newState[i].id) {
          newState[i].shipmentStatus = "";
        }
      }
      return [...newState];

      case 'SUBMIT_SHIPMENT':
      newState = [...state];
      for (let i = 0; i < newState.length; i++) {
        if (action.robotIds.includes(newState[i].id)) {
          newState[i].shipmentStatus = "Shipped";
        }
      }
      return [...newState];

    case 'SAVE_EXTINGUISH_SUCCESS':
      newState = [...state];
      return newState;

    case 'SAVE_RECYCLE_SUCCESS':
      newState = [...state];
      return newState;
    
    case 'SAVE_SHIPMENT_SUCCESS':
      newState = [...state];
      return newState;
    
    default:    
          return state;
  }
};