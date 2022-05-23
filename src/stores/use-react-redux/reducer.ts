const initState = {
  count: 0,
  user: 'wyy'
};

export const reducer = (state=initState, action) => {
  console.log(state, action);
  // Object.assign();
  switch(action.type){
    case 'add_action':
      return {
        ...state,
        count: state.count + 1
      };
    case 'sub_action': {
      return {
        ...state,
        count: state.count - 1
      }
    };
    case 'send_type':
      return Object.assign({}, state, action);
    default: 
      return state; 
  }
};
