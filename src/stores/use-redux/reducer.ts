const initState = {
  value: '默认值'
};

export const reducer = (state=initState, action) => {
  console.log(state, action);
  switch (action) {
    case 'send_type':
      return Object.assign({}, state, action);
    default:
      return state;
  }
};
