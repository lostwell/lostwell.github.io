const initialToggleState = "disabled";

const toggleStateReducer = (toggleState = initialToggleState, action) => {
  switch(action.type) {
    case 'theme/setToggleState': 
      return action.payload
    default:
      return toggleState;
  }
}

export const setToggleState = (value) => {
  return {
    type: 'theme/setToggleState',
    payload: value,
  }
}

export const selectToggleState = (state) => state.toggleState

export default toggleStateReducer